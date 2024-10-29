(async () => {
  const apiHost = "https://llm.criticalfutureglobal.com";
  const chatflowid = "95e01dd4-ff2f-4055-a6f1-3cfc35261831";
  const themeFront = "#1d0462";
  const themeBack = "#e2deea";
  const interactiveAvatar =
    "https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIyMTRjOWUzODgzYTA0ZmYzYTM5OWQ0ZjU4YjI2YWUzZCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzIxNGM5ZTM4ODNhMDRmZjNhMzk5ZDRmNThiMjZhZTNkL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6bnVsbCwidXNlcm5hbWUiOiJmZTcxYzk3NzA0NGI0MzI0YTlkNzdiMDExMDNiZmQ0ZiJ9&inIFrame=1";
  const avatarImage =
    "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai-new.gif";
  const avatarVideo =
    "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/mai/Mai%20intro%20V0.2%20(sonia%20voice).mp4";

  if (location.href === "https://criticalfutureglobal.com/") {
    const fullchatbot = document.createElement("flowise-fullchatbot");
    document.querySelector("#header").after(fullchatbot);
    (
      await import(
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/base/web.js"
      )
    ).default.initFull(
      (
        await import(
          "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/criticalfuture/config.js"
        )
      ).generateConfig({
        apiHost,
        chatflowid,
        themeFront,
        themeBack,
      })
    );

    (
      await import(
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/base/utils.js"
      )
    ).createNewSection(fullchatbot, {
      themeFront,
      themeBack,
      avatarImage,
      avatarVideo,
      interactiveAvatar,
    });
  }
})();
