import React from "react";
import ReactDOM from "react-dom/client";

import { ContextProvider } from "@/context";
import { Config } from "@/types";
import { config } from "@/config";
import CssBaseline from '@mui/material/CssBaseline';
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

export default function init(config: Config): void {
  let chatbotRoot = document.querySelector("llminabox") as HTMLElement;
  let Chatbot = ChatbotFull;

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

init(config);
