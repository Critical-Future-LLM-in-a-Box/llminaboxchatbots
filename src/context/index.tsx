import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useMemo
} from "react";
import { useImmerReducer } from "use-immer";
import { Config, ChatData, ChatActions, Message } from "@/types";
import deepmerge from "deepmerge";
import { chatReducer } from "@/context/reducer";
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

export const defaultChatData: ChatData = {
  error: "",
  config: {
    apiHost: "",
    chatflowId: "",
    authToken: "",
    assistant: {
      name: "AI Assistant",
      description: "Your AI Assistant",
      welcomeMessage: "Hello! How can I help you?"
    },
    ui: {
      sidebar: false,
      width: "100%",
      height: "100%",
      foregroundColor: "#111111",
      backgroundColor: "#EFEFEF",
      bodyBackgroundColor: "#FFF"
    }
  },
  session: {
    chatId: "",
    chatMessages: []
  },
  api: {
    canStream: false,
    isOnline: false,
    isTyping: false,
    isApiAcceptingVoice: false,
    isApiAcceptingImage: false,
    isApiAcceptingRAGFile: false,
    isApiAcceptingFullFile: false,
    imgUploadSizeAndTypes: [],
    fileUploadSizeAndTypes: []
  }
};

export const ContextProvider = ({
  children,
  config
}: {
  children: ReactNode;
  config: Config;
}): JSX.Element => {
  let initialContextData = deepmerge(defaultChatData, {
    config: deepmerge(defaultChatData.config, config)
  });


  const storageKey = `chatData_${config.chatDataId || location.pathname}`;
  
  let localData = localStorage.getItem(storageKey);
  if (!localData) {
    const defaultMessage: Message = {
      id: Date.now().toString(),
      role: "api",
      content: initialContextData.config.assistant?.welcomeMessage!,
      timestamp: new Date().toISOString()
    };

    initialContextData.session.chatId = defaultMessage.id;
    initialContextData.session.chatMessages = [defaultMessage];

    localStorage.setItem(
      storageKey,
      JSON.stringify(initialContextData.session)
    );

    localData = localStorage.getItem(storageKey);
  }

  const localSession: ChatData["session"] = JSON.parse(localData!);
  initialContextData.session = localSession;

  const [state, dispatch] = useImmerReducer(chatReducer, initialContextData);

  useEffect(() => {
    const serializedData = JSON.stringify(state.session);
    localStorage.setItem(storageKey, serializedData);
  }, [state.session]);

  useEffect(() => {
    if (state.error) {
      if (state.config.onErrorMessage) state.config.onErrorMessage?.(state);

      const timeoutId = setTimeout(() => {
        dispatch({ type: "SET_ERROR", payload: "" });
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [state.error]);

  useEffect(() => {
    (async () => {
      const streamingStatus = await isApiStreaming(state).catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });

      dispatch({
        type: "SET_STREAMING_STATUS",
        payload: streamingStatus || false
      });
    })();

    (async () => {
      const response = await getAllowedUploads(state).catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });

      if (response) {
        const { uploads, fullFileUpload } = response;
        if (uploads) {
          dispatch({
            type: "SET_UPLOAD_CONFIG",
            payload: {
              isApiAcceptingVoice: uploads?.isSpeechToTextEnabled,
              isApiAcceptingImage: uploads?.isImageUploadAllowed,
              isApiAcceptingRAGFile: uploads?.isRAGFileUploadAllowed,
              isApiAcceptingFullFile: fullFileUpload?.status,
              imgUploadSizeAndTypes: uploads?.imgUploadSizeAndTypes,
              fileUploadSizeAndTypes: uploads?.fileUploadSizeAndTypes
            }
          });
        }
      }
    })();
  }, []);

  const contextValue: [ChatData, React.Dispatch<ChatActions>] = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};
