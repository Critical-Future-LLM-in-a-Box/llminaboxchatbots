await (async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "713ac6ba-4a32-40a0-9408-89478be4337b";
  const themeFront = "#212121";
  const themeBack = "#e2deea";
  const avatarImage =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs1.gif?raw=true";
  const avatarVideo =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/fs/Joe%20intro.mp4";

  if (location.href === "https://fseriesclubnation.com/") {
    const fullchatbot = document.createElement("flowise-fullchatbot");
    document.querySelector("header").parentElement.after(fullchatbot);

    (
      await import(
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/base/web.js"
      )
    ).default.initFull(
      (
        await import(
          "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/fseriesclubnation/config.js"
        )
      ).generateConfig({
        apiHost,
        chatflowid,
        themeFront,
        themeBack,
      })
    );

    (
      await import(
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/base/utils.js"
      )
    ).createNewSection(fullchatbot, {
      themeFront,
      themeBack,
      avatarImage,
      avatarVideo,
    });
  }
})();
