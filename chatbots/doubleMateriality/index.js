(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "bdf34e70-edce-4034-b873-c489b0463991";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";

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
    })
  );

  const utils = await import("../base/utils.js");

  utils.urlPreview();
})();