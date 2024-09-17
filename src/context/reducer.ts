import { ChatData, Message, Config } from "./index";
import { createDefaultContextData } from "@/context";

export const chatReducer = (
  draft: ChatData,
  action: { type: string; payload: string | boolean | Message | Config }
) => {
  switch (action.type) {
    case "CLEAR_CHAT":
      draft.messages = [...createDefaultContextData().messages];
      break;
    case "SET_CONFIG":
      draft.config = action.payload as Config;
      break;
    case "SET_ERROR":
      draft.error = action.payload as string;
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
      draft.isApiAcceptingimage = !!action.payload as boolean;
      break;
    case "ADD_MESSAGE":
      draft.messages.push(action.payload as Message);
      break;
    case "DELETE_MESSAGE":
      draft.messages.pop();
      break;
    case "UPDATE_MESSAGE":
      const newMessage = action.payload as string;
      const oldMessage = draft.messages.pop();
      if (oldMessage) {
        draft.messages.push({
          ...oldMessage,
          content: oldMessage.content + newMessage
        });
      }
    default:
      break;
  }
};
