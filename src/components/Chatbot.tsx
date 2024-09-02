import React, { useState, useEffect, useRef } from "react";
import { Send as SendIcon, Close as CloseIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Input } from "./Input";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { AvatarComponent, AvatarImage, AvatarFallback } from "./Avatar";

interface Message {
  role: string;
  content: string;
  timestamp: string | null;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I am your chatbot assistant. How can I help you?",
      timestamp: null
    }
  ]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) => ({
        ...msg,
        timestamp: msg.timestamp || new Date().toLocaleTimeString()
      }))
    );

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: Message = {
      role: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
    setIsTyping(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([...messages, { role: "user", content: message }])
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let assistantMessage: Message = {
      role: "assistant",
      content: "",
      timestamp: currentTime
    };

    setMessages((prevMessages) => [...prevMessages, assistantMessage]);

    reader?.read().then(function processText({ done, value }) {
      if (done) {
        setIsTyping(false);
        return;
      }
      const text = decoder.decode(value, { stream: true });
      assistantMessage.content += text;
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { ...assistantMessage }
      ]);
      reader.read().then(processText);
    });
  };

  return (
    <Card
      className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ minWidth: "400px", minHeight: "400px" }}
    >
      <CardHeader className="flex flex-row items-center justify-between border-b p-4">
        <div className="flex items-center gap-4">
          <AvatarComponent>
            <AvatarImage
              src=""
              alt="Chatbot Avatar"
            />
          </AvatarComponent>
          <div>
            <p className="text-lg font-semibold">Supporbot</p>
            <p className="flex items-center text-sm text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
              Online
            </p>
          </div>
        </div>
        <Button
          onClick={() => window.location.reload()}
          variant="contained"
          endIcon={<CloseIcon />}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          Clear
        </Button>
      </CardHeader>
      <CardContent className="p-4 overflow-y-auto h-[60vh] sm:h-[70vh]">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div className="flex flex-col max-w-[70%]">
                <div
                  className={`px-4 py-2 rounded-lg text-sm overflow-hidden ${
                    message.role === "assistant"
                      ? "bg-gray-100 text-gray-800 rounded-bl-none"
                      : "bg-blue-500 text-white rounded-br-none"
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
                {message.timestamp && (
                  <span
                    className={`text-xs text-gray-500 mt-1 ${
                      message.role === "assistant" ? "self-start" : "self-end"
                    }`}
                  >
                    {message.timestamp}
                  </span>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form
          className="flex items-center w-full"
          onSubmit={sendMessage}
        >
          <Input
            ref={messageInput}
            type="text"
            className="flex-1 mr-2"
            value={message}
            id="message"
            placeholder="Type your message..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
