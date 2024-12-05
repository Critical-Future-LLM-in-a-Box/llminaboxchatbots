(async () => {
  const apiHost = "https://llminabox.criticalfutureglobal.com";
  const chatflowid = "be69f112-ee19-41e0-8550-555b35b4d113";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";

  const llminaboxWrapper = await (
    await import("../base/utils.js")
  ).waitForElement("llminabox");

  const chatbot = document.createElement("flowise-fullchatbot");
  llminaboxWrapper.appendChild(chatbot);

  (await import("../base/web-new.js")).default.initFull(
    (await import("./config.js")).generateConfig({
      apiHost,
      chatflowid,
      themeFront,
      themeBack
    })
  );
})();
