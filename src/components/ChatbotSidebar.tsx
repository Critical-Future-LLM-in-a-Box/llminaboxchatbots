import React, { useState, useRef, useCallback } from "react";
import { Box, Button, IconButton, Avatar, Drawer, Stack } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useContextData } from "@/context";
import Tooltip from "@mui/material/Tooltip";

const ChatbotSidebar = (): JSX.Element => {
  const [chatData] = useContextData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const tooltipContainerRef = useRef<HTMLDivElement>(null);

  // Toggle the sidebar state
  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );

  // Toggle video playback
  const toggleVideo = useCallback(() => {
    if (isVideoOn) {
      videoRef.current?.pause();
    } else if (videoRef.current && videoRef.current.readyState >= 2) {
      videoRef.current.play();
    }
    setIsVideoOn((prev) => !prev);
  }, [isVideoOn]);

  const { backgroundColor, foregroundColor } = chatData.config.ui || {};
  const { avatar } = chatData.config.assistant || {};

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <div ref={tooltipContainerRef} />

      <Drawer
        variant="persistent"
        open={isSidebarOpen}
        anchor="left"
        sx={{
          "position": "relative",
          "& .MuiDrawer-paper": {
            overflow: "hidden",
            position: "relative",
            width: isSidebarOpen ? "200px" : 0,
            bgcolor: backgroundColor,
            color: foregroundColor
          }
        }}
      >
        {isSidebarOpen && (
          <Stack
            spacing={2}
            direction="column"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            {/* Avatar/Video Section */}
            <Box
              sx={{
                width: 160,
                height: 160,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                bgcolor: "background.default",
                marginBottom: 2
              }}
            >
              {avatar?.liveUrl ? (
                <Box
                  component="img"
                  src={avatar.liveUrl}
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
                    fontSize: 80,
                    bgcolor: "primary.main"
                  }}
                >
                  AI
                </Avatar>
              )}
              <Box
                component="video"
                ref={videoRef}
                src={avatar?.videoUrl}
                onEnded={() => setIsVideoOn(false)}
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
                  label="English"
                />
              </Box>
            </Box>

            {/* Video Toggle Button */}
            <Tooltip
              title={isVideoOn ? "Cancel" : "More information?"}
              PopperProps={{
                container: tooltipContainerRef.current,
                disablePortal: true
              }}
            >
              <Button
                variant="outlined"
                onClick={toggleVideo}
                sx={{
                  "bgcolor": foregroundColor,
                  "color": backgroundColor,
                  "&:hover": {
                    bgcolor: backgroundColor,
                    color: foregroundColor
                  }
                }}
              >
                {isVideoOn ? "Cancel" : "More information?"}
              </Button>
            </Tooltip>
          </Stack>
        )}
      </Drawer>

      <Tooltip
        title={isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        PopperProps={{
          container: tooltipContainerRef.current,
          disablePortal: true
        }}
      >
        <IconButton
          sx={{
            borderRadius: 0,
            width: 2,
            color: foregroundColor,
            bgcolor: backgroundColor
          }}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <ArrowLeft /> : <ArrowRight />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

// Memoized export for performance
export default React.memo(ChatbotSidebar);
