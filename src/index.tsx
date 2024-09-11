import React from "react";
import ReactDOM from "react-dom/client";
import ChatbotFull from "./components/ChatbotFull";
import ChatbotBubble from "./components/ChatbotBubble";
import "./index.css";

export type config = {
  name?: string;
  apiHost?: string;
  chatflowid?: string;
  startingMessage?: string;
  avatarImage?: string;
  avatarImageLive?: string;
  avatarVideo?: string;
  themeColor?: string;
  textColor?: string;
};

export const defaultConfig: config = {
  name: "Mai",
  apiHost: "https://llm.criticalfutureglobal.com",
  chatflowid: "95e01dd4-ff2f-4055-a6f1-3cfc35261831",
  startingMessage: "How can I assist you today?",
  avatarImage:
    "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai.png",
  avatarImageLive:
    "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai-new.gif",
  avatarVideo:
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/mai/Mai%20intro%20V0.2%20(sonia%20voice).mp4",
  themeColor: "#F8F8FF",
  textColor: "#000000"
};

export function init(chatbotConfig: config = defaultConfig) {
  const llminaboxChatbot =
    (document.querySelector("llminabox") as HTMLElement) ??
    (document.querySelector("#llminabox") as HTMLElement);

  if (llminaboxChatbot) {
    llminaboxChatbot.style.display = "block";
    llminaboxChatbot.style.height = "100vh";
    ReactDOM.createRoot(llminaboxChatbot).render(
      <ChatbotFull config={chatbotConfig} />
    );
  } else {
    const bubbleLlminabox = document.createElement("llminabox");
    document.body.appendChild(bubbleLlminabox);
    ReactDOM.createRoot(bubbleLlminabox).render(
      <ChatbotBubble config={chatbotConfig} />
    );
  }
}

init();
