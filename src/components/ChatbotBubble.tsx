import React, { useState } from "react";
import Chatbot from "./Chatbot";
import { config } from "../index";

const ChatbotBubble: React.FC<{ config: config }> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => setIsOpen(true);
  const closeChatbot = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <button
          className="chatbot-floating-button"
          onClick={openChatbot}
          style={floatingButtonStyle}
        >
          Chat
        </button>
      )}

      {isOpen && (
        <div style={chatbotModalStyle}>
          <div
            style={chatbotOverlayStyle}
            onClick={closeChatbot}
          ></div>
          <div style={chatbotContainerStyle}>
            <Chatbot config={config} />
          </div>
        </div>
      )}
    </>
  );
};

const floatingButtonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  cursor: "pointer",
  zIndex: 1000
};

const chatbotModalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const chatbotOverlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)"
};

const chatbotContainerStyle: React.CSSProperties = {
  position: "relative",
  width: "400px",
  height: "600px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  zIndex: 1000
};

export default ChatbotBubble;
