///////////////////////////////////////////////////////////////////////////////
export function waitForElement(
  selector = "",
  parent = document,
  shadowRoot = false,
  selectType = "querySelector"
) {
  return new Promise((resolve) => {
    if (shadowRoot) parent = parent.shadowRoot;

    const element = parent[selectType](selector);

    if (element) resolve(element);

    const observer = new MutationObserver(() => {
      const element = parent[selectType](selector);

      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true
    });
  });
}

///////////////////////////////////////////////////////////////////////////////
export async function createNewSection(element, options = {}) {
  if (window.innerWidth < 768) return;

  const chatWrapper = await waitForElement("div > div", element, true);
  const chatContent = await waitForElement("div:last-child", chatWrapper);

  const style = document.createElement("style");
  style.textContent = `
    * {
      scrollbar-width: thin !important;
    }
  `;
  chatWrapper.prepend(style);

  const newSectionParent = document.createElement("div");
  chatWrapper.append(newSectionParent);
  chatWrapper.removeChild(chatContent);
  newSectionParent.append(chatContent);

  chatContent.style.cssText = `
    max-height: 600px;
  `;

  newSectionParent.style.cssText = `
    width: 100%;
    height: 100%;
    min-height: 80vh;
    max-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: no-wrap;
  `;

  const sectionWrapper = document.createElement("div");

  sectionWrapper.style.cssText = `
    width: 50%;
    max-width: 400px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    ${options.interactiveAvatar ? "gap: 100px;" : ""}
  `;

  const SIAvatarContainer = document.createElement("div");
  const SAvatarContainer = document.createElement("div");
  const IAvatarContainer = document.createElement("div");

  SIAvatarContainer.style.cssText = `
    margin-bottom: auto;
    ${options.interactiveAvatar ? "" : "display: flex; justify-content: center; align-items: center; margin-top: auto;"}
    boder: 1px solid #000;
  `;

  SAvatarContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  IAvatarContainer.style.cssText = `
    display: none; /* Initially hidden */
    justify-content: center;
    align-items: center;
    min-width: 300px;
    min-height: 300px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  `;

  SIAvatarContainer.appendChild(SAvatarContainer);

  if (options.interactiveAvatar) {
    SIAvatarContainer.appendChild(IAvatarContainer);

    const tabBar = createTabBar(options);
    sectionWrapper.appendChild(tabBar);

    const iframeAvatar = createIFrameAvatar(options);

    IAvatarContainer.appendChild(iframeAvatar);
  }

  sectionWrapper.appendChild(SIAvatarContainer);

  const avatarContainer = createAvatar(options);
  const button = createInfoButton(avatarContainer, options);

  SAvatarContainer.appendChild(avatarContainer);
  SAvatarContainer.appendChild(button);

  newSectionParent.prepend(sectionWrapper);

  return newSectionParent;

  function createTabBar(options) {
    const tabBar = document.createElement("div");
    tabBar.style.cssText = `
      display: flex;
      justify-content: center;
      width: 100%;
    `;

    const staticTab = document.createElement("button");
    staticTab.textContent = "Static Avatar";
    staticTab.style.cssText = `
      padding: 10px 20px;
      cursor: pointer;
      font-weight: bold;
      border: none;
      outline: none;
      background-color: ${options.themeFront};
      color: ${options.themeBack};
      margin-right: 10px;
    `;

    const interactiveTab = document.createElement("button");
    interactiveTab.textContent = "Interactive Avatar";
    interactiveTab.style.cssText = `
      padding: 10px 20px;
      cursor: pointer;
      font-weight: bold;
      border: none;
      outline: none;
      background-color: #ccc;
      color: black;
    `;

    staticTab.addEventListener("click", () => {
      SAvatarContainer.style.display = "flex";
      IAvatarContainer.style.display = "none";
      staticTab.style.backgroundColor = options.themeFront;
      staticTab.style.color = options.themeBack;
      interactiveTab.style.backgroundColor = "#ccc";
      interactiveTab.style.color = "black";
    });

    interactiveTab.addEventListener("click", () => {
      SAvatarContainer.style.display = "none";
      IAvatarContainer.style.display = "flex";
      interactiveTab.style.backgroundColor = options.themeFront;
      interactiveTab.style.color = options.themeBack;
      staticTab.style.backgroundColor = "#ccc";
      staticTab.style.color = "black";
    });

    tabBar.appendChild(staticTab);
    tabBar.appendChild(interactiveTab);

    return tabBar;
  }

  function createAvatar(options) {
    const avatarContainer = document.createElement("div");
    avatarContainer.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
    `;

    const profileImage = document.createElement("img");
    profileImage.src = options.avatarImage;
    profileImage.alt = "profile-avatar";
    profileImage.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;

    const profileVideo = document.createElement("video");
    profileVideo.src = options.avatarVideo;
    profileVideo.preload = "auto";
    profileVideo.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;

    avatarContainer.profileImage = profileImage;
    avatarContainer.profileVideo = profileVideo;

    avatarContainer.appendChild(profileImage);

    return avatarContainer;
  }

  function createInfoButton(avatarContainer, options) {
    const button = document.createElement("button");
    button.textContent = "More information?";
    button.onclick = () => {
      if (avatarContainer.contains(avatarContainer.profileImage)) {
        avatarContainer.removeChild(avatarContainer.profileImage);
        avatarContainer.appendChild(avatarContainer.profileVideo);
        avatarContainer.profileVideo.play();
        avatarContainer.profileVideo.onended = () => {
          avatarContainer.removeChild(avatarContainer.profileVideo);
          avatarContainer.appendChild(avatarContainer.profileImage);
        };
      } else {
        avatarContainer.removeChild(avatarContainer.profileVideo);
        avatarContainer.appendChild(avatarContainer.profileImage);
      }
    };

    button.style.cssText = `
      display: block;
      min-width: 200px;
      padding: 10px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      color: ${options.themeBack};
      background-color: ${options.themeFront};
    `;

    return button;
  }

  function createIFrameAvatar(options) {
    const iframe = document.createElement("iframe");
    iframe.src = options.interactiveAvatarUrl;
    iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
    `;
    return iframe;
  }
}

