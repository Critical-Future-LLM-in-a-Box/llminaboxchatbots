import { initChatbot } from "../../dist/llminaboxChat.js";
(async () => {
  // Create the container after the header with the correct new name
  const header = document.querySelector("#header-outer");
  const container = document.createElement("div");
  container.id = "llminabox-fseries";
  header && header.after(container);

  initChatbot(
    {
      apiHost: "https://llminabox.criticalfutureglobal.com",
      chatflowId: "27b4cb43-e79c-4508-a512-4c88fe0c5991",
      chatDataId: 12345,
      assistant: {
        name: "JOE",
        description: "Fseries Assistant",
        welcomeMessage: "Hello! How can I help you?",
        avatar: {
          staticUrl:
            "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.png",
          liveUrl:
            "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.gif",
          videoUrl:
            "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.mp4"
        }
      },
      ui: {
        sidebar: true,
        width: "100%",
        height: "600px",
        foregroundColor: "#212121",
        backgroundColor: "#e2deea",
        bodyBackgroundColor: "#e2deea"
      }
    },
    document.getElementById("llminabox-fseries"),
    "full"
  );
})();
