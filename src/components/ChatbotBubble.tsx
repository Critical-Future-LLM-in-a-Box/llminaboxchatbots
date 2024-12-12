import React, { useState, useCallback } from "react";
import { Box, Fab, Stack, Divider } from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ChatbotHeader from "@/components/ChatbotHeader";
import ChatbotBody from "@/components/ChatbotBody";
import ChatbotFooter from "@/components/ChatbotFooter";

import { useContextData } from "@/context";

const ChatbotBubble = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
        gap: 2
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
            overflow: "hidden",
            position: isFullscreen ? "fixed" : "static",
            bottom: isFullscreen ? "50%" : 0,
            right: isFullscreen ? "50%" : 0,
            transform: isFullscreen ? "translate(50%, 50%)" : "none",
            minWidth: isFullscreen ? "80vw" : "500px",
            maxWidth: isFullscreen ? "90vw" : "600px",
            minHeight: isFullscreen ? "80vh" : "500px",
            maxHeight: isFullscreen ? "90vh" : "600px"
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

// Export with memoization to prevent unnecessary re-renders
export default React.memo(ChatbotBubble);