///////////////////////////////////////////////////////////////////////////////
export async function urlPreview(parent) {
  let messageContainerSelector;

  messageContainerSelector =
    window.innerWidth < 768
      ? "div > div > div:last-child > div"
      : "div > div > div:last-child > div:last-child > div:first-child";

  const messageContainer = await waitForElement(
    messageContainerSelector,
    parent,
    true
  );

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        replaceUrlsWithPreviews();
      }
    }
  });

  observer.observe(messageContainer, {
    childList: true,
    subtree: true
  });

  const sendButtonSelector =
    window.innerWidth < 768
      ? "div > div > div:last-child > div:last-child button:last-of-type"
      : "div > div > div:last-child > div:last-child > div:nth-child(2) button:last-of-type";
  const sendButton = await waitForElement(sendButtonSelector, parent, true);

  async function replaceUrlsWithPreviews() {
    if (sendButton.disabled) return;

    Array.from(messageContainer.querySelectorAll("div:first-child"))
      .filter((_, i) => i % 3 === 0)
      .forEach((message) => {
        const newMessageContent = message.querySelector("div > span");

        const anchorTags = Array.from(newMessageContent.querySelectorAll("a"));

        for (const anchor of anchorTags) {
          const url = anchor.href;
          if (isYoutubeLink(url)) {
            const videoId = getYoutubeVideoId(url);
            if (videoId) {
              const iframeHTML = `
                  <iframe width="300" height="200" src="https://www.youtube.com/embed/${videoId}"></iframe>
                `;
              const iframeWrapper = document.createElement("div");
              iframeWrapper.innerHTML = iframeHTML;
              anchor.replaceWith(
                iframeWrapper.firstElementChild || iframeWrapper
              );
            }
          }
        }
      });
  }

  function isYoutubeLink(url) {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  }

  function getYoutubeVideoId(url) {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : null;
  }
}

///////////////////////////////////////////////////////////////////////////////
export async function ttsSupport(parent, voiceName) {
  // Initialize reset button
  await initializeResetButton(parent);

  // Process existing messages
  await processMessages(parent, voiceName);

  // Observe mutations to process new messages
  await observeNewMessages(parent);
}

// Function to initialize reset button
async function initializeResetButton(parent) {
  const resetButtonSelector = "div > div > div button";
  const resetButton = await waitForElement(resetButtonSelector, parent, true);
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      localStorage.removeItem("tts");
    });
  }
}

// Function to process messages and add TTS buttons
async function processMessages(parent, voiceName) {
  const messages = await getMessages(parent);
  const messageOptions = await getMessageOptions(parent);

  messageOptions.forEach((messageOption, index) => {
    if (!messageOption.querySelector(".tts-button")) {
      addTTSButton(messageOption, messages[index], voiceName);
    }
  });
}

// Function to observe new messages
async function observeNewMessages(parent) {
  const messageContainerSelector =
    window.innerWidth < 768
      ? "div > div > div:last-child > div"
      : "div > div > div:last-child > div:last-child > div:first-child";
  const messageContainer = await waitForElement(
    messageContainerSelector,
    parent,
    true
  );

  if (messageContainer) {
    const observer = new MutationObserver(async (mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          await processMessages(parent);
        }
      }
    });

    observer.observe(messageContainer, {
      childList: true,
      subtree: true
    });
  }
}

// Function to get messages
async function getMessages(parent) {
  const messagesSelector =
    window.innerWidth < 768
      ? "div > div > div:last-child > div:first-child > div:nth-child(2n + 3) span"
      : "div > div > div:last-child > div:last-child > div:first-child > div:nth-child(2n + 3) span";
  const messageElements = await waitForElement(
    messagesSelector,
    parent,
    true,
    "querySelectorAll"
  );
  return Array.from(messageElements).map((el) => el.textContent);
}

