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
        minHeight: "300px",
        height: chatData?.config?.ui?.height || "100%",
        width: chatData?.config?.ui?.width || "100%",
        color: chatData?.config?.ui?.foregroundColor || "#111111",
        backgroundColor: chatData?.config?.ui?.bodyBackgroundColor || "#FFF"
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
          overflow: "auto"
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
            overflow: "auto"
          }}
          className="chat-container"
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

export default memo(ChatbotBody);
