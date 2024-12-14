import { ChatData, ChatActions } from "@/types";

export const chatReducer = (draft: ChatData, action: ChatActions) => {
  if (action.type === "SET_ERROR") {
    draft.error = action.payload;
  }

  if (action.type === "SET_ONLINE_STATUS") {
    draft.api.online = action.payload;
  }

  if (action.type === "SET_STREAMING_STATUS") {
    draft.api.canStream = action.payload;
  }

  if (action.type === "SET_TYPING_STATUS") {
    draft.api.typing = action.payload;
  }

  if (action.type === "SET_UPLOAD_CONFIG") {
    const {
      isApiAcceptingVoice,
      isApiAcceptingImage,
      isApiAcceptingRAGFile,
      isApiAcceptingFullFile,
      imgUploadSizeAndTypes,
      fileUploadSizeAndTypes
    } = action.payload;

    draft.api.isApiAcceptingVoice = isApiAcceptingVoice;
    draft.api.isApiAcceptingImage = isApiAcceptingImage;
    draft.api.isApiAcceptingRAGFile = isApiAcceptingRAGFile;
    draft.api.isApiAcceptingFullFile = isApiAcceptingFullFile;

    if (imgUploadSizeAndTypes) {
      draft.api.imgUploadSizeAndTypes = imgUploadSizeAndTypes;
    }

    if (fileUploadSizeAndTypes) {
      draft.api.fileUploadSizeAndTypes = fileUploadSizeAndTypes;
    }
  }

  if (action.type === "SET_CHAT_ID") {
    draft.session.chatId = action.payload;
  }

  if (action.type === "START_NEW_CHAT") {
    localStorage.removeItem("chatData");
    draft.session.chatId = Date.now().toString();
    draft.session.chatMessages = [
      {
        id: Date.now().toString(),
        role: "api",
        content: draft.config.assistant?.welcomeMessage || "Welcome!",
        timestamp: new Date().toISOString()
      }
    ];
  }

  if (action.type === "ADD_NEW_MESSAGE") {
    draft.session.chatMessages.push(action.payload);
  }

  if (action.type === "DELETE_LAST_MESSAGE") {
    draft.session.chatMessages.pop();
  }

  if (action.type === "UPDATE_LAST_MESSAGE") {
    const lastMessage =
      draft.session.chatMessages[draft.session.chatMessages.length - 1];

    draft.session.chatMessages[draft.session.chatMessages.length - 1] = {
      ...lastMessage,
      ...action.payload,
      id: action.payload.id || lastMessage.id,
      content: lastMessage.content + (action.payload.content || "")
    };
  }
};
