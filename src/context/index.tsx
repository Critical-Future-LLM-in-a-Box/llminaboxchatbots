import React, { createContext, useContext, ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import deepmerge from "deepmerge";
import { Config, ChatData, ChatAction } from "@/types";
import { defaultChatData } from "@/config";

type Optional<T> = T | null;

export const ChatContext =
  createContext<Optional<[ChatData, React.Dispatch<ChatAction>]>>(null);

export const useContextData = () => useContext(ChatContext)!;

const createContextData = (userConfig: Config): ChatData => {
  const mergedChatData = deepmerge(defaultChatData, {
    config: deepmerge(defaultChatData.config, userConfig)
  });

  mergedChatData.session.chatMessages.unshift({
    id: `${Date.now()}`,
    role: "assistant",
    content: mergedChatData.config.assistant.welcomeMessage,
    timestamp: new Date().toISOString()
  });

  return mergedChatData;
};

export const ContextProvider = ({
  children,
  config
}: {
  children: ReactNode;
  config: Config;
}): JSX.Element => {
  const contextDataValue = createContextData(config);

  const AppContext = useImmerReducer(chatReducer, contextDataValue);

  return (
    <ChatContext.Provider value={AppContext}>{children}</ChatContext.Provider>
  );
};

export const chatReducer = (draft: ChatData, action: ChatAction) => {
  switch (action.type) {
    case "SET_CONFIG":
      draft.config = deepmerge(draft.config, action.payload);
      break;
    case "SET_ERROR":
      draft.error = action.payload;
      break;
    case "ADD_MESSAGE":
      draft.session.chatMessages.push(action.payload);
      break;
    case "SET_ONLINE_STATUS":
      draft.api.online = action.payload;
      break;
    case "SET_API_ALLOWED_UPLOADS":
      draft.api.isApiAcceptingImage = action.payload.isImageUploadAllowed;
      draft.api.isApiAcceptingVoice = action.payload.isSpeechToTextEnabled;
      draft.api.isApiAcceptingFile = action.payload.isFileUploadAllowed;
      break;
    default:
      return draft;
  }
};
