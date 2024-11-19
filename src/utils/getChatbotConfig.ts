import { useContextData } from "@/context";

export const getAllowedUploads = async (): Promise<void> => {
  const [chatData, dispatch] = useContextData();

  const response = await fetch(
    `${chatData.config.apiHost}/api/v1/public-chatbotConfig/${chatData.config.chatflowId}`
  ).catch((error) => {
    throw new Error(`Error fetching chatbot config: ${error}`);
  });

  if (!response.ok) {
    throw new Error(`Error fetching chatbot config: ${response.statusText}`);
  }

  const { uploads } = await response.json();

  dispatch({
    type: "SET_API_ALLOWED_UPLOADS",
    payload: {
      isSpeechToTextEnabled: uploads.isSpeechToTextEnabled,
      isImageUploadAllowed: uploads.isImageUploadAllowed,
      isFileUploadAllowed: uploads.isRAGFileUploadAllowed
    }
  });
};
