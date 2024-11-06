await (async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "713ac6ba-4a32-40a0-9408-89478be4337b";
  const themeFront = "#212121";
  const themeBack = "#e2deea";
  const avatarIcon =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs.png?raw=true";
  const avatarImage =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs1.gif?raw=true";
  const avatarVideo =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/fs/Joe%20intro.mp4";

  if (location.href === "https://fseriesclubnation.com/") {
    const chatbot = document.createElement("flowise-fullchatbot");
    document.querySelector("header").parentElement.after(chatbot);

    (await import("../base/web.js")).default.initFull(
      (await import("./config.js")).generateConfig({
        apiHost,
        chatflowid,
        themeFront,
        themeBack,
        avatarIcon,
      })
    );

    const utils = await import("../base/utils.js");

    const newSection = await utils.createNewSection(chatbot, {
      avatarImage,
      avatarVideo,
      themeFront,
      themeBack,
    });

    newSection.scrollIntoView({ behavior: "smooth" });

    utils.urlPreview();
  }
})();
