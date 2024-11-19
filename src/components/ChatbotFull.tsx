import React from "react";
import { Box } from "@mui/material";
import ChatbotHeader from "@/components/ChatbotHeader";
import ChatbotBody from "@/components/ChatbotBody";
import ChatbotFooter from "@/components/ChatbotFooter";

export default function ChatbotFull(): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <ChatbotHeader />
      <ChatbotBody />
      <ChatbotFooter />
    </Box>
  );
}
