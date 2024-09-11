import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button, IconButton } from "@mui/material";
import color from "color";
import localforage from "localforage";
import { Input } from "./Input";
import { Card, CardHeader, CardContent, CardFooter } from "./Card";
import { AvatarComponent, AvatarImage, AvatarFallback } from "./Avatar";
import { predictionStreamText } from "../utils";
import { config } from "../index";

interface Message {
  role: string;
  content: string;
  timestamp: string;
}

export default function Chatbot({ config }: { config: config }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "apiMessage",
      content: `Hello I am ${config.name} ${config.startingMessage}`,
      timestamp: new Date().toLocaleString()
    }
  ]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(window.innerWidth > 576);
  const [voice, setVoice] = useState({ audio: new Audio(), isPlaying: false });

  const messageInput = useRef<HTMLTextAreaElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const handleAboutClick = () => {
    if (isVideoReady) {
      video.current?.pause();
      setIsVideoReady(!isVideoReady);
    } else {
      video.current?.play();
      setIsVideoReady(!isVideoReady);
    }
  };

  useEffect(() => {
    const browserOnline = navigator.onLine;
    fetch(`${config.apiHost}/api/v1/ping`)
      .then((res) => res.text())
      .then((data) => {
        if (browserOnline && data === "pong") {
          setIsOnline(true);
        }
      });
  });

  useEffect(() => {
    function online() {
      setIsOnline(true);
    }

    function offline() {
      setIsOnline(false);
    }

    window.addEventListener("online", online);

    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", online);

      window.removeEventListener("offline", offline);
    };
  }, []);

  const handleTTS = async (message: Message) => {
    if (voice.isPlaying) {
      voice.audio.pause();
      setVoice((prev) => ({ ...prev, isPlaying: false }));
    } else {
      try {
        const ttsData = await localforage.getItem("ttsData");
        const ttsArray = Array.isArray(ttsData) ? ttsData : [];

        const existingTTS = ttsArray.find(
          (tts) =>
            tts.messageContent === message.content &&
            tts.timestamp === message.timestamp
        );

        if (existingTTS) {
          const audio = new Audio(existingTTS.audioUrl);
          await audio.play();
          setVoice((prev) => ({ ...prev, audio, isPlaying: true }));
        } else {
          const targetUrl = "http://51.20.131.200/get_tts";

          const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "G7x9mVt2Q5bK8Jp4S1Zc"
            },
            body: JSON.stringify({
              text: message.content,
              voice: "en-GB-SoniaNeural",
              id: new Date(message.timestamp.toString()).getTime()
            })
          });

          if (!response.ok) {
            throw new Error("Failed to fetch TTS data");
          }

          const ttsUrl = (await response.json())["file_url"];

          const audioFetch = await fetch(ttsUrl);

          if (!audioFetch.ok) {
            throw new Error("Failed to fetch audio data");
          }

          const audioBlob = await audioFetch.blob();

          const mp3Blob = new Blob([audioBlob], { type: "audio/mpeg" });

          const audioUrl = URL.createObjectURL(mp3Blob);

          const audio = new Audio(audioUrl);

          await audio.play();

          setVoice((prev) => ({ ...prev, audio, isPlaying: true }));

          // Save TTS data to local storage
          const newTTS = {
            messageContent: message.content,
            timestamp: message.timestamp,
            audioUrl: audioUrl
          };
          ttsArray.push(newTTS);
          await localforage.setItem("ttsData", ttsArray);
        }
      } catch (error) {
        console.error("Error occurred during TTS:", error);
      }
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const newMessage: Message = {
        role: "userMessage",
        content: message,
        timestamp: new Date().toLocaleString()
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      setIsTyping(true);

      const assistantMessage: Message = {
        role: "apiMessage",
        content: "",
        timestamp: new Date().toLocaleString()
      };

      const stream = predictionStreamText();

      for await (const chunk of stream) {
        assistantMessage.content += chunk;

        setMessages((prevMessages) => [
          ...prevMessages,
          { ...assistantMessage }
        ]);
      }

      setIsTyping(false);
    } catch (error) {
      console.error("Error occurred during sending message:", error);
    }
  };

  return (
    <Card
      className="flex flex-col shadow-lg rounded-lg overflow-hidden min-w-[500px] min-h-[500px] max-h-[100vh] max-w-[100vw] w-full h-full"
      style={{
        backgroundColor: config.themeColor,
        color: config.textColor
      }}
    >
      <CardHeader
        className="flex flex-row items-center justify-between flex-shrink border-b p-4"
        style={{
          backgroundColor: color(config.themeColor).darken(0.03).string(),
          color: color(config.textColor).darken(0.05).string()
        }}
      >
        <div className="flex items-center gap-4">
          <AvatarComponent>
            <AvatarImage
              src={config.avatarImage}
              alt="Chatbot Avatar"
            />
          </AvatarComponent>
          <div>
            <p className="text-lg font-semibold">{config.name}</p>
            <p className="flex items-center text-sm text-gray-500">
              <span
                className="w-2.5 h-2.5 rounded-full mr-2"
                style={{
                  backgroundColor: isOnline ? "green" : "red"
                }}
              ></span>
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <Button
          onClick={() => setMessages((prev) => [prev[0]])}
          variant="outlined"
        >
          Clear
        </Button>
      </CardHeader>

      <div className="flex flex-row flex-1 max-h-full overflow-auto">
        <CardContent
          className={`p-4 min-h-full relative w-80 transition-all ${!isAboutOpen && "w-1"}`}
          style={{
            backgroundColor: color(config.themeColor).darken(0.03).string(),
            color: color(config.textColor).darken(0.05).string()
          }}
        >
          <div
            className={`flex flex-col justify-evenly h-full transition-all ${!isAboutOpen && "w-0 p-0 overflow-hidden"}`}
          >
            <div className="rounded-full overflow-hidden w-[200px] h-[200px] bg-white border-8">
              <img
                src={config.avatarImageLive}
                alt="Avatar"
                className="w-full h-full object-cover"
                style={{ display: isVideoReady ? "none" : "block" }}
              />
              <video
                ref={video}
                src={config.avatarVideo}
                className="w-full h-full object-cover"
                onEnded={() => {
                  setIsVideoReady(false);
                }}
                style={{ display: isVideoReady ? "block" : "none" }}
              />
            </div>

            <div className="w-full flex justify-center mt-4">
              <Button
                onClick={handleAboutClick}
                variant="outlined"
              >
                {isVideoReady ? "Close" : "About" + " " + config.name}
              </Button>
            </div>
          </div>

          <button
            className={`w-9 h-9 rounded-full absolute top-1/2 cursor-pointer border-2 flex justify-center items-center right-0`}
            style={{
              backgroundColor: config.themeColor
            }}
            onClick={() => {
              setIsAboutOpen(!isAboutOpen);
            }}
          >
            {!isAboutOpen ? (
              <ArrowRightIcon className="w-full h-full" />
            ) : (
              <ArrowLeftIcon className="w-full h-full" />
            )}
          </button>
        </CardContent>

        <CardContent className="w-full flex flex-col justify-between p-5 overflow-auto">
          <div className="h-full max-h-full overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "apiMessage"
                    ? "justify-start"
                    : "justify-end"
                } `}
              >
                <div className="flex flex-col relative">
                  <div
                    className={"px-4 py-2 rounded-lg text-sm overflow-hidden"}
                    style={{
                      backgroundColor:
                        message.role === "apiMessage"
                          ? color(config.themeColor).darken(0.02).string()
                          : color(config.themeColor).darken(0.08).string()
                    }}
                  >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>

                  <div className="flex items-center gap-2 p-2">
                    <span
                      className={`text-xs text-gray-500 ${
                        message.role === "apiMessage"
                          ? "self-start"
                          : "self-end"
                      }`}
                    >
                      {message.timestamp}
                    </span>

                    {message.role === "apiMessage" && (
                      <IconButton
                        size="small"
                        sx={{
                          width: "16px",
                          height: "16px"
                        }}
                        onClick={() => handleTTS(message)}
                      >
                        <VolumeUpIcon fontSize="small" />
                      </IconButton>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
            </div>
          )}

          <form
            className="flex items-center gap-4 w-full"
            onSubmit={sendMessage}
          >
            <Input
              disabled={!isOnline}
              className={`flex-1 p-2 min-h-2 resize-none ${isOnline ? "" : "disabled:cursor-not-allowed disabled:opacity-50"}`}
              ref={messageInput}
              value={message}
              placeholder="Type your message..."
              onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e);
                }
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
            />
            <Button
              type="submit"
              variant="outlined"
            >
              Send
            </Button>
          </form>
        </CardContent>
      </div>

      <CardFooter
        className="flex justify-center items-center text-center flex-shrink p-4 border-b shadow-lg"
        style={{
          backgroundColor: color(config.themeColor).darken(0.03).string(),
          color: color(config.textColor).darken(0.05).string()
        }}
      >
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CriticalFuture. Made by{" "}
          <a
            href="https://criticalfutureglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CriticalFuture
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
