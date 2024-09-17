import React, { useRef, forwardRef } from "react";
import Avatar from "@mui/material/Avatar";
import { useContextData } from "@/context";

export function HeaderAvatar(): JSX.Element {
  const [chatData] = useContextData();
  const online = chatData.online;

  return (
    <div
      className="flex items-center gap-2"
      title={chatData.config.description}
    >
      <Avatar
        src={chatData.config.avatarStaticUrl}
        alt="Avatar"
        sx={{ width: 50, height: 50 }}
      />
      <div className="flex flex-col">
        <p className="text-lg">{chatData.config.name}</p>
        <div className="flex items-center text-sm">
          <div
            className={`w-2.5 h-2.5 rounded-full mr-2 ${
              online ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <div>{online ? "Online" : "Offline"}</div>
        </div>
      </div>
    </div>
  );
}
HeaderAvatar.displayName = "HeaderAvatar";

export const ChatAvatar = forwardRef<
  HTMLVideoElement,
  {
    isVideoOn: boolean;
    setIsVideoOn: (value: boolean) => void;
  }
>(({ isVideoOn, setIsVideoOn }, ref) => {
  const [chatData] = useContextData();

  const videoSrc = chatData.config.avatarVideoUrl;

  return (
    <div className="rounded-full overflow-hidden w-[200px] h-[200px]">
      <img
        src={chatData.config.avatarLiveUrl}
        alt="Avatar"
        className={"w-full h-full object-cover"}
        style={{ display: isVideoOn ? "none" : "block" }}
      />
      <video
        ref={ref}
        src={videoSrc}
        className="w-full h-full object-cover"
        onEnded={() => {
          setIsVideoOn(false);
        }}
        style={{ display: isVideoOn ? "block" : "none" }}
      />
    </div>
  );
});
ChatAvatar.displayName = "ChatAvatar";
