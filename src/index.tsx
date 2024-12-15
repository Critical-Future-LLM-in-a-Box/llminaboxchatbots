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

  if (llminaboxFull) {
    renderChatbot(llminaboxFull, ChatbotFull, config);
  } else {
    const container = document.createElement("div");
    container.id = "llminabox-bubble";
    document.body.appendChild(container);
    renderChatbot(container, ChatbotBubble, config);
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
