import { initChatbot } from "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/dist/llminaboxChat.js";

const config = {
  apiHost: "https://llminabox.criticalfutureglobal.com",
  chatflowId: "0f6e4479-ba3d-4a34-b0cb-be96f269a24c",
  assistant: {
    name: "Joe",
    description: "Fseries AI Assistant",
    welcomeMessage: "Hello! How can I help you?",
    voice: {
      name: "en-US-AndrewNeural",
      apiKey: "G7x9mVt2Q5bK8Jp4S1Zc",
      apiHost: "https://tts.criticalfutureglobal.com/get_tts"
    },
    avatar: {
      staticUrl:
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.png",
      liveUrl:
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.gif",
      videoUrl:
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.mp4"
    }
  },
  ui: {
    sidebar: true,
    foregroundColor: "#e2deea",
    backgroundColor: "#212121",
    backgroundColorBody: "#54545480"
  }
};

if (location.href === "https://fseriesclubnation.com/") {
  const container = document.getElementById("llminabox");
  container.style.cssText = `
    display: block;
    width: 100%;
    height: 100%;
    max-height: 70vh;
  `;
  initChatbot(config, container, "full");
}
