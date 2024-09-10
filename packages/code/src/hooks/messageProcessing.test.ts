import { ImageData, Message } from "@/lib/interfaces";
import { AIHandler } from "@src/AIHandler";
import { ICode } from "@src/cSess.interface";
import { Mutex } from "async-mutex";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { createContextManager } from "../contextManager";
import { createNewMessage, processMessage } from "./messageProcessing";

vi.mock("@src/AIHandler");
vi.mock("@src/config/aiConfig", () => ({
  claudeRevery: vi.fn((code) => `Revery: ${code}`),
}));
vi.mock("../contextManager");

describe("messageProcessing", () => {
  describe("createNewMessage", () => {
    it("should create a new message with multiple images", async () => {
      const images: ImageData[] = [
        { imageName: "image1", src: "url1", mediaType: "image/jpeg", data: "base64data1", type: "image", url: "url1" },
        { imageName: "image2", src: "url2", mediaType: "image/jpeg", data: "base64data2", type: "image", url: "url2" },
      ];
      const content = "Test message";

      const result = await createNewMessage(images, content);

      expect(result).toEqual({
        id: expect.any(String),
        role: "user",
        content: [
          { type: "image_url", image_url: { url: "url1" } },
          { type: "image_url", image_url: { url: "url2" } },
          { type: "text", text: "Test message" },
        ],
      });
    });

    it("should create a new message without images", async () => {
      const content = "Test message";

      const result = await createNewMessage([], content);

      expect(result).toEqual({
        id: expect.any(String),
        role: "user",
        content: "Test message",
      });
    });
  });
  describe("processMessage", () => {
    let mockAIHandler: AIHandler;
    let mockCSess: ICode;
    let mockSetMessages: ReturnType<typeof vi.fn>;
    let mockSaveMessages: ReturnType<typeof vi.fn>;
    let mockMutex: Mutex;
    let mockContextManager: ReturnType<typeof createContextManager>;

    beforeEach(() => {
      mockAIHandler = {
        sendToAnthropic: vi.fn(),
        sendToGpt4o: vi.fn(),
      } as unknown as AIHandler;

      mockCSess = {
        setCode: vi.fn().mockResolvedValue(true),
      } as unknown as ICode;

      mockSetMessages = vi.fn();
      mockSaveMessages = vi.fn();
      mockMutex = new Mutex();
      mockContextManager = {
        updateContext: vi.fn(),
        getContext: vi.fn(),
      } as unknown as ReturnType<typeof createContextManager>;

      (createContextManager as Mock).mockReturnValue(mockContextManager);
    });

    it("should process a message successfully", async () => {
      const mockAssistantMessage: Message = {
        id: "assistant-message-id",
        role: "assistant",
        content: "Assistant response",
      };

      (mockAIHandler.sendToAnthropic as ReturnType<typeof vi.fn>).mockResolvedValue(mockAssistantMessage);

      const result = await processMessage(
        mockAIHandler,
        mockCSess,
        [],
        "initial code",
        mockSetMessages,
        mockSaveMessages,
        mockMutex,
        "test-code-space",
      );

      expect(result).toBe(true);
      expect(mockAIHandler.sendToAnthropic).toHaveBeenCalled();
      expect(mockSaveMessages).toHaveBeenCalledWith([mockAssistantMessage]);
      expect(mockCSess.setCode).not.toHaveBeenCalled();
      expect(mockContextManager.updateContext).toHaveBeenCalledTimes(2);
    });

    it("should handle errors", async () => {
      (mockAIHandler.sendToAnthropic as ReturnType<typeof vi.fn>).mockRejectedValue(new Error("Test error"));

      const result = await processMessage(
        mockAIHandler,
        mockCSess,
        [],
        "initial code",
        mockSetMessages,
        mockSaveMessages,
        mockMutex,
        "test-code-space",
      );

      expect(result).toBe(false);
      expect(mockAIHandler.sendToAnthropic).toHaveBeenCalled();
      expect(mockCSess.setCode).not.toHaveBeenCalled();
    });
  });
});
