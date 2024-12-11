import React, { memo } from "react";
import { useContextData } from "@/context";
import ChatbotInput from "@/components/ChatbotInput";
import ChatbotSidebar from "@/components/ChatbotSidebar";
import MessageCard from "@/components/ChatbotMessage";
import { Stack, Divider } from "@mui/material";

const ChatbotBody = (): JSX.Element => {
  const [chatData] = useContextData();

  const { sidebar } = chatData?.config?.ui || {};
  const messages = chatData.session?.chatMessages || [];

  return (
    <Stack
      direction="row"
      spacing={0}
      divider={
        <Divider
          orientation="vertical"
          flexItem
        />
      }
      sx={{
        flex: 1,
        overflow: "auto",
        maxHeight: "100%",
        maxWidth: "100%"
      }}
    >
      {/* Sidebar */}
      {sidebar && <ChatbotSidebar />}

      {/* Main Chat Area */}
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
          flex: 1,
          overflow: "auto",
          maxHeight: "100%",
          maxWidth: "100%"
        }}
      >
        {/* Messages List */}
        <Stack
          direction="column"
          spacing={0}
          divider={
            <Divider
              orientation="horizontal"
              sx={{ opacity: 0.1 }}
            />
          }
          sx={{
            flex: 1,
            overflow: "auto",
            maxHeight: "100%",
            maxWidth: "100%"
          }}
        >
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
            />
          ))}
        </Stack>

        {/* Chat Input Area */}
        <ChatbotInput />
      </Stack>
    </Stack>
  );
};

// Memoized export for performance optimization
export default memo(ChatbotBody);
