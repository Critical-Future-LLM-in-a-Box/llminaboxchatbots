(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "ef3dfcbb-0a6d-419c-a42c-31614ff7308e";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";

  const fullchatbot = document.createElement("flowise-fullchatbot");
  document.querySelector("llminabox").appendChild(fullchatbot);

  (await import("../base/web.js")).default.initFull(
    (await import("./config.js")).generateConfig({
      apiHost,
      chatflowid,
      themeFront,
      themeBack,
    })
  );
})();
