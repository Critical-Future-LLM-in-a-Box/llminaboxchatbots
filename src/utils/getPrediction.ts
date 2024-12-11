import { ChatData, Message } from "@/types";
import { request } from "@/utils/request";
import { stream } from "fetch-event-stream";

export async function getPrediction({
  chatData,
  userMessage,
  canStream
}: {
  chatData: ChatData;
  userMessage: Message;
  canStream: boolean;
}): Promise<unknown> {
  const predictionUrl = `${chatData.config.apiHost}/api/v1/prediction/${chatData.config.chatflowId}`;

  if (canStream) {
    const events = await stream(predictionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: userMessage.content,
        chatId: chatData.session.chatId,
        streaming: true,
        uploads: userMessage.uploads
      })
    }).catch((error) => {
      throw new Error(error);
    });

    return events;
  } else {
    return await request<{ text: string }>({
      url: predictionUrl,
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userMessage.content,
          chatId: chatData.session.chatId,
          uploads: userMessage.uploads
        })
      }
    }).catch((error) => {
      throw new Error(error);
    });
  }
}
