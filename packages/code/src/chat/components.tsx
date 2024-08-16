import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Check, Moon, RefreshCw, Send, Sun, X } from "@/external/lucideReact";
import { css } from "@emotion/react";
import { Message } from "@src/types/Message";
import { wait } from "@src/wait";
import React, { useEffect } from "react";
import { useCodeSpace } from "../hooks/useCodeSpace";
import { styles } from "./styles";
import { ChatContainerProps, ChatHeaderProps, ChatWindowProps, MessageInputProps } from "./types";
import { renderMessage, TypingIndicator } from "./utils";

export const ChatMessage: React.FC<{
  message: Message;
  isSelected: boolean;
  onDoubleClick: () => void;
  isEditing: boolean;
  editInput: string;
  setEditInput: (value: string) => void;
  handleCancelEdit: () => void;
  handleSaveEdit: (id: string) => void;
}> = ({
  message,
  isSelected,
  onDoubleClick,
  isEditing,
  editInput,
  setEditInput,
  handleCancelEdit,
  handleSaveEdit,
}) => {
  const isUser = message.role === "user";

  const renderContent = () => {
    if (typeof message.content === "string") {
      return renderMessage(message.content, isUser);
    } else if (Array.isArray(message.content)) {
      return message.content.map((item, index) => {
        if (item.type === "text") {
          return <div key={index}>{renderMessage(item.text, isUser)}</div>;
        } else if (item.type === "image_url") {
          return (
            <img key={index} src={item.image_url.url} alt="Screenshot" className="max-w-full h-auto mt-2 rounded-lg" />
          );
        }
        return null;
      });
    }
    return null;
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
      onDoubleClick={onDoubleClick}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? "bg-primary text-primary-foreground ml-auto"
            : isSelected
            ? "bg-secondary text-secondary-foreground ring-2 ring-primary"
            : "bg-secondary text-secondary-foreground"
        }`}
      >
        {isEditing
          ? (
            <div className="flex flex-col space-y-2">
              <Textarea
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                className="bg-background text-foreground"
              />
              <div className="flex justify-end space-x-2">
                <Button size="sm" onClick={() => handleSaveEdit(message.id)}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )
          : (
            <div className="break-words">
              {renderContent()}
            </div>
          )}
      </div>
    </div>
  );
};

export const ChatHeader: React.FC<ChatHeaderProps> = (
  { isDarkMode, toggleDarkMode, handleResetChat, onClose },
) => (
  <div className="bg-secondary p-4 font-bold flex justify-between items-center">
    <span>AI spike pilot</span>
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
        {isDarkMode
          ? <Sun className="h-4 w-4" />
          : <Moon className="h-4 w-4" />}
      </Button>
      <Button variant="ghost" size="icon" onClick={handleResetChat}>
        <RefreshCw className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  editingMessageId,
  editInput,
  setEditInput,
  handleCancelEdit,
  handleSaveEdit,
  handleEditMessage,
  isStreaming,
  messagesEndRef,
}) => {
  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, isStreaming, messagesEndRef]);

  return (
    <ScrollArea className="flex-grow p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isSelected={editingMessageId === message.id}
            onDoubleClick={() => handleEditMessage(message.id)}
            isEditing={editingMessageId === message.id}
            editInput={editInput}
            setEditInput={setEditInput}
            handleCancelEdit={handleCancelEdit}
            handleSaveEdit={handleSaveEdit}
          />
        ))}
        {isStreaming && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

const screenshotToBase64Maker = async () => {
  let base64 = "";
  await fetch(
    `/live/${useCodeSpace()}/screenshot`,
  )
    .then((response) => response.blob())
    .then((blob) => {
      var reader = new FileReader();
      reader.onload = function() {
        base64 = this.result as string;
      }; // <--- `this.result` contains a base64 data URI
      reader.readAsDataURL(blob);
    });

  await wait(1000);

  return base64;
};

export const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  handleSendMessage,
  isStreaming,
  inputRef,
}) => {
  const [isScreenshotAttached, setIsScreenshotAttached] = React.useState<
    boolean | string
  >(false);
  const [screenshotLoaded, setScreenshotLoaded] = React.useState(false);

  useEffect(() => {
    if (isScreenshotAttached && !screenshotLoaded) {
      setScreenshotLoaded(true);
      screenshotToBase64Maker().then((base64: string) => {
        setIsScreenshotAttached(base64);
      });
    }
    return () => {};
  }, [isScreenshotAttached]);

  const handleScreenshotToggle = () => {
    if (isScreenshotAttached) {
      setIsScreenshotAttached(false);
      setScreenshotLoaded(false);
    } else {
      setIsScreenshotAttached(true);
    }
  };

  return (
    <div className="p-2 bg-background mt-auto">
      <div className="flex flex-col space-y-2">
        {isScreenshotAttached && typeof isScreenshotAttached === "string" && (
          <div className="relative">
            <img src={isScreenshotAttached} alt="Screenshot Preview" className="max-w-full h-auto rounded-lg" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => setIsScreenshotAttached(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="flex items-end space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(input, isScreenshotAttached as string);
              }
            }}
            placeholder="Type a message..."
            className="flex-1 min-h-[40px] max-h-[120px] resize-none"
            ref={inputRef}
          />
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleScreenshotToggle}
              variant={isScreenshotAttached ? "secondary" : "outline"}
              size="icon"
              title={isScreenshotAttached ? "Remove screenshot" : "Attach screenshot"}
            >
              <Camera className="h-4 w-4" />
            </Button>
            <Button
              onClick={() =>
                handleSendMessage(
                  input,
                  isScreenshotAttached
                    ? isScreenshotAttached as string
                    : undefined,
                )}
              disabled={isStreaming || (input.trim() === "" && !isScreenshotAttached)}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChatWindow: React.FC<ChatWindowProps> = ({
  children,
  isOpen,
}) => (
  <div
    css={[
      styles.chatWindow,
      css`
    display: flex;
    flex-direction: column;
  `,
    ]}
    style={{
      transform: isOpen ? "translateX(0)" : "translateX(100%)",
    }}
  >
    <div
      css={[
        styles.chatContent,
        css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
      ]}
    >
      {children}
    </div>
  </div>
);
