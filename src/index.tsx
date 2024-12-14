import React from "react";
import ReactDOM from "react-dom/client";

import { Config } from "@/types";
import { ContextProvider } from "@/context";
import CssBaseline from "@mui/material/CssBaseline";
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

export function initChatbot(config: Config = {}): void {
  let Chatbot = ChatbotFull;
  let chatbotRoot: HTMLElement | null = document.querySelector("#llminabox");

  if (chatbotRoot) {
    chatbotRoot.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `;
  }

  if (!chatbotRoot) {
    chatbotRoot = document.createElement("llminabox");
    document.body.appendChild(chatbotRoot);
    Chatbot = ChatbotBubble;
  }

  ReactDOM.createRoot(chatbotRoot).render(
    <ContextProvider config={config}>
      <CssBaseline />
      <Chatbot />
    </ContextProvider>
  );
}

export function destroyChatbot({
  react = true,
  dom = true
}: { react?: boolean; dom?: boolean } = {}): void {
  const chatbotRoot: HTMLElement | null = document.querySelector("#llminabox");
  if (chatbotRoot && react) ReactDOM.createRoot(chatbotRoot).unmount();
  if (chatbotRoot && dom) chatbotRoot.remove();
}
