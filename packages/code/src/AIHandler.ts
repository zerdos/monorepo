import { Message } from "./ChatDrawer";
import { anthropic, gptSystem, reminder } from "./initialMessage";
import { prettierToThrow } from "./shared";
const loadMessages = () => JSON.parse(localStorage.getItem(`chatMessages-${codeSpace}`) ?? "[]") as Message[];

const codeSpace = location.pathname.slice(1).split("/")[1];


export const sendToAnthropic = async (messages: Message[]) => {
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
  }

  return assistantMessage;
};

export const continueWithOpenAI = async (
  fullResponse: string,
  codeNow: string,
  nextCounter: number,
  onCodeUpdate: (code: string) => void,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  setAICode: (code: string) => void,
  isRetry = false,
) => {
  console.log(fullResponse);

  let code = "";
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

  if (!reader) {
    throw new Error("Response body is not readable!");
  }

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    const chunk = decoder.decode(value);
    code += chunk;

    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      const updatedLastMessage = { ...lastMessage, content: fullResponse + `\n` + code };
      return [...prevMessages.slice(0, -1), updatedLastMessage];
    });
  }
  console.log("code", code);

  const codeModificationRegex = /```(?:typescript?|tsx?|jsx?|javascript?)\n([\s\S]*?)```/g;
  const matches = code.match(codeModificationRegex);

  if (matches) {
    const modifiedCode = matches[matches.length - 1].replace(
      /```(?:typescript?|tsx?|jsx?|javascript?)\n|```/g,
      "",
    );

    try {
      console.log("modifiedCode", modifiedCode);

      const prettyCode = await prettierToThrow({ code: modifiedCode, toThrow: true });
      onCodeUpdate(prettyCode);
      setAICode(prettyCode);
    } catch (error) {
      if (!isRetry) {
        const errorTextWithAllTheCode = { error }.toString() + `\n` + code;
        const message: Message = {
          "id": (Date.now() + 1).toString(),
          "role": "user",
          "content": errorTextWithAllTheCode + `
          
          here is the code that was being processed:

          ${modifiedCode}
          `,
        };
        
        setMessages(prevMessages => [...prevMessages, message]);
        
        const prevMessages = loadMessages();
        
        const answer = await sendToAnthropic([...prevMessages, message]);
        setMessages(prevMessages => [...prevMessages, answer]);
        await continueWithOpenAI(answer.content, modifiedCode, nextCounter, onCodeUpdate, setMessages, setAICode, true);
      } else {
        console.error("Error in runner:", error);
      }
    }
  }
};

export const prepareClaudeContent = (content: string, messages: Message[], codeNow: string, codeSpace: string) => {
  if (messages.length == 0 || codeNow !== messages[messages.length - 1]?.content) {
    return anthropic.replace(/{{FILENAME}}/g, codeSpace + ".tsx")
      .replace(/{{FILE_CONTENT}}/g, codeNow)
      .replace(/{{USER_PROMPT}}/g, content);
  } else {
    return content + reminder;
  }
};
