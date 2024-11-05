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
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 60px;
  `;

  const avatarContainer = createAvatarContainer(options);
  const tabBar = createTabBar(avatarContainer, options);
  const button = createToggleButton(avatarContainer, options);

  if (options.interactiveAvatar) sectionWrapper.appendChild(tabBar);

  sectionWrapper.appendChild(avatarContainer);
  sectionWrapper.appendChild(button);

  newSectionParent.prepend(sectionWrapper);

  return newSectionParent;
}

function createAvatarContainer(options) {
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

function createToggleButton(avatarContainer, options) {
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

function createTabBar(avatarContainer, options) {
  const tabBar = document.createElement("div");
  tabBar.style.cssText = `
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;
  `;

  const oldTab = document.createElement("button");
  oldTab.textContent = "Static Avatar";
  oldTab.style.cssText = `
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: ${options.themeFront};
    color: white;
  `;

  const newTab = document.createElement("button");
  newTab.textContent = "Interactive Avatar";
  newTab.style.cssText = `
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: #ccc;
    color: black;
  `;

  // Create the iframe for the interactive section
  const interactiveIframe = document.createElement("iframe");
  interactiveIframe.src = options.interactiveAvatar;
  interactiveIframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
  `;

  tabBar.appendChild(oldTab);
  tabBar.appendChild(newTab);

  oldTab.onclick = () => {
    // Show the static avatar section
    if (!avatarContainer.contains(avatarContainer.profileImage)) {
      avatarContainer.appendChild(avatarContainer.profileImage);
    }

    if (avatarContainer.contains(interactiveIframe)) {
      avatarContainer.removeChild(interactiveIframe);
    }

    oldTab.style.backgroundColor = options.themeFront;
    oldTab.style.color = "white";
    newTab.style.backgroundColor = "#ccc";
    newTab.style.color = "black";

    avatarContainer.style.borderRadius = "50%";
  };

  newTab.onclick = () => {
    // Show the iframe for interactive avatar
    if (!avatarContainer.contains(interactiveIframe)) {
      avatarContainer.appendChild(interactiveIframe);
    }

    if (avatarContainer.contains(avatarContainer.profileImage)) {
      avatarContainer.removeChild(avatarContainer.profileImage);
    }

    if (avatarContainer.contains(avatarContainer.profileVideo)) {
      avatarContainer.removeChild(avatarContainer.profileVideo);
    }

    newTab.style.backgroundColor = options.themeFront;
    newTab.style.color = "white";
    oldTab.style.backgroundColor = "#ccc";
    oldTab.style.color = "black";

    avatarContainer.style.borderRadius = "10px";
    avatarContainer.style.width = "300px";
    avatarContainer.style.height = "300px";
  };

  return tabBar;
}

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

export function urlPreview() {
  let isRunning = false;

  async function fetchMetadata(url) {
    const corsProxy = "https://corsproxy.io/?";

    const response = await fetch(corsProxy + encodeURIComponent(url));

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const getMetaTag = (name) =>
      doc.querySelector(`meta[name="${name}"]`)?.content ||
      doc.querySelector(`meta[property="${name}"]`)?.content ||
      "";

    const metadata = {
      title: doc.querySelector("title")?.innerText || getMetaTag("og:title"),
      description: getMetaTag("description") || getMetaTag("og:description"),
      image: getMetaTag("og:image"),
    };

    return metadata;
  }

  async function replaceUrlsWithPreviews(observer) {
    if (isRunning) return;
    isRunning = true;

    observer.disconnect();

    const messageContainer = document
      .querySelector("flowise-fullchatbot")
      .shadowRoot.querySelector(
        "div > div > div:last-child > div:last-child > div"
      );

    const messages = Array.from(
      messageContainer.querySelectorAll("div:first-child")
    )
      .filter((_, i) => i % 3 === 0)
      .slice(-1);

    for (const message of messages) {
      const span = message.querySelector("div > span");
      if (span) {
        const anchorTags = Array.from(span.querySelectorAll("a"));

        for (const anchor of anchorTags) {
          const url = anchor.href;
          if (url) {
            const youtubeRegex =
              /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
            if (youtubeRegex.test(url)) {
              const videoId = getYoutubeVideoId(url);
              if (videoId) {
                const iframeHTML = `
                  <iframe width="400" height="225" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
                anchor.replaceWith(
                  document.createRange().createContextualFragment(iframeHTML)
                );
              }
            } else {
              const metadata = await fetchMetadata(url);
              if (metadata) {
                const previewCardHTML = `
                  <a href="${url}" target="_blank" style="
                    display: flex;
                    align-items: center;
                    width: 400px;
                    height: 100px;
                    overflow: hidden;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    margin: 5px;
                    cursor: pointer;
                    text-decoration: none;
                    color: inherit;">
                    <img src="${metadata.image}" alt="${metadata.title}" style="
                      width: 100px;
                      height: 100%;
                      object-fit: cover;
                      border-right: 1px solid #ddd;">
                    <div style="
                      padding: 5px;
                      flex: 1;
                      overflow: hidden;">
                      <h4 style="
                        margin: 0;
                        font-size: 12px;
                        font-weight: bold;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;">${metadata.title}</h4>
                      <p style="
                        margin: 2px 0;
                        font-size: 10px;
                        color: #666;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;">${metadata.description}</p>
                    </div>
                  </a>
                `;
                anchor.replaceWith(
                  document
                    .createRange()
                    .createContextualFragment(previewCardHTML)
                );
              }
            }
          }
        }
      }
    }

    isRunning = false;

    observer.observe(messageContainer, {
      childList: true,
      subtree: true,
    });
  }

  function getYoutubeVideoId(url) {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    } else if (urlObj.hostname.includes("youtu.be")) {
      return urlObj.pathname.slice(1);
    }
    return null;
  }

  const sendButton = document
    .querySelector("flowise-fullchatbot")
    .shadowRoot.querySelector(
      "div > div > div:last-child > div:last-child > div:nth-child(2) button:last-of-type"
    );

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length && !isRunning && !sendButton.disabled) {
        replaceUrlsWithPreviews(observer);
      }
    }
  });

  const messageContainer = document
    .querySelector("flowise-fullchatbot")
    .shadowRoot.querySelector(
      "div > div > div:last-child > div:last-child > div"
    );

  observer.observe(messageContainer, {
    childList: true,
    subtree: true,
  });
}
