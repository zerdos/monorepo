import Anthropic from "@anthropic-ai/sdk";
import { MessageParam, TextDelta } from "@anthropic-ai/sdk/resources/messages";
import type { Stream } from "@anthropic-ai/sdk/streaming";
import Env from "./env";
import { handleCORS, readRequestBody } from "./utils";
import type { Message, MessageContent } from "@spike-land/code";

function base64Encode(buf: ArrayBuffer) {
  let string = '';
  (new Uint8Array(buf)).forEach(
    (byte) => { string += String.fromCharCode(byte) }
  )
  return btoa(string)
}

interface RequestBody {
  stream?: boolean;
  system?: string;
  messages: Message[];
}

export async function handleAnthropicRequest(
  request: Request,
  env: Env,
  ctx: ExecutionContext,
) {
  handleCORS(request);

  const body = JSON.parse(await readRequestBody(request)) as RequestBody;
  const messages = await Promise.all(body.messages.map(async (message: Message) => {
    const content: MessageContent = message.content;
    if (typeof content === "string") {
      return message;
    }

    const processedContent = await Promise.all(message.content.map(async (content: MessageContent) => {
      if (content.type !== "image_url") {
        return content;
      }


        const url = content.image_url.url;
        const response = await fetch(url);

        const data = base64Encode(await response.arrayBuffer());

        return {
          type: "image",
          source: {
            type: "base64",
            media_type: response.headers.get("Content-Type") || "image/jpeg",
            data
          }
         
        };

    }));

    return {
      ...message,
      content: processedContent
    };
  }));

  const anthropic = new Anthropic({
    baseURL: "https://gateway.ai.cloudflare.com/v1/1f98921051196545ebe79a450d3c71ed/z1/anthropic",
    apiKey: env.ANTHROPIC_API_KEY,
  });

  const conf = {
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 2 * 4096,
    temperature: 0.1,
    stream: true,
    ...body,
    messages,
  };

  if (conf.stream === false) {
    const response = await anthropic.messages.create(conf);
    return new Response(JSON.stringify(response), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const textEncoder = new TextEncoder();

  ctx.waitUntil((async () => {
    try {
      const stream = await anthropic.messages.create(conf) as Stream<
        Anthropic.Messages.RawMessageStreamEvent
      >;

      for await (const part of stream) {
        if (part.type === "content_block_start" || part.type === "content_block_delta") {
          const text = "delta" in part ? (part.delta as TextDelta).text : "";
          writer.write(textEncoder.encode(text || ""));
        }
      }
    } catch (error) {
      console.error("Error:", error);
      writer.write(
        textEncoder.encode("An error occurred while processing your request."),
      );
    } finally {
      await writer.close();
    }
  })());

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function preprocessMessages(body: RequestBody): RequestBody {
  const processedBody: RequestBody = { ...body, messages: [...body.messages] };

  if (processedBody.messages.length > 0) {
    const firstMessage = processedBody.messages[0];
    if (firstMessage.role !== "user") {
      processedBody.system = getSystemMessage(firstMessage);
      processedBody.messages.shift();
    } else if (Array.isArray(firstMessage.content)) {
      const systemContent = firstMessage.content.find(c => c.type === "text" && c.text.startsWith("Human:")) as {
        text: string;
      } | undefined;
      if (systemContent) {
        processedBody.system = systemContent.text.replace("Human:", "").trim();
        firstMessage.content = firstMessage.content.filter(c => c !== systemContent);
      }
    }
  }

  return processedBody;
}

function getSystemMessage(message: MessageParam): string {
  if (typeof message.content === "string") {
    return message.content;
  } else if (Array.isArray(message.content)) {
    const textContent = message.content.find(c => c.type === "text");
    return textContent ? textContent.text : "";
  }
  return "";
}

