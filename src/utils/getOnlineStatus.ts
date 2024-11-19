import { ChatAction, ChatData } from "@/types";
import { request } from "@/utils/request";

export async function getOnlineStatus(
  chatData: ChatData,
  dispatch: React.Dispatch<ChatAction>
): Promise<void> {
  const response = await request<string>({
    url: chatData.config.apiHost + "/api/v1/ping"
  }).catch((err) => {
    throw new Error(err);
  });

  dispatch({
    type: "SET_ONLINE_STATUS",
    payload: response.includes("pong")
  });
}
