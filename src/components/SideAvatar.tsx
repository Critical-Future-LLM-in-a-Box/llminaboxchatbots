import React, { useState, useRef } from "react";
import { Box, Button, Avatar } from "@mui/material";
import { useContextData } from "@/context";

export function ChatAvatar(): JSX.Element {
  const [chatData] = useContextData();
  const [isVideoOn, setIsVideoOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    if (isVideoOn) {
      videoRef.current?.pause();
    } else if (videoRef.current && videoRef.current.readyState >= 2) {
      videoRef.current.play();
    }
    setIsVideoOn(!isVideoOn);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        overflow: "hidden"
      }}
    >
      <AvatarDisplay
        isVideoOn={isVideoOn}
        videoRef={videoRef}
        liveUrl={chatData.config.assistant.avatar?.liveUrl}
        videoUrl={chatData.config.assistant.avatar?.videoUrl}
        onVideoEnd={() => setIsVideoOn(false)}
      />
      <Button
        variant="outlined"
        onClick={toggleVideo}
      >
        {isVideoOn ? "Pause" : "About"}
      </Button>
    </Box>
  );
}

// AvatarDisplay Component - Handles video and image display for avatars
interface AvatarDisplayProps {
  isVideoOn: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  liveUrl?: string;
  videoUrl?: string;
  onVideoEnd: () => void;
}

const AvatarDisplay = ({
  isVideoOn,
  videoRef,
  liveUrl,
  videoUrl,
  onVideoEnd
}: AvatarDisplayProps) => (
  <Box
    sx={{
      width: 100,
      height: 100,
      borderRadius: "50%",
      overflow: "hidden",
      position: "relative",
      bgcolor: "background.default"
    }}
  >
    {liveUrl ? (
      <Box
        component="img"
        src={liveUrl}
        alt="Avatar"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: isVideoOn ? "none" : "block"
        }}
      />
    ) : (
      <Avatar
        sx={{
          width: "100%",
          height: "100%",
          fontSize: 72,
          bgcolor: "primary.main"
        }}
      >
        AI
      </Avatar>
    )}
    <Box
      component="video"
      ref={videoRef}
      src={videoUrl}
      onEnded={onVideoEnd}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: isVideoOn ? "block" : "none"
      }}
    >
      <track
        kind="captions"
        srcLang="en"
        src="/path/to/captions.vtt"
        label="English"
      />
    </Box>
  </Box>
);
