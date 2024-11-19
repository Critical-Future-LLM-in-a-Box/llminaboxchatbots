import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { ChatAvatar } from "@/components/SideAvatar";
import { useContextData } from "@/context";

export default function ChatbotSidebar(): JSX.Element {
  const [chatData] = useContextData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: chatData.config.ui?.backgroundColor,
        color: chatData.config.ui?.foregroundColor,
        width: isSidebarOpen ? "40%" : 0,
        maxWidth: 200
      }}
    >
      <ChatAvatar />

      <IconButton
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%) translateX(50%)",
          border: "1px solid #eee"
        }}
        onClick={handleToggleSidebar}
      >
        {isSidebarOpen ? <ArrowLeft /> : <ArrowRight />}
      </IconButton>
    </Box>
  );
}
