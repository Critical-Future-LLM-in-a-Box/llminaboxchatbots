import { observersConfigType } from "./components/Bot";

declare const window: Window & { Chatbot: BotProps };

export type BotProps = {
  chatflowid: string;
  apiHost?: string;
  chatflowConfig?: Record<string, unknown>;
  observersConfig?: observersConfigType;
};

export const defaultProps: BotProps = {
  chatflowid: "",
  apiHost: "https://llm.criticalfutureglobal.com",
  chatflowConfig: {}
  // observersConfig: {}
};

export function init(props = defaultProps) {
  const llminaboxChatbot =
    document.querySelector("llminabox") ?? document.querySelector("#llminabox");

  if (llminaboxChatbot) {
    Object.assign(llminaboxChatbot, props);
  } else {
    const llminaboxChatbot = document.createElement("llminabox");
    Object.assign(llminaboxChatbot, props);
    document.body.appendChild(llminaboxChatbot);
  }

  window.Chatbot = props;
}
