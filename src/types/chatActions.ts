import type { Message } from "@/types";

export type ChatActions =
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_ONLINE_STATUS"; payload: boolean }
  | { type: "SET_STREAMING_STATUS"; payload: boolean }
  | { type: "SET_TYPING_STATUS"; payload: boolean }
  | { type: "SET_UPLOAD_CONFIG"; payload: UploadConfig }
  | { type: "SET_CHAT_ID"; payload: string }
  | { type: "START_NEW_CHAT" }
  | { type: "ADD_NEW_MESSAGE"; payload: Message }
  | { type: "UPDATE_LAST_MESSAGE"; payload: Partial<Message> }
  | { type: "DELETE_LAST_MESSAGE" };

interface UploadConfig {
  isApiAcceptingVoice: boolean;
  isApiAcceptingImage: boolean;
  isApiAcceptingRAGFile: boolean;
  isApiAcceptingFullFile: boolean;
  imgUploadSizeAndTypes?: string[];
  fileUploadSizeAndTypes?: string[];
}
