import { last } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { set } from "wright/lib/config";
import { ChatFC, Message } from "./ChatDrawer";
import { antropic, gptSystem, reminder } from "./initialMessage";
import { prettier } from "./shared";
import { extractArtifacts } from "./utils/extractArtifacts";

// Types

// Utility Functions
const getCodeSpace = (): string => {
  return location.pathname.slice(1).split("/")[1];
};

const codeSpace = getCodeSpace();
const loadMessages = () => JSON.parse(localStorage.getItem(`chatMessages-${codeSpace}`) ?? "[]") as Message[];

// Main Component: ChatInterface
const ChatInterface: React.FC<
  { onCodeUpdate: (code: string) => void; isOpen: boolean; onClose: () => void }
> = (
  { onCodeUpdate, onClose, isOpen },
) => {
  const [messages, __setMessages] = useState<Message[]>(loadMessages());
  const [codeFound, setCodeFound] = useState(false);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [codeWhatAiSeen, setAICode] = useState("");

  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editInput, setEditInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const broadcastChannel = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    setIsDarkMode(storedMode === "true");

    broadcastChannel.current = new BroadcastChannel("chat_sync");
    broadcastChannel.current.onmessage = (event) => {
      if (event.data.type === `update_messages-${codeSpace}`) {
        __setMessages(event.data.messages);
      } else if (event.data.type === `update_dark_mode-${codeSpace}`) {
        setIsDarkMode(event.data.isDarkMode);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      broadcastChannel.current?.close();
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === `chatMessages-${codeSpace}`) {
      loadMessages();
    } else if (event.key === "darkMode") {
      setIsDarkMode(event.newValue === "true");
    }
  };

  const saveMessages = (newMessages: Message[]) => {
    localStorage.setItem(
      `chatMessages-${codeSpace}`,
      JSON.stringify(newMessages),
    );
    broadcastChannel.current?.postMessage({
      type: `update_messages-${codeSpace}`,
      messages: newMessages,
    });
    __setMessages(newMessages);
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const codeNow = await prettier(
      await fetch(`/live/${codeSpace}/code/index.tsx`).then((res) => res.text()),
    );

    await fetch(`/live/${codeSpace}/auto-save`);
    setCodeFound(false);

    let claudeContent = content;
    const messages = loadMessages();

    if (messages.length == 0 || codeNow !== codeWhatAiSeen) {
      claudeContent = antropic.replace(/{{FILENAME}}/g, codeSpace + ".tsx")
        .replace(/{{FILE_CONTENT}}/g, codeNow)
        .replace(/{{USERPROMT}}/g, content);
      setAICode(codeNow);
    } else {
      claudeContent = content + reminder;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: claudeContent.trim(),
    };

    if (messages[messages.length - 1]?.role === "user") {
      messages.push({
        "id": (Date.now() + 1).toString(),
        "role": "assistant",
        "content": "Sorry, something went wrong. Please try again.",
      });
    }

    messages.push(newMessage);

    saveMessages(messages);

    setInput("");
    setIsStreaming(true);

    try {
      messages.push(await sendToAnthropic(messages));
    } catch (error) {
      messages.push({
        "id": (Date.now() + 1).toString(),
        "role": "assistant",
        "content": "Sorry, there was an error processing your request with Claude.",
      });
    }

    saveMessages(messages);

    setIsStreaming(false);

    continueWithOpenAI(messages[messages.length - 1].content, codeNow);
  };

  const sendToAnthropic = async (messages: Message[]) => {
    const response = await fetch("/anthropic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messages.map(x => ({ role: x.role, content: x.content })) }),
    });

    const assistantMessage: Message = {
      "id": (Date.now() + 1).toString(),
      "role": "assistant",
      "content": "",
    };

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error("Response body is not readable!");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      assistantMessage.id = (Date.now() + 1).toString();
      assistantMessage.content += chunk;
      __setMessages([...messages, assistantMessage]);
    }

    saveMessages([...messages, assistantMessage]);
    return assistantMessage;
  };

  async function continueWithOpenAI(fullResponse: string, codeNow: string) {
    console.log(fullResponse);
    globalThis.fullResponse = fullResponse;
    globalThis.codeNow = codeNow;

    if (!fullResponse.includes("```")) return;

    setIsStreaming(true);
    let code = "";
    let isResponseComplete = false;
    const responseOpenAI = await fetch("/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{
          "role": "system",
          "content": gptSystem,
        }, {
          "role": "user",
          "content": codeNow + `
            **** instructions ****
          ` + fullResponse,
        }],
      }),
    });

    if (!responseOpenAI.ok) {
      throw new Error(`HTTP error! status: ${responseOpenAI.status}`);
    }

    const reader = responseOpenAI.body?.getReader();
    const decoder = new TextDecoder();

    let guessedCode = "";

    if (!reader) {
      throw new Error("Response body is not readable!");
    }

    const codeNowTrimmed = codeNow.split("\n").map(x => x.trim()).join("\n");

    const updatePartialCode = (code: string) => {
      // let get out the code block, even if it is not complete
      const codeModificationRegex = /```(?:typescript?|javascript?)\n([\s\S]*?)```/g;
      const matches = code.match(codeModificationRegex);

      if (matches) {
        const modifiedCode = matches[matches.length - 1].replace(
          /```(?:typescript?|javascript?)\n|```/g,
          "",
        ).split("\n").map(x => x.trim()).join("\n");

        //        lets find in code now the last 40 same characters, which will indicate how much code was already processed

        const saveToCut = codeNowTrimmed.split(modifiedCode.slice(-40));
        if (saveToCut.length !== 2) return;

        const updatedCode = modifiedCode + saveToCut[1];
        if (updatedCode !== guessedCode) {
          guessedCode = updatedCode;
          console.log("guessedCode", guessedCode);
          onCodeUpdate(updatedCode);
        }
      }
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        isResponseComplete = true;
        break;
      }

      const chunk = decoder.decode(value);
      code += chunk;

      updatePartialCode(code);

      __setMessages((prevMessages) => {
        const lastMessage = prevMessages.pop()!;

        lastMessage.content = fullResponse + `\n` + code;
        return [...prevMessages, lastMessage];
      });
    }

    console.log("code", code);

    const codeModificationRegex = /```(?:typescript?|javascript?)\n([\s\S]*?)```/g;
    const matches = code.match(codeModificationRegex);

    if (matches) {
      const modifiedCode = matches[matches.length - 1].replace(
        /```(?:typescript?|javascript?)\n|```/g,
        "",
      );
      console.log("modifiedCode", modifiedCode);
      onCodeUpdate(modifiedCode);
      setAICode(modifiedCode);
    }
    setIsStreaming(false);
  }

  const handleResetChat = () => {
    __setMessages([]);
    localStorage.removeItem(`chatMessages-${codeSpace}`);
    broadcastChannel.current?.postMessage({
      type: `update_messages-${codeSpace}`,
      messages: [],
    });
  };

  const handleEditMessage = (messageId: string) => {
    const messageToEdit = messages.find((msg) => msg.id === messageId);
    if (messageToEdit) {
      setEditingMessageId(messageId);
      setEditInput(messageToEdit.content);
    }
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditInput("");
  };

  const handleSaveEdit = (messageId: string) => {
    const updatedMessages = messages.map((
      msg,
    ) => (msg.id === messageId ? { ...msg, content: editInput } : msg));
    __setMessages(updatedMessages);
    saveMessages(updatedMessages);
    setEditingMessageId(null);
    setEditInput("");
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    broadcastChannel.current?.postMessage({
      type: `update_dark_mode-${codeSpace}`,
      isDarkMode: newMode,
    });
  };

  return (
    <ChatFC
      isOpen={isOpen}
      onClose={onClose}
      handleEditMessage={handleEditMessage}
      handleResetChat={handleResetChat}
      handleSaveEdit={handleSaveEdit}
      handleSendMessage={handleSendMessage}
      isStreaming={isStreaming}
      messages={messages}
      messagesEndRef={messagesEndRef}
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
      editingMessageId={editingMessageId}
      editInput={editInput}
      setEditInput={setEditInput}
      input={input}
      setInput={setInput}
      inputRef={inputRef}
      handleCancelEdit={handleCancelEdit}
    />
  );
};

export default ChatInterface;
