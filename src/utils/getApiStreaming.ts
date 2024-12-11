import { ChatData } from "@/types";
import { request } from "@/utils/request";

export async function isApiStreaming(chatData: ChatData): Promise<boolean> {
  const streamingUrl = `${chatData.config.apiHost}/api/v1/chatflows-streaming/${chatData.config.chatflowId}`;

  const { isStreaming } = await request<{ isStreaming: boolean }>({
    url: streamingUrl
  }).catch((err) => err);

  return isStreaming || false;
}
