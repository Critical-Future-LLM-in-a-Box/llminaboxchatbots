export function waitForElement(
  selector = "",
  parent = document,
  shadowRoot = false
) {
  return new Promise((resolve) => {
    if (shadowRoot) parent = parent.shadowRoot;

    const element = parent.querySelector(selector);

    if (element) resolve(element);

    const observer = new MutationObserver((mutations) => {
      const element = parent.querySelector(selector);

      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  });
}

export async function createNewSection(element, options = {}) {
  if (window.innerWidth < 768 && !options.allowMobile) return;

  const chatWrapper = await waitForElement("div > div", element, true);
  const chatContent = await waitForElement("div:last-child", chatWrapper);

  chatContent.style.cssText = `
    max-height: 100%;
  `;

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
    subtree: true,
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
