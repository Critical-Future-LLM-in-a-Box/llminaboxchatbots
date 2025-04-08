import { Config } from "@/types";

export interface ChatData {
  config: Config;
  error: string;

  session: {
    chatId: string;
    chatMessages: Message[];
  };

  api: {
    canStream: boolean;
    isOnline: boolean;
    isTyping: boolean;
    isApiAcceptingVoice: boolean;
    isApiAcceptingImage: boolean;
    isApiAcceptingRAGFile: boolean;
    isApiAcceptingFullFile: boolean;
    imgUploadSizeAndTypes: string[];
    fileUploadSizeAndTypes: string[];
  };
}

export interface Message {
  id: string;
  role: "user" | "api";
  content: string;
  timestamp: string;
  feedback?: string | null;
  uploads?: Uploads[];
}

export interface Uploads {
  name: string;
  type: "audio" | "file" | "file:full";
  mime: string;
  data: string;
}
