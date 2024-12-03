export function generateConfig({
  apiHost,
  chatflowid,
  themeFront,
  themeBack,
  avatarIcon
}) {
  return {
    apiHost: apiHost,
    chatflowid: chatflowid,
    theme: {
      button: {
        backgroundColor: themeFront
      },
      chatWindow: {
        welcomeMessage: "Hi there, How are you feeling?",
        errorMessage: "Error",
        backgroundColor: themeBack,
        fontSize: 16,
        height: 600,
        width: 0,
        botMessage: {
          showAvatar: true,
          color: themeFront,
          backgroundColor: themeBack,
          avatarSrc: avatarIcon
        },
        userMessage: {
          showAvatar: true,
          textColor: themeFront,
          backgroundColor: themeBack
        },
        textInput: {
          placeholder: "How can I help you?",
          color: themeFront,
          sendButtonColor: themeFront,
          maxChars: 2000,
          maxCharsWarningMessage: "You exceeded the character limit."
        },
        footer: {
          backgroundColor: themeFront,
          text: "Powered by",
          company: "Critical Future",
          companyLink: "https://criticalfutureglobal.com/"
        },
        disclaimer: {
          title: "Disclaimer",
          message:
            "By using this chatbot, you agree to criticalfuture Terms & Condition"
        }
      }
    }
  };
}
