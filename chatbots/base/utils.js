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

export async function createNewSection(element, options = {}) {
  if (window.innerWidth < 768 && !options.allowMobile) return;

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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const avatarContainer = createAvatar(options);
  const button = createInfoButton(avatarContainer, options);

  sectionWrapper.appendChild(avatarContainer);
  sectionWrapper.appendChild(button);

  newSectionParent.prepend(sectionWrapper);

  return newSectionParent;

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
    color: white;
    font-weight: bold;
    cursor: pointer;
    color: ${options.themeBack};
    background-color: ${options.themeFront};
  `;

    return button;
  }
}

export function urlPreview() {
  const messageContainer = document
    .querySelector("flowise-fullchatbot")
    .shadowRoot.querySelector(
      "div > div > div:last-child > div:last-child > div"
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

  const sendButton = document
    .querySelector("flowise-fullchatbot")
    .shadowRoot.querySelector(
      "div > div > div:last-child > div:last-child > div:nth-child(2) button:last-of-type"
    );

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
                  <iframe width="400" height="225" src="https://www.youtube.com/embed/${videoId}"></iframe>
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

export async function ttsSupport(parent) {
  const resetButton = await waitForElement(
    "div > div > div button",
    parent,
    true
  );

  resetButton.addEventListener("click", () => {
    localStorage.removeItem("tts");
  });

  // Initial setup to process existing messages
  await processMessages(parent);

  // Create a MutationObserver to handle dynamically added messages
  const observer = new MutationObserver(async (mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        await processMessages(parent);
      }
    }
  });

  const messageContainer = await waitForElement(
    "div > div > div:last-child > div:last-child > div:first-child",
    parent,
    true
  );

  console.log(messageContainer);

  // Start observing the parent container
  observer.observe(messageContainer, {
    childList: true,
    subtree: true
  });

  // Function to process messages and add TTS buttons
  async function processMessages(parent) {
    // Get span messages
    const messages = Array.from(
      await waitForElement(
        "div > div > div:last-child > div:last-child > div:first-child > div:nth-child(2n + 3) span",
        parent,
        true,
        "querySelectorAll"
      )
    ).map((message) => message.textContent);

    // Get message options div
    const messageOptions = Array.from(
      await waitForElement(
        "div > div > div:last-child > div:last-child > div:first-child > div:nth-child(2n + 3) > div:last-child",
        parent,
        true,
        "querySelectorAll"
      )
    );

    // Add TTS buttons to message options
    messageOptions.forEach((messageOption, index) => {
      if (!messageOption.querySelector(".tts-button")) {
        addTTSButton(messageOption, messages[index], index);
      }
    });
  }

  // Function to add TTS button with click functionality
  function addTTSButton(messageOption, messageText, index) {
    const startVoice = createIcon("volumeUp");
    const spinner = createIcon("spinner");
    const endVoice = createIcon("volumeOff");

    startVoice.style.cssText =
      spinner.style.cssText =
      endVoice.style.cssText =
        `
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 28%;
      transform: translateY(-60%);
    `;

    startVoice.classList.add("tts-button");
    messageOption.style.position = "relative";
    messageOption.appendChild(startVoice);

    startVoice.addEventListener("click", async () => {
      startVoice.replaceWith(spinner);

      try {
        const localtts = JSON.parse(localStorage.getItem("tts") || "{}");
        const cachedTTS = localtts[index];

        if (cachedTTS && cachedTTS.text === messageText) {
          const binary = atob(cachedTTS.audioBlob);
          const array = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            array[i] = binary.charCodeAt(i);
          }
          const audioBlob = new Blob([array], { type: "audio/mpeg" });

          const mp3Url = URL.createObjectURL(audioBlob);
          const tts = new Audio(mp3Url);
          playAudio(tts, spinner, endVoice, startVoice);
        } else {
          const response = await fetch(
            "https://tts.criticalfutureglobal.com/get_tts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "G7x9mVt2Q5bK8Jp4S1Zc"
              },
              body: JSON.stringify({
                text: messageText,
                voice: "en-GB-SoniaNeural",
                id: "mai"
              })
            }
          );

          const result = await response.json();
          const audioResponse = await fetch(result.file_url);
          const audioBlob = await audioResponse.blob();

          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result.split(",")[1];
            localtts[index] = { text: messageText, audioBlob: base64data };
            localStorage.setItem("tts", JSON.stringify(localtts));
          };
          reader.readAsDataURL(audioBlob);

          const mp3Url = URL.createObjectURL(audioBlob);
          const tts = new Audio(mp3Url);
          playAudio(tts, spinner, endVoice, startVoice);
        }
      } catch (error) {
        console.error("Error processing TTS:", error);
        spinner.replaceWith(startVoice);
      }
    });

    // Function to play and control audio
    function playAudio(tts, spinner, endVoice, startVoice) {
      tts.play();
      spinner.replaceWith(endVoice);

      endVoice.addEventListener("click", () => {
        tts.pause();
        endVoice.replaceWith(startVoice);
      });

      tts.onended = () => endVoice.replaceWith(startVoice);
    }
  }

  // Function to create icons
  function createIcon(iconType) {
    const icon = document.createElement("div");
    icon.style.cssText = `
      display: inline-block;
      width: 20px;
      height: 20px;
      color: navy;
    `;

    const icons = {
      volumeUp: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="20" height="20">
          <path d="M11 5l-6 6H3v2h2l6 6V5z" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M15 8.5a5 5 0 010 7m3-10a9 9 0 010 14" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      `,
      volumeOff: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="20" height="20">
          <path d="M11 5l-6 6H3v2h2l6 6V5z" stroke-linecap="round" stroke-linejoin="round"></path>
          <line x1="18" y1="6" x2="6" y2="18" stroke-linecap="round" stroke-linejoin="round"></line>
          <line x1="6" y1="6" x2="18" y2="18" stroke-linecap="round" stroke-linejoin="round"></line>
        </svg>
      `,
      spinner: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="20" height="20">
          <circle cx="12" cy="12" r="10" opacity="0.3"></circle>
          <path d="M4 12a8 8 0 018-8" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      `
    };

    icon.innerHTML = icons[iconType] || "";
    return icon;
  }
}
