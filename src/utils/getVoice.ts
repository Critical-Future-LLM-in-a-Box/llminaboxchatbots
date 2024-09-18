import localforage from "localforage";
import { ChatData, Message } from "@/context";
import { request } from "@/utils/request";

export const fetchVoice = async (chatData: ChatData, message: Message) => {
  const proxyUrl = "https://proxy.cors.sh/";
  const { file_url } = await request<{ file_url: string }>({
    url: proxyUrl + "http://51.20.131.200/get_tts",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "G7x9mVt2Q5bK8Jp4S1Zc"
      },
      body: JSON.stringify({
        text: message.content,
        voice: chatData.config?.voiceName,
        id: chatData.config?.name
      })
    }
  }).catch((err) => {
    throw new Error(err);
  });

  const audioBlob = await request<Blob>({ url: proxyUrl + file_url }).catch(
    (err) => {
      throw new Error(err);
    }
  );

  const mp3Blob = new Blob([audioBlob], { type: "audio/mpeg" });

  return URL.createObjectURL(mp3Blob);
};

export const getVoice = async (chatData: ChatData, message: Message) => {
  const ttsCacheString: string =
    (await localforage.getItem("llminabox_tts")) ?? "{}";

  let ttsCacheJson: { [key: string]: string };
  let localVoice: string;

  ttsCacheJson = JSON.parse(ttsCacheString);
  localVoice = ttsCacheJson[message.timestamp];

  if (localVoice) {
    return new Audio(localVoice);
  }

  const audioUrl = await fetchVoice(chatData, message).catch((err) => {
    throw new Error(err);
  });

  if (audioUrl) {
    ttsCacheJson[message.timestamp] = audioUrl;
    await localforage.setItem("llminabox_tts", JSON.stringify(ttsCacheJson));
    return new Audio(audioUrl);
  }
};
