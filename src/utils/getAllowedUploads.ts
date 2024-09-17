import { ChatData } from "@/context";

export const getAllowedUploads = async (
  chatData: ChatData,
  dispatch: Function
): Promise<void> => {
  const response = await fetch(
    `${chatData.config.apiHost}/api/v1/public-chatbotConfig/${chatData.config.chatflowid}`
  ).catch((error) => {
    throw new Error(`Error fetching chatbot config: ${error}`);
  });

  if (!response.ok) {
    throw new Error(`Error fetching chatbot config: ${response.statusText}`);
  }

  const {
    uploads: { isImageUploadAllowed: image, isSpeechToTextEnabled: voice }
  } = await response.json();

  dispatch({
    type: "SET_API_ACCEPTING_VOICE",
    payload: voice
  });
  dispatch({
    type: "SET_API_ACCEPTING_IMAGE",
    payload: image
  });
};
