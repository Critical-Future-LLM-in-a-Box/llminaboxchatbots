import { ChatData } from "@/context";
import { request } from "./request";

export async function getOnlineStatus(
  chatData: ChatData,
  dispatch: Function
): Promise<void> {
  const clientOnline = navigator.onLine;
  let apiOnline = false;

  const response = await request<string>({
    url: chatData.config.apiHost + "/api/v1/ping"
  }).catch((err) => {
    throw new Error(err);
  });

  if (response.includes("pong")) apiOnline = true;
  dispatch({
    type: "SET_ONLINE_STATUS",
    payload: clientOnline && apiOnline
  });
}
