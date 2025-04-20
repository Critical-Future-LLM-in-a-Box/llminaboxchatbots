import React from "react";
import ReactDOM from "react-dom/client";
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";
import IsolatedWrapper from "@/Wrapper";
import { Config } from "@/types";

let chatbotReactRoot: ReactDOM.Root | null = null;

export function initChatbot(
  config: Config = {},
  container?: HTMLElement
): {
  config: Config;
  container: HTMLElement;
  destroy: () => void;
} {
  if (config.onMount) config.onMount(config);

  if (container) {
    chatbotReactRoot = ReactDOM.createRoot(container);
    chatbotReactRoot.render(
      <IsolatedWrapper config={config}>
        <ChatbotFull />
      </IsolatedWrapper>
    );

    return {
      config,
      container,
      destroy: () => {
        chatbotReactRoot?.unmount();
        chatbotReactRoot = null;
        if (config.onUnmount) config.onUnmount(config);
      }
    };
  }

  let llminaboxContainer = document.getElementById("llminabox-full");
  if (llminaboxContainer) {
    llminaboxContainer.style.display = "block";
    llminaboxContainer.style.width = config.ui?.width || "100%";
    llminaboxContainer.style.height = config.ui?.height || "100%";
    chatbotReactRoot = ReactDOM.createRoot(llminaboxContainer);
  } else {
    llminaboxContainer = document.createElement("div");
    llminaboxContainer.id = "llminabox-bubble";
    document.body.appendChild(llminaboxContainer);
    chatbotReactRoot = ReactDOM.createRoot(llminaboxContainer);
  }

  chatbotReactRoot.render(
    <IsolatedWrapper config={config}>
      {llminaboxContainer.id === "llminabox-full" ? (
        <ChatbotFull />
      ) : (
        <ChatbotBubble />
      )}
    </IsolatedWrapper>
  );

  return {
    config,
    container: llminaboxContainer,
    destroy: () => {
      chatbotReactRoot?.unmount();
      chatbotReactRoot = null;
      llminaboxContainer.remove();
      if (config.onUnmount) config.onUnmount(config);
    }
  };
}
