import { Config, ChatData } from "@/types";

export const defaultChatData: ChatData = {
  config: {
    apiHost: "",
    chatflowId: "",
    assistant: {
      name: "Assistant",
      description: "Your AI Assistant",
      welcomeMessage: "Hello! How can I help you?",
      voiceName: "en-GB-SoniaNeural",
      sidebar: false,
      avatar: {
        staticUrl: "",
        liveUrl: "",
        videoUrl: ""
      }
    },
    ui: {
      foregroundColor: "#000000",
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: "100%"
    }
  },
  error: "",
  session: {
    memory: false,
    chatId: "",
    chatMessages: [],
    allChats: []
  },
  api: {
    online: false,
    isApiTyping: false,
    isApiAcceptingVoice: false,
    isApiAcceptingImage: false,
    isApiAcceptingFile: false
  }
};

export const config: Config = {
  apiHost: "https://llminabox.criticalfutureglobal.com",
  chatflowId: "9c0ed472-203e-4199-833c-17ae3fd3f03f",

  assistant: {
    name: "Ai Assistant",
    description: "Critical Future Chatbot Assistant",
    welcomeMessage: "Hello! How can I assist you today?",
    sidebar: true,
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
    foregroundColor: "#000000",
    backgroundColor: "#F8F8FF",
    width: "100%",
    height: "100%"
  }
};
