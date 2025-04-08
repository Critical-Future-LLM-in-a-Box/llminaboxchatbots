import React, { memo, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ContextProvider } from "@/context";
import { Config } from "@/types";

export const IsolatedWrapper: React.FC<{
  children: React.ReactNode;
  config: Config;
}> = ({ children, config }) => {
  const shadowHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowHost.current && !shadowHost.current.shadowRoot) {
      const shadowRoot = shadowHost.current.attachShadow({ mode: "open" });
      const root = createRoot(shadowRoot);

      root.render(
        <CacheProvider
          value={createCache({
            key: "mui",
            container: shadowRoot
          })}
        >
          <ThemeProvider theme={createTheme()}>
            <CssBaseline />
            <ContextProvider config={config}>{children}</ContextProvider>
          </ThemeProvider>
        </CacheProvider>
      );
    }
  }, [config, children]);

  return <div ref={shadowHost}></div>;
};

export default memo(IsolatedWrapper);
