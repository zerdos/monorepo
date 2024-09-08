
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Check, Moon, RefreshCw, Send, Sun, X } from "@/external/lucideReact";
import { Message } from "@/lib/interfaces";
import { TypingIndicator } from "@src/utils/utils";
import React, { useEffect, useState } from "react";
import { ChatContainerProps, ChatHeaderProps, MessageInputProps } from "./types";
import { renderMessage } from "@/lib/render-messages";
import { useCodeSpace } from "@src/hooks/useCodeSpace";

export const ChatMessage: React.FC<{
  message: Message;
  isSelected: boolean;
  onDoubleClick: () => void;
  isEditing: boolean;
  editInput: string;
  setEditInput: (value: string) => void;
  handleCancelEdit: () => void;
  handleSaveEdit: (id: string) => void;
  isDarkMode: boolean;
}> = React.memo(({
  message,
  isSelected,
  onDoubleClick,
  isEditing,
  editInput,
  setEditInput,
  handleCancelEdit,
  handleSaveEdit,
  isDarkMode,
}) => {
  const isUser = message.role === "user";

  const renderContent = () => {
    if (typeof message.content === "string") {
      return renderMessage(message.content, isUser);
    } else if (Array.isArray(message.content)) {
      return message.content.map((item, index) => {
        if (item.type === "text") {
          return renderMessage(item.text!, isUser);
        } else if (item.type === "image" && item.source?.type === "base64") {
          const imageUrlFromBase64String = `data:${item.source.media_type};base64,${item.source.data}`;

          return (
            <img
              key={index}
              src={imageUrlFromBase64String}
              alt="Screenshot"
              className="max-w-full h-auto mt-2 rounded-lg"
            />
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
            ? isDarkMode
              ? "bg-blue-600 text-white"
              : "bg-blue-500 text-white"
            : isDarkMode
            ? isSelected
              ? "bg-gray-700 ring-2 ring-blue-500"
              : "bg-gray-800 text-white"
            : isSelected
            ? "bg-gray-200 ring-2 ring-blue-500"
            : "bg-gray-100"
        }`}
      >
        {isEditing
          ? (
            <div className="flex flex-col space-y-2">
              <Textarea
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                className={isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}
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
});

export const ChatHeader: React.FC<ChatHeaderProps> = (
  { isDarkMode, toggleDarkMode, handleResetChat, onClose },
) => (
  <div
    className={`p-4 font-bold flex justify-between items-center ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
    }`}
  >
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

export const ChatContainer: React.FC<ChatContainerProps> = React.memo(({
  messages,
  editingMessageId,
  editInput,
  setEditInput,
  handleCancelEdit,
  handleSaveEdit,
  handleEditMessage,
  isStreaming,
  isDarkMode,
}) => {

  const [typingIndicatorMustShow, setTypingIndicatorIsOn] = useState(isStreaming);

  // This effect ensures scrolling when the component mounts and after each render
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isStreaming) {
      setTypingIndicatorIsOn(true);
    } else {
      timeoutId = setTimeout(() => {
        setTypingIndicatorIsOn(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isStreaming]);

  return (
      <div className="p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index + "--" + message.id}
            message={message}
            isSelected={editingMessageId === message.id}
            onDoubleClick={() => handleEditMessage(message.id)}
            isEditing={editingMessageId === message.id}
            editInput={editInput}
            setEditInput={setEditInput}
            handleCancelEdit={handleCancelEdit}
            handleSaveEdit={handleSaveEdit}
            isDarkMode={isDarkMode}
          />
        ))}
        {typingIndicatorMustShow && <TypingIndicator isDarkMode={isDarkMode} />}
  
      </div>
  );
});

export const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  handleSendMessage,
  isStreaming,
  inputRef,
  isScreenshotLoading,
  screenshotImage,
  handleScreenshotClick,
  handleCancelScreenshot,
  isDarkMode,
}) => {
  const handleSend = () => {
    handleSendMessage(input, screenshotImage ? [{
      type: "image/png",
      mediaType: "image/png",
      imageName: "screenshot.png",
      url: location.origin+'/live/'+useCodeSpace()+"/screenshot.png",
      data: screenshotImage,
      src: screenshotImage
    }] : []);
    setInput(""); // Clear input after sending
    handleCancelScreenshot(); // Clear screenshot after sending
  };

  if (isStreaming) {
    return null; // Hide input when AI is typing
  }

  return (
    <div className={`p-2 mt-auto ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="flex flex-col space-y-2">
        {screenshotImage && (
          <div className="relative">
            <img src={screenshotImage} alt="Screenshot Preview" className="max-w-full h-auto rounded-lg" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-2 right-2"
              onClick={handleCancelScreenshot}
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
                handleSend();
              }
            }}
            placeholder="Type a message..."
            className={`flex-1 min-h-[40px] max-h-[120px] resize-none ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            }`}
            ref={inputRef}
          />
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleScreenshotClick}
              variant={screenshotImage ? "secondary" : "outline"}
              size="icon"
              title={screenshotImage ? "Remove screenshot" : "Attach screenshot"}
              disabled={isScreenshotLoading}
              className={`transition-all duration-300 ${
                isScreenshotLoading ? "animate-pulse" : ""
              } bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600`}
            >
              {isScreenshotLoading
                ? <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary"></div>
                : <Camera className="h-4 w-4" />}
            </Button>
            <Button
              onClick={handleSend}
              disabled={input.trim() === "" && !screenshotImage}
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
