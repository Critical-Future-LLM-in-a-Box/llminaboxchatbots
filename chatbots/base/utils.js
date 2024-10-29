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
  // if (!options.interactiveAvatar) sectionWrapper.style.paddingTop = "20%";

  sectionWrapper.appendChild(avatarContainer);
  sectionWrapper.appendChild(button);

  newSectionParent.prepend(sectionWrapper);
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
