import { ChatData } from "@/types";

export const defaultChatData: ChatData = {
  error: "",
  config: {
    apiHost: "",
    chatflowId: "",
    authToken: "",
    assistant: {
      name: "AI Assistant",
      description: "Your AI Assistant",
      welcomeMessage: "Hello! How can I help you?",
      voice: {
        name: "",
        apiKey: "",
        apiHost: ""
      },
      avatar: {
        staticUrl: "",
        liveUrl: "",
        videoUrl: ""
      }
    },
    ui: {
      sidebar: false,
      foregroundColor: "#111111",
      backgroundColor: "#EFEFEF",
      backgroundColorBody: "#FFF",
      width: "100%",
      height: "100%"
    }
  },
  session: {
    chatId: "",
    chatMessages: []
  },
  api: {
    online: false,
    typing: false,
    canStream: false,
    isApiAcceptingVoice: false,
    isApiAcceptingImage: false,
    isApiAcceptingRAGFile: false,
    isApiAcceptingFullFile: false,
    imgUploadSizeAndTypes: [],
    fileUploadSizeAndTypes: []
  }
};
