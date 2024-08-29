import React, { useState, useEffect } from "react";
import { BubbleButton } from "./BubbleButton";
import { BubbleParams } from "../types";
import { Bot, BotProps } from "../../../components/Bot";
import Tooltip from "./Tooltip";
import { getBubbleButtonSize } from "../../../utils/utils";

const defaultButtonColor = "#3B81F6";
const defaultIconColor = "white";

export type BubbleProps = BotProps & BubbleParams;

export const Bubble = (props: BubbleProps) => {
  const [isBotOpened, setIsBotOpened] = useState(false);
  const [isBotStarted, setIsBotStarted] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    bottom: props.theme?.button?.bottom ?? 20,
    right: props.theme?.button?.right ?? 20
  });

  const openBot = () => {
    if (!isBotStarted) setIsBotStarted(true);
    setIsBotOpened(true);
  };

  const closeBot = () => {
    setIsBotOpened(false);
  };

  const toggleBot = () => {
    isBotOpened ? closeBot() : openBot();
  };

  useEffect(() => {
    return () => {
      setIsBotStarted(false);
    };
  }, []);

  const buttonSize = getBubbleButtonSize(props.theme?.button?.size); // Default to 48px if size is not provided
  const buttonBottom = props.theme?.button?.bottom ?? 20;
  const chatWindowBottom = buttonBottom + buttonSize + 10; // Adjust the offset here for slight shift

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, interactive-widget=resizes-content";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const showTooltip = props.theme?.tooltip?.showTooltip ?? false;

  return (
    <>
      <Tooltip
        showTooltip={showTooltip && !isBotOpened}
        position={buttonPosition}
        buttonSize={buttonSize}
        tooltipMessage={props.theme?.tooltip?.tooltipMessage}
        tooltipBackgroundColor={props.theme?.tooltip?.tooltipBackgroundColor}
        tooltipTextColor={props.theme?.tooltip?.tooltipTextColor}
        tooltipFontSize={props.theme?.tooltip?.tooltipFontSize} // Set the tooltip font size
      />
      <BubbleButton
        {...props.theme?.button}
        toggleBot={toggleBot}
        isBotOpened={isBotOpened}
        setButtonPosition={setButtonPosition}
        dragAndDrop={props.theme?.button?.dragAndDrop ?? false}
        autoOpen={props.theme?.button?.autoWindowOpen?.autoOpen ?? false}
        openDelay={props.theme?.button?.autoWindowOpen?.openDelay}
        autoOpenOnMobile={
          props.theme?.button?.autoWindowOpen?.autoOpenOnMobile ?? false
        }
      />
      <div
        style={{
          height: props.theme?.chatWindow?.height
            ? `${props.theme?.chatWindow?.height.toString()}px`
            : "calc(100% - 150px)",
          width: props.theme?.chatWindow?.width
            ? `${props.theme?.chatWindow?.width.toString()}px`
            : undefined,
          transition:
            "transform 200ms cubic-bezier(0, 1.2, 1, 1), opacity 150ms ease-out",
          transformOrigin: "bottom right",
          transform: isBotOpened ? "scale3d(1, 1, 1)" : "scale3d(0, 0, 1)",
          boxShadow: "rgb(0 0 0 / 16%) 0px 5px 40px",
          backgroundColor:
            props.theme?.chatWindow?.backgroundColor || "#ffffff",
          backgroundImage: props.theme?.chatWindow?.backgroundImage
            ? `url(${props.theme?.chatWindow?.backgroundImage})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 42424242,
          bottom: `${Math.min(
            buttonPosition.bottom + buttonSize + 10,
            window.innerHeight - chatWindowBottom
          )}px`,
          right: `${Math.min(buttonPosition.right, window.innerWidth - 410)}px`
        }}
        className={`fixed sm:right-5 rounded-lg w-full sm:w-[400px] max-h-[704px] ${
          isBotOpened ? " opacity-1" : " opacity-0 pointer-events-none"
        } bottom-${chatWindowBottom}px`}
      >
        {isBotStarted && (
          <div className="relative h-full">
            {isBotOpened && (
              <button
                onClick={closeBot}
                className="py-2 pr-3 absolute top-0 right-[-8px] m-[6px] bg-transparent text-white rounded-full z-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75"
                title="Close Chat"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill={props.theme?.button?.iconColor ?? defaultIconColor}
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  />
                </svg>
              </button>
            )}
            <Bot
              badgeBackgroundColor={props.theme?.chatWindow?.backgroundColor}
              bubbleBackgroundColor={
                props.theme?.button?.backgroundColor ?? defaultButtonColor
              }
              bubbleTextColor={
                props.theme?.button?.iconColor ?? defaultIconColor
              }
              showTitle={props.theme?.chatWindow?.showTitle}
              showAgentMessages={props.theme?.chatWindow?.showAgentMessages}
              title={props.theme?.chatWindow?.title}
              titleAvatarSrc={props.theme?.chatWindow?.titleAvatarSrc}
              welcomeMessage={props.theme?.chatWindow?.welcomeMessage}
              errorMessage={props.theme?.chatWindow?.errorMessage}
              poweredByTextColor={props.theme?.chatWindow?.poweredByTextColor}
              textInput={props.theme?.chatWindow?.textInput}
              botMessage={props.theme?.chatWindow?.botMessage}
              userMessage={props.theme?.chatWindow?.userMessage}
              feedback={props.theme?.chatWindow?.feedback}
              fontSize={props.theme?.chatWindow?.fontSize}
              footer={props.theme?.chatWindow?.footer}
              starterPrompts={props.theme?.chatWindow?.starterPrompts}
              starterPromptFontSize={
                props.theme?.chatWindow?.starterPromptFontSize
              }
              chatflowid={props.chatflowid}
              chatflowConfig={props.chatflowConfig}
              apiHost={props.apiHost}
              observersConfig={props.observersConfig}
            />
          </div>
        )}
      </div>
    </>
  );
};
