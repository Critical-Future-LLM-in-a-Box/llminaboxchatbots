await (async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "713ac6ba-4a32-40a0-9408-89478be4337b";
  const themeFront = "#212121";
  const themeBack = "#e2deea";
  const avatarIcon =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.png";
  const avatarImage =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.gif";
  const avatarVideo =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.mp4";

  if (location.href === "https://fseriesclubnation.com/") {
    const chatbot = document.createElement("flowise-fullchatbot");
    document.querySelector("#header-outer").after(chatbot);

    (await import("../base/web.js")).default.initFull(
      (await import("./config.js")).generateConfig({
        apiHost,
        chatflowid,
        themeFront,
        themeBack,
        avatarIcon
      })
    );

    const utils = await import("../base/utils.js");

    await utils.createNewSection(chatbot, {
      avatarImage,
      avatarVideo,
      themeFront,
      themeBack
    });

    await utils.urlPreview(chatbot);

    await utils.ttsSupport(chatbot);
  }
})();
