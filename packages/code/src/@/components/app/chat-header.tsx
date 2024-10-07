import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, X } from "@/external/lucideReact";
import type { ChatHeaderProps } from "@/lib/interfaces";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export const ChatHeader: React.FC<ChatHeaderProps> = React.memo(
  ({ isDarkMode, handleResetChat, onClose }) => {
    const headerClassName = useMemo(
      () =>
        cn(
          "p-4 font-bold flex justify-between items-center",
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800",
        ),
      [isDarkMode],
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
  },
);

ChatHeader.displayName = "ChatHeader";
