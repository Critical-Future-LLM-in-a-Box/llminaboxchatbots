import { initChatbot } from "../../dist/llminaboxChat.js";
(async () => {
  initChatbot(
    {
      apiHost: "https://llminabox.criticalfutureglobal.com",
      chatflowId: "ab32d76c-75f2-49c7-8fb8-91c710dfca92",
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
