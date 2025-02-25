(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "ef3a42f4-2a7f-46a9-b1ed-d7ed22b16575";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";
  const avatarIcon =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/grace/grace.png";
  const avatarImage =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/grace/grace.png";
  const avatarVideo =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/grace/grace.mp4";

  const llminaboxWrapper = await (
    await import("../base/utils.js")
  ).waitForElement("llminabox");

  if (llminaboxWrapper) {
    llminaboxWrapper.style.cssText = `
      display: block;
      max-width: 100%;
      max-height: 100%;
    `;
  }

  const chatbot = document.createElement("flowise-fullchatbot");
  chatbot.style.cssText = `
      display: block;
      max-width: 100%;
      max-height: 100%;
    `;
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
