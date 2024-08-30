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

  if (llminaboxChatbot) {
    Object.assign(llminaboxChatbot, chatbotConfig);
  } else {
    const llminaboxChatbot = document.createElement("llminabox");
    Object.assign(llminaboxChatbot, chatbotConfig);
    document.body.appendChild(llminaboxChatbot);
  }

  window.Chatbot = chatbotConfig;
}
