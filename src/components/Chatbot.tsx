import React from "react";
import { useContextData } from "@/context";
import { getOnlineStatus } from "@/utils/getOnlineStatus";
import { getAllowedUploads } from "@/utils/getAllowedUploads";
import ChatbotHeader from "@/components/ChatbotHeader";
import ChatbotBody from "@/components/ChatbotBody";
import ChatbotFooter from "@/components/ChatbotFooter";

export default function Chatbot(): JSX.Element {
  const [chatData, dispatch] = useContextData();

  const width = chatData.config.width
    ? chatData.config.width.includes("px")
      ? chatData.config.width
      : chatData.config.width + "px"
    : "100vw";
  const height = chatData.config.height
    ? chatData.config.height.includes("px")
      ? chatData.config.height
      : chatData.config.height + "px"
    : "100vh";

  React.useEffect(() => {
    getOnlineStatus(chatData, dispatch);
    getAllowedUploads(chatData, dispatch);
  });

  return (
    <div
      className="flex flex-col rounded-lg overflow-hidden"
      style={{
        backgroundColor: chatData.config.themeColor,
        color: chatData.config.textColor,
        width: width,
        height: height
      }}
    >
      <ChatbotHeader />
      <ChatbotBody />
      <ChatbotFooter />
    </div>
  );
}
