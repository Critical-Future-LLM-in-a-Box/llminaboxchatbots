import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useMemo
} from "react";
import { useImmerReducer } from "use-immer";
import { Config, ChatData, ChatActions, Message } from "@/types";
import { defaultChatData } from "@/config";
import deepmerge from "deepmerge";
import { chatReducer } from "@/context/reducer";
import { v4 as uuidv4 } from "uuid";
import { getAllowedUploads, isApiStreaming } from "@/utils";

type Optional<T> = T | null;

export const ChatContext =
  createContext<Optional<[ChatData, React.Dispatch<ChatActions>]>>(null);

export const useContextData = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useContextData must be used within a ContextProvider");
  }
  return context;
};

const createContextData = (userConfig: Config): ChatData => {
  const mergedChatData = deepmerge(defaultChatData, {
    config: deepmerge(defaultChatData.config, userConfig)
  });

  console.log("mergedChatData", mergedChatData);

  let localData = localStorage.getItem("chatData");
  if (localData) {
    localData = JSON.parse(localData);
    return deepmerge(mergedChatData, localData || {});
  }

  const chatId = uuidv4();

  const defaultMessage: Message = {
    id: chatId,
    role: "api",
    content: mergedChatData.config.assistant?.welcomeMessage || "Welcome!",
    timestamp: new Date().toISOString()
  };

  mergedChatData.session.chatId = chatId;
  mergedChatData.session.chatMessages = [defaultMessage];

  localStorage.setItem("chatData", JSON.stringify(mergedChatData));

  return mergedChatData;
};

export const ContextProvider = ({
  children,
  config
}: {
  children: ReactNode;
  config: Config;
}): JSX.Element => {
  const initialContextData = useMemo(() => createContextData(config), [config]);

  const [state, dispatch] = useImmerReducer(chatReducer, initialContextData);

  useEffect(() => {
    const serializedData = JSON.stringify(state);
    localStorage.setItem("chatData", serializedData);

    if (state.error) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: "SET_ERROR", payload: "" });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [state]);

  useEffect(() => {
    const fetchStreamingStatus = async () => {
      const streamingStatus = await isApiStreaming(state).catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });

      if (streamingStatus) {
        dispatch({
          type: "SET_STREAMING_STATUS",
          payload: streamingStatus
        });
      }

      if (!streamingStatus) {
        dispatch({
          type: "SET_STREAMING_STATUS",
          payload: false
        });
      }
    };
    fetchStreamingStatus();
    const fetchAllowedUploads = async () => {
      const response = await getAllowedUploads(state).catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });

      if (response) {
        const { uploads, fullFileUpload } = response;
        dispatch({
          type: "SET_UPLOAD_CONFIG",
          payload: {
            isApiAcceptingVoice: uploads.isSpeechToTextEnabled,
            isApiAcceptingImage: uploads.isImageUploadAllowed,
            isApiAcceptingRAGFile: uploads.isRAGFileUploadAllowed,
            isApiAcceptingFullFile: fullFileUpload.status,
            imgUploadSizeAndTypes: uploads.imgUploadSizeAndTypes,
            fileUploadSizeAndTypes: uploads.fileUploadSizeAndTypes
          }
        });
      }
    };

    fetchAllowedUploads();
  }, []);

  const contextValue: [ChatData, React.Dispatch<ChatActions>] = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};
