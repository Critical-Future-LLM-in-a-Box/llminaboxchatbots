import { initChatbot } from "../../dist/llminaboxChat.js";
(async () => {
  initChatbot(
    {
      apiHost: "https://llminabox.criticalfutureglobal.com",
      chatflowId: "59840532-de66-4978-aef5-33cb215c8b8d",
      assistant: {
        name: "digital voice",
        description: "CEO of Tigercomm",
        welcomeMessage: "Hello! How can I help you?",
        avatar: {
          staticUrl:
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
        }
      },
      ui: {
        foregroundColor: "#2D3748",
        backgroundColor: "#E2E8F0",
        backgroundColorBody: "#CBD5E0"
      }
    },
    document.getElementById("llminabox"),
    "full"
  );
})();
