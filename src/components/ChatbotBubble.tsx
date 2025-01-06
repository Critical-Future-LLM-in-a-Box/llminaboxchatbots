import React, { useState, useEffect, useCallback } from "react";
import { Box, Fab, Stack, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
      {isVisible && (
        <Stack
          direction="column"
          spacing={0}
          divider={
            <Divider
              orientation="horizontal"
              flexItem
            />
          }
          sx={{
            border: 1,
            borderRadius: 2,
            width: "100%",
            height: "100%",
            minWidth: isFullscreen ? "80vw" : "300px",
            maxWidth: isFullscreen ? "100vw" : "600px",
            minHeight: isFullscreen ? "60vh" : "300px",
            maxHeight: isFullscreen ? "80vh" : "600px",
            position: isFullscreen ? "fixed" : "static",
            bottom: isFullscreen ? "50%" : 0,
            right: isFullscreen ? "50%" : 0,
            transform: isFullscreen ? "translate(50%, 50%)" : "none"
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

      <Fab
        onClick={toggleChatbot}
        sx={{
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
    </Box>
  );
};

export default React.memo(ChatbotBubble);
