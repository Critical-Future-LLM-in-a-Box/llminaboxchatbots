import React from "react";
import ReactDOM from "react-dom/client";

import { Config } from "@/types";
import { ContextProvider } from "@/context";
import CssBaseline from "@mui/material/CssBaseline";
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

let chatbotRootElement: HTMLElement | null =
  document.querySelector("#llminabox");
let chatbotReactRoot: ReactDOM.Root | null = null;

export function initChatbot(config: Config = {}): void {
  let Chatbot = ChatbotFull;

  if (!chatbotRootElement) {
    chatbotRootElement = document.createElement("div");
    chatbotRootElement.id = "llminabox";
    document.body.appendChild(chatbotRootElement);
    Chatbot = ChatbotBubble;
  }

  chatbotRootElement.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `;

  if (!chatbotReactRoot) {
    chatbotReactRoot = ReactDOM.createRoot(chatbotRootElement);
  }

  chatbotReactRoot.render(
    <ContextProvider config={config}>
      <CssBaseline />
      <Chatbot />
    </ContextProvider>
  );
}

export function destroyChatbot(): void {
  if (chatbotReactRoot) {
    chatbotReactRoot.unmount();
    chatbotReactRoot = null;
  }

  if (chatbotRootElement) {
    chatbotRootElement.style.cssText = `
      display: none;
    `;
  }
}
