import React from "react";
import { useContextData, Message } from "@/context";
import ChatbotInput from "@/components/ChatbotInput";
import ChatbotSidebar from "@/components/ChatbotSidebar";
import MessageCard from "@/components/ChatbotMessage";

export default function ChatbotBody() {
  const [chatData, dispatch] = useContextData();

  const chatBody = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex"
      ref={chatBody}
      style={{
        height: "calc(100% - 160px)"
      }}
    >
      <ChatbotSidebar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col flex-grow overflow-auto p-4">
          {chatData.messages.map((message, index) => (
            <MessageCard
              key={index}
              message={message}
              isLastApiMessage={
                message.role === "apiMessage" &&
                index === chatData.messages.length - 1
              }
            />
          ))}
        </div>
        <div className="p-4 border-t">
          <ChatbotInput />
        </div>
      </div>
    </div>
  );
}
