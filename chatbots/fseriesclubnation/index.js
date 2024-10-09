(async () => {
  const themeColor = "#212121";
  const chatflowid = "713ac6ba-4a32-40a0-9408-89478be4337b";
  const apiHost = "https://llm.criticalfutureglobal.com";

  const ChatbotModule =
    "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/base/web.js";

  const importChatbot = () => import(ChatbotModule);

  function createChatbotConfig(heigth = 500, width = 500) {
    return {
      chatflowid: chatflowid,
      apiHost: apiHost,
      theme: {
        button: {
          backgroundColor: themeColor,
          bottom: window.innerWidth < 768 ? 20 : window.innerHeight - 100,
          right: 20,
          size: 80,
          customIconSrc:
            "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs2.gif?raw=true"
        },
        chatWindow: {
          showTitle: true,
          welcomeMessage: "Hi there, How can I help you?",
          errorMessage: "Sorry, There was an error processing your request.",
          backgroundColor: themeColor + "11",
          fontSize: 16,
          height: heigth,
          width: width,
          botMessage: {
            backgroundColor: themeColor + "22",
            showAvatar: true,
            avatarSrc:
              "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs.png?raw=true"
          },
          userMessage: {
            backgroundColor: themeColor + "66",
            showAvatar: true,
            avatarSrc:
              "https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png"
          },
          textInput: {
            placeholder: "How can I help you?",
            sendButtonColor: themeColor,
            backgroundColor: themeColor + "11",
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
      "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/blob/main/Avatars/fs/fs1.gif?raw=true";

    profileContainer.appendChild(profileImage);

    const profileVideo = document.createElement("video");
    profileVideo.style.width = "100%";
    profileVideo.style.height = "100%";
    profileVideo.style.objectFit = "cover";
    profileVideo.src =
      "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/fs/Joe%20intro.mp4";

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

  const outerContainer = document.querySelector("llminabox");

  if (outerContainer) {
    const fullChatbotConfig = createChatbotConfig(600, "100%");
    const internalContainer = document.createElement("flowise-fullchatbot");
    outerContainer.appendChild(internalContainer);

    Chatbot.initFull(fullChatbotConfig);

    setTimeout(() => {
      createSectionWithProfile(internalContainer, 400);
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
      addStyle(
        element.shadowRoot,
        `
        * {
          scrollbar-width: thin !important;
        }
      `
      );
    });
  }
})();
