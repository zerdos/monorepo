import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, X } from "@/external/lucideReact";
import { ChatContainerProps, ChatHeaderProps } from "@/lib/interfaces";
import { TypingIndicator } from "@src/utils/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ChatMessage } from "@/components/app/chat-message";

export const ChatHeader: React.FC<ChatHeaderProps> = React.memo(
  ({ isDarkMode, handleResetChat, onClose }) => {
    const headerClassName = useMemo(
      () =>
        `p-4 font-bold flex justify-between items-center ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        }`,
      [isDarkMode]
    );

    return (
      <div className={headerClassName}>
        <span>AI spike pilot</span>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={handleResetChat}>
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }
);

ChatHeader.displayName = "ChatHeader";

export const ChatContainer: React.FC<
  ChatContainerProps & { codeSpace: string }
> = React.memo((props) => {
  const {
    messages,
    editingMessageId,
    editInput,
    setEditInput,
    handleCancelEdit,
    handleSaveEdit,
    handleEditMessage,
    isStreaming,
    isDarkMode,
    codeSpace,
  } = props;

  const [typingIndicatorMustShow, setTypingIndicatorMustShow] = useState(
    isStreaming
  );

  // Memoize the messages to prevent unnecessary re-renders
  const memoizedMessages = useMemo(() => messages, [messages]);

  // Memoize the functions passed to child components
  const memoizedHandleEditMessage = useCallback(
    (id: string) => handleEditMessage(id),
    [handleEditMessage]
  );

  const memoizedSetEditInput = useCallback(
    (value: string) => setEditInput(value),
    [setEditInput]
  );

  const memoizedHandleCancelEdit = useCallback(
    () => handleCancelEdit(),
    [handleCancelEdit]
  );

  const memoizedHandleSaveEdit = useCallback(
    (id: string) => handleSaveEdit(id),
    [handleSaveEdit]
  );

  // Optimize the typing indicator effect
  useEffect(() => {
    if (isStreaming) {
      setTypingIndicatorMustShow(true);
      return ()=>{};
    } else {
      const timeoutId = setTimeout(() => {
        setTypingIndicatorMustShow(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isStreaming]);

  return (
    <div className="p-4 space-y-4">
      {memoizedMessages.map((message, index) => (
        <ChatMessage
          key={`${index}--${message.id}`}
          message={message}
          isSelected={editingMessageId === message.id}
          onDoubleClick={() => memoizedHandleEditMessage(message.id)}
          isEditing={editingMessageId === message.id}
          editInput={editInput}
          setEditInput={memoizedSetEditInput}
          handleCancelEdit={memoizedHandleCancelEdit}
          handleSaveEdit={memoizedHandleSaveEdit}
          isDarkMode={isDarkMode}
          codeSpace={codeSpace}
        />
      ))}
      {typingIndicatorMustShow && <TypingIndicator isDarkMode={isDarkMode} />}
    </div>
  );
});

ChatContainer.displayName = "ChatContainer";

export default ChatContainer;