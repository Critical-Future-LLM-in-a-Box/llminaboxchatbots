import { ChatData, ChatActions } from "@/types";

export const chatReducer = (draft: ChatData, action: ChatActions) => {
  /**
   * Sets an error message in the chat data
   * Triggers onErrorMessage callback if configured
   */
  if (action.type === "SET_ERROR") {
    draft.error = action.payload;

    if (draft.config.onErrorMessage) {
      draft.config.onErrorMessage?.(draft);
    }
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
   * Triggers onResetChat callback if configured
   */
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

    if (draft.config.onResetChat) {
      draft.config.onResetChat?.(draft);
    }
  }

  /**
   * Adds a new message to the chat
   * Handles user and API messages differently
   * Triggers appropriate callbacks based on message role and chat state
   */
  if (action.type === "ADD_NEW_MESSAGE") {
    const newMessage = action.payload;
    draft.session.chatMessages.push(newMessage);

    const userMessageCount = draft.session.chatMessages.filter(
      (msg) => msg.role === "user"
    ).length;

    const apiMessageCount = draft.session.chatMessages.filter(
      (msg) =>
        msg.role === "api" &&
        msg.content !== (draft.config.assistant?.welcomeMessage || "Welcome!")
    ).length;

    if (newMessage.role === "user") {
      if (userMessageCount === 0 && draft.config.onFirstUserMessage) {
        draft.config.onFirstUserMessage?.(newMessage);
      }

      if (draft.config.onUserMessage) {
        draft.config.onUserMessage?.(newMessage);
      }
    }

    if (newMessage.role === "api") {
      if (apiMessageCount === 0 && draft.config.onFirstAPIMessage) {
        draft.config.onFirstAPIMessage?.(newMessage);
      }

      if (draft.config.onAPIMessage) {
        draft.config.onAPIMessage?.(newMessage);
      }
    }
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
