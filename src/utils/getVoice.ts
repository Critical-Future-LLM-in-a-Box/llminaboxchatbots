import { Message } from "@/types";
import { request } from "@/utils/request";
import { useContextData } from "@/context";

interface TTSResponse {
  response?: string;
  message?: string;
  file_url?: string;
}

export const getVoice = async (message: Message) => {
  const storedVoice = localStorage.getItem(`voice-${message.id}`);
  if (storedVoice) return new Audio(storedVoice);

  try {
    const [chatData] = useContextData();
    const { file_url } = await request<TTSResponse>({
      url: "https://tts.criticalfutureglobal.com/get_tts",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "G7x9mVt2Q5bK8Jp4S1Zc"
        },
        body: JSON.stringify({
          text: message.content ?? "Hello",
          voice: chatData.config.assistant.voiceName ?? "en-GB-SoniaNeural",
          id: chatData.config.assistant.name ?? "unrecognized voice",
          api_key: undefined
        })
      }
    });

    const audioBlob = await request<Blob>({ url: file_url as string });

    const mp3Blob = new Blob([audioBlob], { type: "audio/mpeg" });

    const mp3Url = URL.createObjectURL(mp3Blob);

    localStorage.setItem(`voice-${message.id}`, mp3Url);

    return new Audio(mp3Url);
  } catch (err) {
    throw err;
  }
};
