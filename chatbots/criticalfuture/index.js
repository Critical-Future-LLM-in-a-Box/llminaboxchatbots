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
  const interactiveAvatarUrl =
    "https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIyMTRjOWUzODgzYTA0ZmYzYTM5OWQ0ZjU4%0D%0AYjI2YWUzZCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzIxNGM5ZTM4ODNhMDRmZjNhMzk5ZDRmNThiMjZhZTNkL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjIw%0D%0AOWJlNWY5MzQ5NDQ2ZTFhZmIzNzAzZTdhMTI5MWZkIiwidXNlcm5hbWUiOiJmZTcxYzk3NzA0NGI0%0D%0AMzI0YTlkNzdiMDExMDNiZmQ0ZiJ9&inIFrame=1";

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
        avatarIcon
      })
    );

    const utils = await import("../base/utils.js");

    await utils.createNewSection(chatbot, {
      avatarImage,
      avatarVideo,
      themeFront,
      themeBack,
      interactiveAvatarUrl,
      interactiveAvatar: true
    });

    await utils.urlPreview(chatbot);

    await utils.ttsSupport(chatbot, "en-GB-SoniaNeural");
  }
})();
