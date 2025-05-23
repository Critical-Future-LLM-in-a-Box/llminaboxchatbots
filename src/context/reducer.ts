import { ChatData, ChatActions } from "@/types";

export const chatReducer = (draft: ChatData, action: ChatActions) => {
  /**
   * Sets an error message in the chat data
   * Triggers onErrorMessage callback if configured
   */
  if (action.type === "SET_ERROR") {
    draft.error = action.payload;
  }

  /**
   * Updates the online status of the API
   */
  if (action.type === "SET_ONLINE_STATUS") {
    draft.api.isOnline = action.payload;
  }

  /**
   * Updates whether the API can stream responses
   */
  if (action.type === "SET_STREAMING_STATUS") {
    draft.api.canStream = action.payload;
  }

  /**
   * Updates the typing status of the API
   */
  if (action.type === "SET_TYPING_STATUS") {
    draft.api.isTyping = action.payload;
  }

  /**
   * Updates the upload configuration settings
   * Controls what types of file uploads are accepted and their constraints
   */
  if (action.type === "SET_UPLOAD_CONFIG") {
    if (action.payload.isApiAcceptingVoice) {
      draft.api.isApiAcceptingVoice = action.payload.isApiAcceptingVoice;
    }
    if (action.payload.isApiAcceptingImage) {
      draft.api.isApiAcceptingImage = action.payload.isApiAcceptingImage;
    }
    if (action.payload.isApiAcceptingRAGFile) {
      draft.api.isApiAcceptingRAGFile = action.payload.isApiAcceptingRAGFile;
    }
    if (action.payload.isApiAcceptingFullFile) {
      draft.api.isApiAcceptingFullFile = action.payload.isApiAcceptingFullFile;
    }

    if (action.payload.imgUploadSizeAndTypes) {
      draft.api.imgUploadSizeAndTypes = action.payload.imgUploadSizeAndTypes;
    }

    if (action.payload.fileUploadSizeAndTypes) {
      draft.api.fileUploadSizeAndTypes = action.payload.fileUploadSizeAndTypes;
    }
  }

  /**
   * Sets the current chat session ID
   */
  if (action.type === "SET_CHAT_ID") {
    draft.session.chatId = action.payload;
  }

  /**
   * Starts a new chat session
   * Clears local storage, generates a new chat ID, and adds a welcome message
   */
  if (action.type === "START_NEW_CHAT") {
    const storageKey = `chatData_${draft.config.chatDataId}`;
    localStorage.removeItem(storageKey);
    const newChatId = Date.now().toString();
    draft.session.chatId =newChatId;
    draft.session.chatMessages = [
      {
        id: Date.now().toString(),
        role: "api",
        content: draft.config.assistant?.welcomeMessage || "Welcome!",
        timestamp: new Date().toISOString()
      }
    ];
    localStorage.setItem(storageKey, JSON.stringify({...draft, session: {...draft.session, chatId: newChatId}}));
  }

  /**
   * Adds a new message to the chat
   * Handles user and API messages differently
   * Triggers appropriate callbacks based on message role and chat state
   */
  if (action.type === "ADD_NEW_MESSAGE") {
    const newMessage = action.payload;
    draft.session.chatMessages.push(newMessage);
  }

  /**
   * Removes the last message from the chat
   */
  if (action.type === "DELETE_LAST_MESSAGE") {
    draft.session.chatMessages.pop();
  }

  /**
   * Updates the content of the last message in the chat
   * Preserves existing message properties and appends new content
   */
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
