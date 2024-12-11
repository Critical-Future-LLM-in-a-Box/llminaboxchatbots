import { Config } from "@/types";

export interface ChatData {
  config: Config;
  error: string;

  session: {
    chatId: string;
    chatMessages: Message[];
  };

  api: {
    online: boolean;
    typing: boolean;
    canStream: boolean;
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
  uploads?: Upload[];
}

export interface Upload {
  name: string;
  type: "audio" | "file" | "file:full";
  mime: string;
  data: string;
}
