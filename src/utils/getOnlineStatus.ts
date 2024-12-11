import { ChatData } from "@/types";
import { request } from "@/utils";

export async function getOnlineStatus(chatData: ChatData): Promise<boolean> {
  const response = await request<string>({
    url: chatData.config.apiHost + "/api/v1/ping"
  }).catch((error) => error);

  return response.includes("pong");
}
