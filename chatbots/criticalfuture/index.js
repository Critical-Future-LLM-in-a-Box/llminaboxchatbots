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

  if (location.href === "https://criticalfutureglobal.com/") {
    const llminaboxWrapper = await (
      await import("../base/utils.js")
    ).waitForElement("llminabox");

    console.log(llminaboxWrapper);

    const chatbot = document.createElement("flowise-fullchatbot");
    llminaboxWrapper.appendChild(chatbot);

    llminaboxWrapper.computedStyleMap.cssText = `
      max-width: 80vh;
    `;

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
