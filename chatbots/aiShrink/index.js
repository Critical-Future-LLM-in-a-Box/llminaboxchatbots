(async () => {
  const apiHost = "https://llminabox.criticalfutureglobal.com";
  const chatflowid = "59abed11-4357-4f20-bdd4-9169510aeeef";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";

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
      avatarIcon
    })
  );

  const utils = await import("../base/utils.js");

  const newSection = await utils.createNewSection(chatbot, {
    avatarImage,
    avatarVideo,
    themeFront,
    themeBack
  });

  newSection.scrollIntoView({ behavior: "smooth" });

  utils.urlPreview();
})();
