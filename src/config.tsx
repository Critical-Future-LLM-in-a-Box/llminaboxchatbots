import { Config, ChatData } from "@/types";

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
      sidebar: true,
      foregroundColor: "#000000",
      backgroundColor: "#FFFFFF",
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

export const config: Config = {
  apiHost: "https://llminabox.criticalfutureglobal.com",
  chatflowId: "e89d6572-be23-4709-a1f5-ab2aaada13cd",

  assistant: {
    name: "Ai Assistant",
    description: "Critical Future Chatbot Assistant",
    welcomeMessage: "Hello! How can I assist you today?",
    voice: {
      name: "en-GB-SoniaNeural",
      apiHost: "https://tts.criticalfutureglobal.com/get_tts",
      apiKey: "G7x9mVt2Q5bK8Jp4S1Zc"
    },
    avatar: {
      staticUrl:
        "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/refs/heads/main/Avatars/mai/mai.png",
      liveUrl:
        "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/refs/heads/main/Avatars/mai/mai.gif",
      videoUrl:
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/mai/mai.mp4"
    }
  },

  ui: {
    sidebar: true,
    foregroundColor: "#000000",
    backgroundColor: "#F8F8FF",
    width: "100%",
    height: "100%"
  },

  onRequest: (request) => {
    console.log("Request: ", request);
  },

  onResponse: (response) => {
    console.log("Response: ", response);
  }
};
