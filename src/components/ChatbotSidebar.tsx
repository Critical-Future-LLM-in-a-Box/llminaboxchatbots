import React, { useState, useCallback } from "react";
import color from "color";
import { Button } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { ChatAvatar } from "@/components/Avatar";
import { useContextData } from "@/context";

export default function ChatbotSidebar(): JSX.Element {
  const [chatData] = useContextData();

  const video = React.useRef<HTMLVideoElement>(null);

  const [isAboutOpen, setIsAboutOpen] = useState(window.innerWidth > 768);

  const [isVideoOn, setIsVideoOn] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsAboutOpen((prevState) => !prevState);
  }, []);

  return (
    <div
      className={`relative border-r p-4 flex justify-center items-center ${!isAboutOpen && "w-1"}`}
      style={{
        backgroundColor: color(chatData.config.themeColor)
          .darken(0.01)
          .string(),
        color: color(chatData.config.textColor).darken(0.05).string()
      }}
    >
      <div
        className={
          "flex flex-col justify-between items-center overflow-hidden gap-8"
        }
      >
        <ChatAvatar
          isVideoOn={isVideoOn}
          setIsVideoOn={setIsVideoOn}
          ref={video}
        />

        <Button
          variant="outlined"
          onClick={() => {
            if (isVideoOn) {
              video.current?.pause();
              setIsVideoOn(false);
            } else {
              video.current?.play();
              setIsVideoOn(true);
            }
          }}
        >
          {isVideoOn ? "Pause Video" : "About Video"}
        </Button>
      </div>

      <button
        className="w-8 h-8 rounded-full absolute top-1/2 -right-4"
        style={{
          backgroundColor: color(chatData.config.themeColor)
            .darken(0.01)
            .string(),
          color: color(chatData.config.textColor).darken(0.05).string()
        }}
        onClick={toggleSidebar}
      >
        {!isAboutOpen ? <ArrowRight /> : <ArrowLeft />}
      </button>
    </div>
  );
}
