(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "95e01dd4-ff2f-4055-a6f1-3cfc35261831";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";
  const avatarIcon =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/mai/mai.png";
  const avatarImage =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/mai/mai.gif";
  const avatarVideo =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/mai/mai.mp4";

  if (location.href === "https://criticalfutureglobal.com/") {
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
  }
})();
