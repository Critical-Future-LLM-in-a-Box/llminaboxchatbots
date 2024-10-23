;(async () => {
  const url = location.href
  const themeColor = "#1d0462"
  const chatflowid = "95e01dd4-ff2f-4055-a6f1-3cfc35261831"
  const apiHost = "https://llm.criticalfutureglobal.com"

  const importChatbot = async () =>
    await import(
      "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/chatbots/base/web.js"
    )
  const Chatbot = (await importChatbot()).default

  function createChatbotConfig(heigth = 600, width = 600) {
    return {
      chatflowid: chatflowid,
      apiHost: apiHost,
      theme: {
        button: {
          backgroundColor: themeColor,
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
              "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai.png",
          },
          userMessage: {
            backgroundColor: themeColor + "66",
            showAvatar: true,
            avatarSrc:
              "https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome-thumbnail.png",
          },
          textInput: {
            placeholder: "How can I help you?",
            backgroundColor: themeColor + "11",
            sendButtonColor: themeColor,
            maxChars: 2000,
            maxCharsWarningMessage: "You exceeded the character limit.",
          },
          footer: {
            text: "Powered by",
            company: "Critical Future",
            companyLink: "https://criticalfutureglobal.com/",
          },
        },
      },
    }
  }

  function createSection(element, avatarSize) {
    if (window.innerWidth < 768) return

    const parentElement = element.shadowRoot.querySelector("div")
    parentElement.style.display = "flex"

    const wrapper = document.createElement("div")
    wrapper.style.display = "flex"
    wrapper.style.flexDirection = "column"
    wrapper.style.backgroundColor = "#efefef"
    wrapper.style.minWidth = "40%"
    wrapper.style.gap = "20px"
    wrapper.style.alignItems = "center"
    wrapper.style.background = themeColor + "11"

    const header = document.createElement("div")
    header.style.width = "100%"
    header.style.height = "50px"
    header.style.backgroundColor = themeColor
    header.style.position = "relative"

    const tabBar = document.createElement("div")
    tabBar.style.display = "flex"
    tabBar.style.justifyContent = "center"

    const oldTab = document.createElement("button")
    oldTab.textContent = "Static Avatar"
    oldTab.style.padding = "10px 20px"
    oldTab.style.border = "none"
    oldTab.style.cursor = "pointer"
    oldTab.style.backgroundColor = themeColor
    oldTab.style.color = "white"
    oldTab.style.marginRight = "10px"

    const newTab = document.createElement("button")
    newTab.textContent = "Interactive Avatar"
    newTab.style.padding = "10px 20px"
    newTab.style.border = "none"
    newTab.style.cursor = "pointer"
    newTab.style.backgroundColor = "#ccc"
    newTab.style.color = "black"

    tabBar.appendChild(oldTab)
    tabBar.appendChild(newTab)

    wrapper.appendChild(header)
    wrapper.appendChild(tabBar)

    const oldSection = document.createElement("div")
    oldSection.style.display = "flex"
    oldSection.style.flexDirection = "column"
    oldSection.style.alignItems = "center"
    oldSection.style.gap = "20px"

    const profileContainer = document.createElement("div")
    profileContainer.style.display = "flex"
    profileContainer.style.justifyContent = "center"
    profileContainer.style.alignItems = "center"
    profileContainer.style.width = `${avatarSize}px`
    profileContainer.style.height = `${avatarSize}px`
    profileContainer.style.borderRadius = "50px"
    profileContainer.style.overflow = "hidden"

    const profileImage = document.createElement("img")
    profileImage.style.width = "100%"
    profileImage.style.height = "100%"
    profileImage.style.objectFit = "cover"
    profileImage.alt = "profile-avatar"
    profileImage.src =
      "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/main/Avatars/mai/mai-new.gif"

    profileContainer.appendChild(profileImage)

    const profileVideo = document.createElement("video")
    profileVideo.style.width = "100%"
    profileVideo.style.height = "100%"
    profileVideo.style.objectFit = "cover"
    profileVideo.src =
      "https://github.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/raw/main/Avatars/mai/Mai%20intro%20V0.2%20(sonia%20voice).mp4"

    const button = document.createElement("button")
    button.textContent = "About"
    button.onclick = () => {
      if (profileContainer.contains(profileImage)) {
        profileContainer.removeChild(profileImage)
        profileContainer.appendChild(profileVideo)
        profileVideo.play()
        profileVideo.onended = () => {
          profileContainer.removeChild(profileVideo)
          profileContainer.appendChild(profileImage)
        }
      } else {
        profileContainer.removeChild(profileVideo)
        profileContainer.appendChild(profileImage)
      }
    }
    button.style.display = "block"
    button.style.minWidth = "200px"
    button.style.padding = "10px"
    button.style.marginBottom = "50px"
    button.style.borderRadius = "10px"
    button.style.border = "1px solid #007bff"
    button.style.color = "white"
    button.style.fontWeight = "bold"
    button.style.cursor = "pointer"
    button.style.transition = "background-color 0.5s ease"
    button.style.backgroundColor = themeColor

    oldSection.appendChild(profileContainer)
    oldSection.appendChild(button)

    const newSection = document.createElement("div")
    newSection.style.display = "none"
    newSection.style.flexDirection = "column"

    const iframeContainer = document.createElement("div")
    iframeContainer.style.width = `${avatarSize + 100}px`
    iframeContainer.style.height = `${avatarSize + 100}px`
    iframeContainer.style.borderRadius = "50px"
    iframeContainer.style.overflow = "hidden"

    const iframe = document.createElement("iframe")
    iframe.src =
      "https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIyMTRjOWUzODgzYTA0ZmYzYTM5OWQ0ZjU4YjI2YWUzZCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzIxNGM5ZTM4ODNhMDRmZjNhMzk5ZDRmNThiMjZhZTNkL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6bnVsbCwidXNlcm5hbWUiOiJmZTcxYzk3NzA0NGI0MzI0YTlkNzdiMDExMDNiZmQ0ZiJ9&inIFrame=1"
    iframe.style.border = "0"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.allow = "microphone"
    iframe.allowFullscreen = true

    iframeContainer.appendChild(iframe)
    newSection.appendChild(iframeContainer)

    wrapper.appendChild(oldSection)
    wrapper.appendChild(newSection)

    parentElement.prepend(wrapper)

    oldTab.onclick = () => {
      oldSection.style.display = "flex"
      newSection.style.display = "none"
      oldTab.style.backgroundColor = themeColor
      oldTab.style.color = "white"
      newTab.style.backgroundColor = "#ccc"
      newTab.style.color = "black"
    }

    newTab.onclick = () => {
      oldSection.style.display = "none"
      newSection.style.display = "flex"
      newTab.style.backgroundColor = themeColor
      newTab.style.color = "white"
      oldTab.style.backgroundColor = "#ccc"
      oldTab.style.color = "black"
    }
  }

  if (url === "https://criticalfutureglobal.com/") {
    const fullchatbot = document.createElement("flowise-fullchatbot")
    document.querySelector("#header").after(fullchatbot)

    const fullChatbotConfig = createChatbotConfig(600, "100%")

    Chatbot.initFull(fullChatbotConfig)

    const flowiseFullChatbot = document.querySelector("flowise-fullchatbot")

    setTimeout(() => {
      createSection(flowiseFullChatbot, 300)
    }, 1000)
  }
})()
