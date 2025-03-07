import { initChatbot } from "../../dist/llminaboxChat.js";
(async () => {
  initChatbot(
    {
      apiHost: "https://llminabox.criticalfutureglobal.com",
      chatflowId: "f0269cb6-fe4d-4f4e-b1dc-d4da241b97e2",
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
        backgroundColorBody: "#CBD5E0",
        width: "100%",
        height: "600px"
      }
    },
    document.getElementById("llminabox"),
    "full"
  );
})();
