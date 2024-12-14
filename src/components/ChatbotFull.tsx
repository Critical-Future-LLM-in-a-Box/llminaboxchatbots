import React, { memo } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import ChatbotHeader from "@/components/ChatbotHeader";
import ChatbotBody from "@/components/ChatbotBody";
import ChatbotFooter from "@/components/ChatbotFooter";

const ChatbotFull = (): JSX.Element => {
  return (
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
        height: "100%",
        width: "100%",
        minWidth: "400px",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%"
      }}
    >
      <ChatbotHeader />
      <ChatbotBody />
      <ChatbotFooter />
    </Stack>
  );
};

export default memo(ChatbotFull);
