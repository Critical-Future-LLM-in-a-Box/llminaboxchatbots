export function generateConfig({ apiHost, chatflowid, themeFront, themeBack }) {
  return {
    chatflowid: chatflowid,
    apiHost: apiHost,
    theme: {
      button: {
        color: themeFront,
        backgroundColor: themeFront,
      },
      chatWindow: {
        welcomeMessage: "Hi there, How can I help you?",
        errorMessage: "Error",
        backgroundColor: "#efefef",
        fontSize: 16,
        botMessage: {
          showAvatar: true,
          color: themeFront,
          backgroundColor: themeBack,
          avatarSrc:
            "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs.png?raw=true",
        },
        userMessage: {
          showAvatar: true,
          textColor: themeFront,
          backgroundColor: themeBack,
        },
        textInput: {
          placeholder: "How can I help you?",
          backgroundColor: themeBack,
          textColor: themeFront,
          sendButtonColor: themeFront,
          sendButtonColor: themeBack,
          maxChars: 2000,
          maxCharsWarningMessage: "You exceeded the character limit.",
        },
        footer: {
          backgroundColor: themeFront,
          text: "Powered by",
          company: "Critical Future",
          companyLink: "https://criticalfutureglobal.com/",
        },
        disclaimer: {
          title: "Disclaimer",
          message:
            "By using this chatbot, you agree to criticalfuture Terms & Condition",
        },
      },
    },
  };
}
