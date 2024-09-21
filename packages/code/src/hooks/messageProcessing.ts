import { createContextManager } from "@/lib/context-manager";
import { ICode, ImageData, Message } from "@/lib/interfaces";
import { updateSearchReplace } from "@/lib/shared";
import type { AIHandler } from "@src/AIHandler";
import { claudeRecovery } from "@src/config/aiConfig";
import type { Mutex } from "async-mutex";

export async function createNewMessage(
  images: ImageData[],
  claudeContent: string,
): Promise<Message> {
  const imagesContent: any[] = [];

  if (images && images.length > 0) {
    images.forEach((image) => {
      imagesContent.push({
        type: "image_url",
        image_url: {
          url: image.url,
        },
      });
    });
    imagesContent.push({ type: "text", text: claudeContent?.trim() || "" });
  }

  return {
    id: Date.now().toString(),
    role: "user",
    content: imagesContent.length > 0 ? imagesContent : claudeContent,
  };
}

export async function processMessage(
  aiHandler: AIHandler,
  cSess: ICode,
  codeNow: string,
  updatedMessages: Message[],
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  saveMessages: (newMessages: Message[]) => void,
  mutex: Mutex,
  codeSpace: string,
): Promise<boolean> {
  const contextManager = createContextManager(codeSpace);
  let sentMessages = [...updatedMessages];
  let maxRetries = 3;
  let retries = 0;
  const mod = {
    controller: new AbortController(),
  };

  const onUpdate = createOnUpdateFunction(
    sentMessages,
    mutex,
    setMessages,
    cSess,
    contextManager,
    codeNow,
    mod,
  );

  while (retries < maxRetries) {
    try {
      console.log(`Processing message (attempt ${retries + 1})`);
      let assistantMessage = await sendAssistantMessage(
        aiHandler,
        sentMessages,
        onUpdate,
      );
      mod.controller.abort();

      sentMessages.push(assistantMessage);
      saveMessages(sentMessages);

      let contentToProcess = extractTextContent(assistantMessage.content);

      let starterCode1 = await updateSearchReplace(contentToProcess, codeNow);
      let starterCode2 = await updateSearchReplace(contentToProcess + `\n foo \n`, codeNow);

      let starterCode = starterCode1;
      if (starterCode1 !== starterCode2) {
        starterCode = codeNow;
      }

      if (starterCode !== codeNow) {
        const success = await trySetCode(cSess, starterCode);
        if (success) return true;
      }

      const errorMessage = contextManager.getContext("errorLog");
      if (errorMessage) {
        const userMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: claudeRecovery(starterCode, errorMessage),
        };

        sentMessages.push(userMessage);

        const newOnUpdate = createOnUpdateFunction(
          sentMessages,
          mutex,
          setMessages,
          cSess,
          contextManager,
          starterCode,
          mod,
        );

        assistantMessage = await sendAssistantMessage(
          aiHandler,
          sentMessages,
          newOnUpdate,
        );
        mod.controller.abort();

        setMessages([
          ...sentMessages,
          assistantMessage,
        ]);

        contentToProcess = extractTextContent(assistantMessage.content);

        starterCode = await updateSearchReplace(contentToProcess, codeNow);
      }

      const finalSuccess = await trySetCode(cSess, starterCode);
      if (finalSuccess) return true;

      retries++;
    } catch (error) {
      console.error(`Error processing message (attempt ${retries + 1}): ${error}`);
      retries++;
    }
  }

  console.error("Max retries reached. Failed to process message.");
  return false;
}

async function trySetCode(cSess: ICode, code: string): Promise<boolean> {
  try {
    const success = await cSess.setCode(code);
    return !!success;
  } catch (error) {
    console.error(`Failed to set code: ${error}`);
    return false;
  }
}

function createOnUpdateFunction(
  sentMessages: Message[],
  mutex: Mutex,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
  cSess: ICode,
  contextManager: ReturnType<typeof createContextManager>,
  startCode: string,
  mod: {
    controller: AbortController;
  },
) {
  mod.controller.abort();
  mod.controller = new AbortController();
  const signal = mod.controller.signal;
  return async (code: string) => {
    if (signal.aborted) {
      return;
    }
    setMessages([
      ...sentMessages,
      {
        id: Date.now().toString(),
        role: "assistant",
        content: code,
      },
    ]);

    if (signal.aborted) {
      return;
    }
    await mutex.runExclusive(async () => {
      if (signal.aborted) {
        return;
      }
      const lastCode = await updateSearchReplace(code, startCode);
      if (signal.aborted) {
        return;
      }
      const lastReplaceModeIsOn = await updateSearchReplace(code + " \nfoo \n", startCode);

      if (lastCode !== lastReplaceModeIsOn) {
        return;
      }
      if (signal.aborted) {
        return;
      }
      const success = await trySetCode(cSess, lastCode);
      contextManager.updateContext("currentDraft", success ? "" : lastCode);
    });
  };
}

async function sendAssistantMessage(
  aiHandler: AIHandler,
  messages: Message[],
  onUpdate: (code: string) => Promise<void>,
): Promise<Message> {
  let assistantMessage = await aiHandler.sendToAnthropic(messages, onUpdate);

  if (typeof assistantMessage.content !== "string" && !Array.isArray(assistantMessage.content)) {
    throw new Error("Invalid assistant message content type");
  }

  const contentToProcess = extractTextContent(assistantMessage.content);

  if (contentToProcess.includes("An error occurred while processing")) {
    assistantMessage = await aiHandler.sendToGpt4o(messages, onUpdate);
  }

  return assistantMessage;
}

function extractTextContent(
  content: string | Array<{ type: string; text?: string }>,
): string {
  if (typeof content === "string") {
    return content;
  }
  const textItem = content.find((item) => item.type === "text");
  return textItem?.text || "";
}