// Function to get message options
async function getMessageOptions(parent) {
  const messageOptionsSelector =
    window.innerWidth < 768
      ? "div > div > div:last-child > div:first-child > div:nth-child(2n + 3) > div:last-child"
      : "div > div > div:last-child > div:last-child > div:first-child > div:nth-child(2n + 3) > div:last-child";
  const messageOptionsElements = await waitForElement(
    messageOptionsSelector,
    parent,
    true,
    "querySelectorAll"
  );
  return Array.from(messageOptionsElements);
}

// Function to add TTS button
function addTTSButton(messageOption, messageText, voiceName) {
  const startVoice = createIcon("volumeUp");
  const spinner = createIcon("spinner");
  const endVoice = createIcon("volumeOff");

  const iconStyle = `
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 150px;
    transform: translateY(-60%);
  `;
  startVoice.style.cssText = iconStyle;
  spinner.style.cssText = iconStyle;
  endVoice.style.cssText = iconStyle;

  messageOption.style.position = "relative";
  messageOption.appendChild(startVoice);

  startVoice.addEventListener("click", () => {
    handleTTSButtonClick(startVoice, spinner, endVoice, messageText, voiceName);
  });
}

// Function to handle TTS button click
async function handleTTSButtonClick(
  startVoice,
  spinner,
  endVoice,
  messageText,
  voiceName
) {
  startVoice.replaceWith(spinner);

  try {
    const ttsKey = hashString(messageText);
    const localtts = JSON.parse(localStorage.getItem("tts") || "{}");
    const cachedTTS = localtts[ttsKey];

    let audioBlob;
    if (cachedTTS && cachedTTS.text === messageText) {
      // Use cached audio
      audioBlob = base64ToBlob(cachedTTS.audioBlob, "audio/mpeg");
    } else {
      // Fetch new TTS data
      audioBlob = await fetchTTSData(messageText, voiceName);

      // Cache the audio data
      const base64data = await blobToBase64(audioBlob);
      localtts[ttsKey] = { text: messageText, audioBlob: base64data };
      localStorage.setItem("tts", JSON.stringify(localtts));
    }

    const mp3Url = URL.createObjectURL(audioBlob);
    const tts = new Audio(mp3Url);
    playAudio(tts, spinner, endVoice, startVoice);
  } catch (error) {
    console.error("Error processing TTS:", error);
    spinner.replaceWith(startVoice);
  }
}

// Function to fetch TTS data
async function fetchTTSData(messageText, voice = "en-GB-SoniaNeural") {
  const response = await fetch("https://tts.criticalfutureglobal.com/get_tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "G7x9mVt2Q5bK8Jp4S1Zc"
    },
    body: JSON.stringify({
      text: messageText,
      voice: voice,
      id: "mai"
    })
  });
  const result = await response.json();
  const audioResponse = await fetch(result.file_url);
  return await audioResponse.blob();
}

// Function to play and control audio
function playAudio(tts, spinner, endVoice, startVoice) {
  tts.play();
  spinner.replaceWith(endVoice);

  const endVoiceClickHandler = () => {
    tts.pause();
    endVoice.replaceWith(startVoice);
  };

  endVoice.addEventListener("click", endVoiceClickHandler);

  tts.onended = () => {
    endVoice.replaceWith(startVoice);
    endVoice.removeEventListener("click", endVoiceClickHandler);
  };
}

// Helper function to create icons
function createIcon(iconType, color = "navy") {
  const icon = document.createElement("div");
  icon.style.cssText = `
    display: inline-block;
    width: 20px;
    height: 20px;
    color: ${color};
  `;

  icon.classList.add("tts-button");

  const icons = {
    volumeUp: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${color}" stroke-width="2" viewBox="0 0 24 24" width="20" height="20">
        <path d="M11 5l-6 6H3v2h2l6 6V5z" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M15 8.5a5 5 0 010 7m3-10a9 9 0 010 14" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
    volumeOff: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${color}" stroke-width="2" viewBox="0 0 24 24" width="20" height="20">
        <path d="M11 5l-6 6H3v2h2l6 6V5z" stroke-linecap="round" stroke-linejoin="round"></path>
        <line x1="18" y1="6" x2="6" y2="18" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="6" y1="6" x2="18" y2="18" stroke-linecap="round" stroke-linejoin="round"></line>
      </svg>
    `,
    spinner: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${color}" stroke-width="2" viewBox="0 0 24 24" width="20" height="20">
        <circle cx="12" cy="12" r="10" opacity="0.3"></circle>
        <path d="M4 12a8 8 0 018-8" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `
  };

  icon.innerHTML = icons[iconType] || "";

  return icon;
}

// Helper functions to convert between Blob and base64
function base64ToBlob(base64, contentType = "", sliceSize = 512) {
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result.split(",")[1];
      resolve(base64data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Hash function
function hashString(str) {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash.toString();
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash.toString();
}
///////////////////////////////////////////////////////////////////////////////
