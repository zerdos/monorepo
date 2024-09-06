import { Message } from "@/lib/interfaces";
import { ICode } from "./cSess.interface";
import { AIService } from "./services/AIService";

export class AIHandler {
  private aiService: AIService;
  constructor(private cSess: ICode, setIsStreaming: (isStreaming: boolean) => void, aiService?: AIService) {
    this.aiService = aiService || new AIService({
      anthropicEndpoint: "/api/anthropic",
      openAIEndpoint: "/api/openai",
      gpt4oEndpoint: "/api/openai",
      updateThrottleMs: 1100,
      retryWithClaudeEnabled: true,
      setIsStreaming: (isStreaming: boolean) => setIsStreaming(isStreaming),
    }, this.cSess);
  }

  async sendToAnthropic(
    messages: Message[],
    onUpdate: (code: string) => void,
  ): Promise<Message> {
    return this.aiService.sendToAnthropic(messages, onUpdate);
  }

  async sendToGpt4o(
    messages: Message[],
    onUpdate: (code: string) => void,
  ): Promise<Message> {
    return this.aiService.sendToGpt4o(messages, onUpdate);
  }

  async continueWithOpenAI(
    fullResponse: string,
    currentCode: string,
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    setAICode: (code: string) => void,
  ): Promise<string | void> {
    return this.aiService.continueWithOpenAI(
      fullResponse,
      currentCode,
      setMessages,
      setAICode,
    );
  }

  prepareClaudeContent(
    content: string,
    messages: Message[],
    currentCode: string,
    codeSpace: string,
  ): string {
    return this.aiService.prepareClaudeContent(
      content,
      messages,
      currentCode,
      codeSpace,
    );
  }
}
