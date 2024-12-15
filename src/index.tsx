import React from "react";
import ReactDOM from "react-dom/client";

import { Config } from "@/types";
import { ContextProvider } from "@/context";
import CssBaseline from "@mui/material/CssBaseline";
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

let chatbotReactRoot: ReactDOM.Root | null = null;

export function destroyChatbot(): void {
  if (chatbotReactRoot) {
    chatbotReactRoot.unmount();
    chatbotReactRoot = null;
  }
}

export function initChatbot(config: Config = {}): void {
  const llminaboxFull = document.getElementById("llminabox-full");
  const llminaboxBubble = document.getElementById("llminabox-bubble");

  if (llminaboxFull) {
    renderChatbot(llminaboxFull, ChatbotFull, config);
  } else if (llminaboxBubble) {
    renderChatbot(llminaboxBubble, ChatbotBubble, config);
  } else {
    console.warn("No valid chatbot container found.");
  }
}

function renderChatbot(
  container: HTMLElement,
  ChatbotComponent: React.FC,
  config: Config
): void {
  chatbotReactRoot = ReactDOM.createRoot(container);
  chatbotReactRoot.render(
    <ContextProvider config={config}>
      <CssBaseline />
      <ChatbotComponent />
    </ContextProvider>
  );
}
