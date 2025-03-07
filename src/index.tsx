import React, { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Config } from "@/types";
import { ContextProvider } from "@/context";
import CssBaseline from "@mui/material/CssBaseline";
import ChatbotFull from "@/components/ChatbotFull";
import ChatbotBubble from "@/components/ChatbotBubble";

let chatbotReactRoot: ReactDOM.Root | null = null;

const ChatbotWrapper: React.FC<{
  children: React.ReactNode;
  config: Config;
}> = ({ children, config }) => {
  const theme = useMemo(() => createTheme(), []);

  const shadowHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowHost.current && !shadowHost.current.shadowRoot) {
      const shadowRoot = shadowHost.current.attachShadow({ mode: "open" });
      const shadowCache = createCache({
        key: "mui",
        container: shadowRoot
      });

      const root = createRoot(shadowRoot);
      root.render(
        <CacheProvider value={shadowCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ContextProvider config={config}>{children}</ContextProvider>
          </ThemeProvider>
        </CacheProvider>
      );
    }
  }, [theme, config, children]);

  return (
    <div
      style={{ height: "100%", maxHeight: "100%", overflow: "auto" }}
      ref={shadowHost}
    ></div>
  );
};

function renderChatbot(
  container: HTMLElement,
  ChatbotComponent: React.FC,
  config: Config
): void {
  chatbotReactRoot = ReactDOM.createRoot(container);
  chatbotReactRoot.render(
    <ChatbotWrapper config={config}>
      <ChatbotComponent />
    </ChatbotWrapper>
  );
}

interface Chatbot {
  config: Config;
  container: HTMLElement;
  destroy: () => void;
}

export function initChatbot(
  config: Config = {},
  container?: HTMLElement,
  type: "full" | "bubble" = "bubble"
): Chatbot {
  if (container) {
    container.style.display = "block";
    container.style.width = "100%";
    container.style.height = "100%";

    if (type === "bubble") {
      renderChatbot(container, ChatbotBubble, config);
      return {
        config,
        container,
        destroy: () => {
          chatbotReactRoot?.unmount();
          chatbotReactRoot = null;
        }
      };
    }

    if (type === "full") {
      renderChatbot(container, ChatbotFull, config);
      return {
        config,
        container,
        destroy: () => {
          chatbotReactRoot?.unmount();
          chatbotReactRoot = null;
        }
      };
    }
  }

  let llminaboxContainer = document.getElementById("llminabox-full");
  if (llminaboxContainer) {
    llminaboxContainer.style.display = "block";
    llminaboxContainer.style.width = "100%";
    llminaboxContainer.style.height = "100%";
    renderChatbot(llminaboxContainer, ChatbotFull, config);
  } else {
    llminaboxContainer = document.createElement("div");
    llminaboxContainer.id = "llminabox-bubble";
    document.body.appendChild(llminaboxContainer);
    renderChatbot(llminaboxContainer, ChatbotBubble, config);
  }

  return {
    config,
    container: llminaboxContainer,
    destroy: () => {
      chatbotReactRoot?.unmount();
      chatbotReactRoot = null;
      if (llminaboxContainer.id === "llminabox-bubble") {
        llminaboxContainer.remove();
      }
    }
  };
}
