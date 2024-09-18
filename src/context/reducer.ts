import { ChatData, Message, Config } from "./index";
import { createDefaultContextData } from "@/context";

export const chatReducer = (
  draft: ChatData,
  action: { type: string; payload: string | boolean | Message | Config }
) => {
  switch (action.type) {
    case "SET_CONFIG":
      draft.config = action.payload as Config;
      break;
    case "SET_ERROR":
      draft.error = action.payload as string;
      break;
    case "SET_SESSION_ID":
      draft.config.sessionid = action.payload as string;
      break;
    case "SET_CHAT_MEMORY":
      draft.config.chatMemory = !!action.payload as boolean;
      break;
    case "SET_ONLINE_STATUS":
      draft.online = !!action.payload as boolean;
      break;
    case "SET_API_TYPING":
      draft.isApiTyping = !!action.payload as boolean;
      break;
    case "SET_API_ACCEPTING_VOICE":
      draft.isApiAcceptingVoice = !!action.payload as boolean;
      break;
    case "SET_API_ACCEPTING_IMAGE":
      draft.isApiAcceptingImage = !!action.payload as boolean;
      break;
    case "SET_API_ACCEPTING_FILES":
      draft.isApiAcceptingFiles = !!action.payload as boolean;
      break;
    case "CLEAR_CHAT":
      draft.messages = [...createDefaultContextData().messages];
      const newSessionID = Math.random().toString(10).substring(2, 12);
      draft.config.sessionid = newSessionID;
      localStorage.setItem("sessionid", newSessionID);
      break;
    case "ADD_MESSAGE":
      draft.messages.push(action.payload as Message);
      break;
    case "DELETE_MESSAGE":
      draft.messages.pop();
      break;
    case "UPDATE_MESSAGE":
      const newMessage = action.payload as Message;
      const oldMessage = draft.messages.pop();
      if (oldMessage) {
        draft.messages.push({
          ...oldMessage,
          ...newMessage
        });
      }
    default:
      break;
  }
};
