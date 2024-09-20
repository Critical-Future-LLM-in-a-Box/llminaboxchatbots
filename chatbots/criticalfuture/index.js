(async () => {
  const url = location.href;
  const themeColor = "#1d0462";
  const chatflowid = "95e01dd4-ff2f-4055-a6f1-3cfc35261831";
  const apiHost = "https://llm.criticalfutureglobal.com";

  const ChatbotModule =
    "https://cdn.jsdelivr.net/npm/flowise-embed@1.3.14/dist/web.js";

  const importChatbot = () => import(ChatbotModule);

  function createChatbotConfig(heigth = 600, width = 600) {
    return {
      chatflowid: chatflowid,
      apiHost: apiHost,
      theme: {
        button: {
          backgroundColor: themeColor
        },
        chatWindow: {
          showTitle: true,
          welcomeMessage: "Hi there, How can I help you?",
          errorMessage: "Error",
          backgroundColor: themeColor + "11",
          fontSize: 16,
          height: heigth,
          width: width,
          botMessage: {
            backgroundColor: themeColor + "22",
            showAvatar: true,
            avatarSrc:
              "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai.png"
          },
          userMessage: {
            backgroundColor: themeColor + "66",
            showAvatar: true,
            avatarSrc:
              "https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png"
          },
          textInput: {
            placeholder: "How can I help you?",
            backgroundColor: themeColor + "11",
            sendButtonColor: themeColor,
            maxChars: 2000,
            maxCharsWarningMessage: "You exceeded the character limit."
          },
          footer: {
            text: "Powered by",
            company: "Critical Future",
            companyLink: "https://criticalfutureglobal.com/"
          }
        }
      }
    };
  }

  function createSectionWithProfile(element, avatarSize) {
    const parentElement = element.shadowRoot.querySelector("div");

    parentElement.style.display = "flex";
    parentElement.style.backgroundColor = "#efefef";

    const newSection = document.createElement("div");
    newSection.style.minWidth = "40%";
    newSection.style.display = "flex";
    newSection.style.flexDirection = "column";
    newSection.style.alignItems = "center";
    newSection.style.justifyContent = "space-between";
    newSection.style.background = themeColor + "11";

    const header = document.createElement("div");
    header.style.width = "100%";
    header.style.height = "50px";
    header.style.backgroundColor = themeColor;
    header.style.position = "relative";
    const afterElement = document.createElement("div");
    afterElement.style.position = "absolute";
    afterElement.style.width = "10px";
    afterElement.style.height = "100%";
    afterElement.style.backgroundColor = "#212121";
    afterElement.style.right = "-10px";
    header.appendChild(afterElement);

    const profileContainer = document.createElement("div");
    profileContainer.style.display = "flex";
    profileContainer.style.justifyContent = "center";
    profileContainer.style.alignItems = "center";
    profileContainer.style.width = `${avatarSize}px`;
    profileContainer.style.height = `${avatarSize}px`;
    profileContainer.style.borderRadius = "50%";
    profileContainer.style.overflow = "hidden";

    const profileImage = document.createElement("img");
    profileImage.style.width = "100%";
    profileImage.style.height = "100%";
    profileImage.style.objectFit = "cover";
    profileImage.alt = "profile-avatar";
    profileImage.src =
      "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai-new.gif";

    profileContainer.appendChild(profileImage);

    const profileVideo = document.createElement("video");
    profileVideo.style.width = "100%";
    profileVideo.style.height = "100%";
    profileVideo.style.objectFit = "cover";
    profileVideo.src =
      "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/mai/Mai%20intro%20V0.2%20(sonia%20voice).mp4";

    const buttonGroup = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "About";
    button.onclick = () => {
      if (profileContainer.contains(profileImage)) {
        profileContainer.removeChild(profileImage);
        profileContainer.appendChild(profileVideo);
        profileVideo.play();
        profileVideo.onended = () => {
          profileContainer.removeChild(profileVideo);
          profileContainer.appendChild(profileImage);
        };
      } else {
        profileContainer.removeChild(profileVideo);
        profileContainer.appendChild(profileImage);
      }
    };
    button.style.display = "block";
    button.style.minWidth = "200px";
    button.style.padding = "10px";
    button.style.marginBottom = "50px";
    button.style.borderRadius = "10px";
    button.style.border = "1px solid #007bff";
    button.style.color = "white";
    button.style.fontWeight = "bold";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.5s ease";
    button.style.backgroundColor = themeColor;
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#0056b3";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = themeColor;
    });
    buttonGroup.appendChild(button);

    newSection.appendChild(header);
    newSection.appendChild(profileContainer);
    newSection.appendChild(buttonGroup);

    parentElement.prepend(newSection);

    if (window.innerWidth < 768) {
      parentElement.style.display = "block";
      newSection.style.display = "none";
    }
  }

  function waitForElement(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  function addStyle(element, css) {
    const style = document.createElement("style");
    style.textContent = css;
    element.prepend(style);
  }

  const { default: Chatbot } = await importChatbot();

  if (url === "https://criticalfutureglobal.com/") {
    const fullchatbot = document.createElement("flowise-fullchatbot");
    document.querySelector("#header").after(fullchatbot);

    const fullChatbotConfig = createChatbotConfig(600, "100%");

    Chatbot.initFull(fullChatbotConfig);

    const flowiseFullChatbot = document.querySelector("flowise-fullchatbot");

    setTimeout(() => {
      createSectionWithProfile(flowiseFullChatbot, 400);
    }, 1000);
  } else {
    const standardChatbotConfig = createChatbotConfig(600, 600);

    Chatbot.init(standardChatbotConfig);

    waitForElement("flowise-chatbot").then((element) => {
      createSectionWithProfile(element, 200);
      addStyle(
        element.shadowRoot,
        `
      button > img.rounded-full {
        width: 100% !important;
        height: 100% !important;
      }
    `
      );
    });
  }
})();
