(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "ef3dfcbb-0a6d-419c-a42c-31614ff7308e";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";
  const avatarIcon =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/blaster/AIBlaster.png";
  const avatarImage =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/blaster/AIBlaster.gif";
  const avatarVideo =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/blaster/AIBlaster.mp4";

  const llminaboxWrapper = await (
    await import("../base/utils.js")
  ).waitForElement("llminabox");

  const chatbot = document.createElement("flowise-fullchatbot");
  llminaboxWrapper.appendChild(chatbot);

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
})();
