import React from "react";
import Chatbot from "./Chatbot";
import { config } from "../index";

const ChatbotFull: React.FC<{ config: config }> = ({ config }) => {
  return <Chatbot config={config} />;
};

export default ChatbotFull;
