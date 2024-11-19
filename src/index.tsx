import React from "react";
import ReactDOM from "react-dom/client";

import { ContextProvider } from "@/context";
import { Config } from "@/types";
import { config } from "@/config";

import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

export default function init(config: Config): void {
  let chatbotRoot = document.querySelector("llminabox");
  let Chatbot = ChatbotFull;

  if (!chatbotRoot) {
    chatbotRoot = document.createElement("llminabox");
    document.body.appendChild(chatbotRoot);
    Chatbot = ChatbotBubble;
  }

  ReactDOM.createRoot(chatbotRoot).render(
    <ContextProvider config={config}>
      <Chatbot />
    </ContextProvider>
  );
}

init(config);
