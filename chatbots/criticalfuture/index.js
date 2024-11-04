(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "95e01dd4-ff2f-4055-a6f1-3cfc35261831";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";
  const avatarIcon =
    "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai.png";
  const avatarImage =
    "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai-new.gif";
  const avatarVideo =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/mai/Mai%20intro%20V0.2%20(sonia%20voice).mp4";

  if (location.href !== "https://criticalfutureglobal.com/") {
    const fullchatbot = document.createElement("flowise-fullchatbot");
    document.querySelector("body").after(fullchatbot);
    (await import("../base/web.js")).default.initFull(
      (await import("./config.js")).generateConfig({
        apiHost,
        chatflowid,
        themeFront,
        themeBack,
        avatarIcon,
      })
    );

    (await import("../base/utils.js")).createNewSection(fullchatbot, {
      avatarImage,
      avatarVideo,
      themeFront,
      themeBack,
    });

    (await import("../base/utils.js")).urlPreview();

    window.scrollTo(0, 0);
  }
})();
