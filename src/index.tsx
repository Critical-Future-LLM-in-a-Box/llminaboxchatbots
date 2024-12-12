import React from "react";
import ReactDOM from "react-dom/client";

import { ContextProvider } from "@/context";
import { Config } from "@/types";
import CssBaseline from "@mui/material/CssBaseline";
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

export function initChatbot(config: Config = {}): void {
  let chatbotRoot = document.querySelector("llminabox") as HTMLElement;
  let Chatbot = ChatbotFull;

  if (!chatbotRoot) {
    chatbotRoot = document.createElement("llminabox");
    document.body.appendChild(chatbotRoot);
    Chatbot = ChatbotBubble;
  }

  const root = ReactDOM.createRoot(chatbotRoot);
  root.render(
    <ContextProvider config={config}>
      <CssBaseline />
      <Chatbot />
    </ContextProvider>
  );
}

export function destroyChatbot(): void {
  const chatbotRoot = document.querySelector("llminabox") as HTMLElement;
  if (chatbotRoot) {
    const root = ReactDOM.createRoot(chatbotRoot);
    root.unmount();
    chatbotRoot.remove();
  }
}
