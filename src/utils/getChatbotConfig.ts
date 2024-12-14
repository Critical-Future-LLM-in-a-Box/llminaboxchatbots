import { ChatData } from "@/types";
import { request } from "@/utils";

export async function getAllowedUploads(chatData: ChatData): Promise<{
  fullFileUpload: { status: boolean };
  uploads: {
    isSpeechToTextEnabled: boolean;
    isImageUploadAllowed: boolean;
    isRAGFileUploadAllowed: boolean;
    imgUploadSizeAndTypes: string[];
    fileUploadSizeAndTypes: string[];
  };
}> {
  return request<{
    fullFileUpload: { status: boolean };
    uploads: {
      isSpeechToTextEnabled: boolean;
      isImageUploadAllowed: boolean;
      isRAGFileUploadAllowed: boolean;
      imgUploadSizeAndTypes: string[];
      fileUploadSizeAndTypes: string[];
    };
  }>({
    url: `${chatData.config.apiHost}/api/v1/public-chatbotConfig/${chatData.config.chatflowId}`
  }).catch((err) => err);
}
