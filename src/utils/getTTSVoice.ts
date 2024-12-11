import { Message, ChatData } from "@/types";
import { request } from "@/utils";

const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const base64ToBlob = (base64: string, mimeType: string): Blob => {
  const byteString = atob(base64.split(",")[1]);
  const byteNumbers = Array.from(byteString).map((char) => char.charCodeAt(0));
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

export async function getVoice(
  chatData: ChatData,
  message: Message
): Promise<HTMLAudioElement | undefined> {
  const localStorageKey = `voice-${message.id}`;
  let storedVoicesObj: { [key: string]: string } = {};
  const storedVoices = localStorage.getItem("localvoices");

  if (storedVoices) {
    storedVoicesObj = JSON.parse(storedVoices);
    const storedVoice = storedVoicesObj[localStorageKey];
    if (storedVoice) {
      const audioBlob = base64ToBlob(storedVoice, "audio/mpeg");
      return new Audio(URL.createObjectURL(audioBlob));
    }
  }

  const response = await request<{
    file_url?: string;
  }>({
    url: `${chatData.config.assistant?.voice?.apiHost}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": chatData.config.assistant?.voice?.apiKey || ""
      },
      body: JSON.stringify({
        text: message.content || "Hello",
        voice: chatData.config.assistant?.voice?.name || "",
        id: chatData.config.assistant?.name || ""
      })
    }
  }).catch((error) => error);

  const audioBlob = await request<Blob>({
    url: response.file_url
  }).catch((error) => error);

  const mp3Base64 = await blobToBase64(audioBlob);

  storedVoicesObj[localStorageKey] = mp3Base64;
  localStorage.setItem("localvoices", JSON.stringify(storedVoicesObj));

  return new Audio(URL.createObjectURL(audioBlob));
}
