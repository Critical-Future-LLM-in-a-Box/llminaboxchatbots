import { default as React, createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { chatReducer } from "./reducer";

export interface Message {
  role: string;
  content: string;
  timestamp: string;
  uploads?: {
    data: string;
    type: string;
    name: string;
    mime: string;
  }[];
}

export interface Config {
  apiHost?: string;
  chatflowid?: string;
  sessionid?: string;
  name?: string;
  description?: string;
  voiceName?: string;
  welcomeMessage?: string;
  avatarStaticUrl?: string;
  avatarLiveUrl?: string;
  avatarVideoUrl?: string;
  themeColor?: string;
  textColor?: string;
  chatMemory?: boolean;
  width?: string;
  height?: string;
}

export interface ChatData {
  messages: Message[];
  config: Config;
  online: boolean;
  error: string;
  isApiTyping: boolean;
  isApiAcceptingVoice: boolean;
  isApiAcceptingImage: boolean;
  isApiAcceptingFiles: boolean;
}

export const createDefaultContextData = (
  initConfig: Config = {},
  welcomeMessage: Message = {
    role: "apiMessage",
    content: "Hi there! How can I assist you today?",
    timestamp: new Date().toLocaleString()
  }
): ChatData => {
  return {
    messages: [welcomeMessage],
    online: false,
    isApiTyping: false,
    isApiAcceptingVoice: false,
    isApiAcceptingImage: false,
    isApiAcceptingFiles: false,
    error: "",
    config: {
      apiHost: "",
      chatflowid: "",
      name: "",
      description: "",
      voiceName: "",
      avatarStaticUrl: "",
      avatarLiveUrl: "",
      avatarVideoUrl: "",
      chatMemory: false,
      themeColor: "",
      textColor: "",
      width: "",
      height: "",
      ...initConfig,
      sessionid: localStorage.getItem("sessionid")
        ? (localStorage.getItem("sessionid") as string)
        : initConfig.sessionid
    }
  };
};

export const Context = createContext<
  [
    ChatData,
    React.Dispatch<{
      type: string;
      payload: string | boolean | Message | Config;
    }>
  ]
>([createDefaultContextData(), () => {}]);

export const useContextData = () => {
  return useContext(Context);
};

export function ContextProvider({
  children,
  initConfig
}: {
  children: React.ReactNode;
  initConfig: Config;
}): JSX.Element {
  const [chatData, dispatch] = useImmerReducer(
    chatReducer,
    createDefaultContextData(initConfig)
  );

  return (
    <Context.Provider value={[chatData, dispatch]}>{children}</Context.Provider>
  );
}
