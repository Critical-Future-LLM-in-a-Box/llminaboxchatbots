import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Fab, Stack, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

import ChatIcon from "@mui/icons-material/Chat";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ChatbotHeader from "@/components/ChatbotHeader";
import ChatbotBody from "@/components/ChatbotBody";
import ChatbotFooter from "@/components/ChatbotFooter";

import { useContextData } from "@/context";

const ChatbotBubble = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isSmUp) {
      setIsFullscreen(false);
    } else {
      setIsFullscreen(true);
    }
  }, [isSmUp]);

  const [chatData] = useContextData();

  const toggleChatbot = useCallback(() => setIsVisible((prev) => !prev), []);
  const toggleFullscreen = useCallback(
    () => setIsFullscreen((prev) => !prev),
    []
  );
  const closeChatbot = useCallback(() => setIsVisible(false), []);

  const { backgroundColor, foregroundColor } = chatData.config.ui!;

  const tooltipContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        gap: 2,
        zIndex: 9999
      }}
    >
      <div ref={tooltipContainerRef} />

      {isVisible && (
        <Stack
          direction="column"
          spacing={0}
          divider={
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ borderColor: chatData.config.ui?.backgroundColor }}
            />
          }
          sx={{
            border: 1,
            borderColor: chatData.config.ui?.backgroundColor,
            overflow: "hidden",
            borderRadius: 2,
            width: isFullscreen
              ? chatData.config.ui?.width !== "100%"
                ? chatData.config.ui?.width
                : "80vw"
              : "400px",
            height: isFullscreen
              ? chatData.config.ui?.height !== "100%"
                ? chatData.config.ui?.height
                : "60vh"
              : "500px",
            position: isFullscreen ? "fixed" : "static",
            top: isFullscreen ? "50%" : 0,
            left: isFullscreen ? "50%" : 0,
            transform: isFullscreen ? "translate(-50%, -50%)" : "none"
          }}
        >
          <ChatbotHeader
            onClose={closeChatbot}
            onToggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
          <ChatbotBody />
          <ChatbotFooter />
        </Stack>
      )}

      <Tooltip
        title={isVisible ? "Hide Chat" : "Show Chat"}
        PopperProps={{
          container: tooltipContainerRef.current,
          disablePortal: true
        }}
      >
        <Fab
          onClick={toggleChatbot}
          sx={{
            "visibility": isFullscreen ? "hidden" : "visible",
            "bgcolor": backgroundColor,
            "color": foregroundColor,
            "zIndex": 9999,
            "&:hover": {
              color: backgroundColor,
              bgcolor: foregroundColor
            }
          }}
        >
          {isVisible ? <KeyboardArrowDownIcon /> : <ChatIcon />}
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default React.memo(ChatbotBubble);
