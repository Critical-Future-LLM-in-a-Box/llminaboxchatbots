import React from "react";
import ReactDOM from "react-dom/client";
import Chatbot from "./components/Chatbot";
import "./index.css";

declare const window: Window & { Chatbot: config };

export type config = {
  chatflowid: string;
  apiHost?: string;
  chatflowConfig?: Record<string, unknown>;
};

export const defaultConfig: config = {
  chatflowid: "",
  apiHost: "https://llm.criticalfutureglobal.com",
  chatflowConfig: {}
};

export function init(chatbotConfig = defaultConfig) {
  const llminaboxChatbot =
    document.querySelector("llminabox") ?? document.querySelector("#llminabox");

  llminaboxChatbot
    ? ReactDOM.createRoot(llminaboxChatbot).render(<Chatbot />)
    : ReactDOM.createRoot(document.createElement("llminabox")).render(
        <Chatbot />
      );
}
