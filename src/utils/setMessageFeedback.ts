import { ChatData, Message } from "@/types";
import { request } from "@/utils";

export async function setMessageFeedback(
  chatData: ChatData,
  message: Message,
  rating: "THUMBS_UP" | "THUMBS_DOWN"
): Promise<{ [key: string]: string }> {
  return await request<string>({
    url: chatData.config.apiHost + "/api/v1/feedback",
    options: {
      method: "POST",
      headers: {
        contentType: "application/json"
      },
      body: JSON.stringify({
        id: message.id,
        chatflowid: chatData.config.chatflowId,
        chatId: chatData.session.chatId,
        messageId: message.id,
        rating: rating,
        content: rating
      })
    }
  }).catch((error) => error);
}
