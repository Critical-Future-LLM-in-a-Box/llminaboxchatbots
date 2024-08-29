"use strict";
export const defaultProps = {
  chatflowid: "",
  apiHost: "https://llm.criticalfutureglobal.com",
  chatflowConfig: {}
  // observersConfig: {}
};
export function init(props = defaultProps) {
  const llminaboxChatbot = document.querySelector("llminabox") ?? document.querySelector("#llminabox");
  if (llminaboxChatbot) {
    Object.assign(llminaboxChatbot, props);
  } else {
    const llminaboxChatbot2 = document.createElement("llminabox");
    Object.assign(llminaboxChatbot2, props);
    document.body.appendChild(llminaboxChatbot2);
  }
  window.Chatbot = props;
}
//# sourceMappingURL=index.js.map
