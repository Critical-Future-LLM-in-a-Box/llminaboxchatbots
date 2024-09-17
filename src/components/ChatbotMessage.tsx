import React, { useState } from "react";
import Color from "color";
import { marked } from "marked";
import DOMPurify from "dompurify";
import CircularProgress from "@mui/material/CircularProgress";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StopIcon from "@mui/icons-material/Stop";
import { useContextData, Message } from "@/context";
import { getVoice } from "@/utils/getVoice";

export default function MessageCard({
  message,
  isLastApiMessage
}: {
  message: Message;
  isLastApiMessage: boolean;
}) {
  const [chatData] = useContextData();

  const [isFetchingVoice, setIsFetchingVoice] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioInstance, setAudioInstance] = useState<HTMLAudioElement | null>(
    null
  );

  const handleVoiceClick = async () => {
    if (isPlaying && audioInstance) {
      audioInstance.pause();
      setIsPlaying(false);
    } else {
      setIsFetchingVoice(true);
      try {
        const audio = await getVoice(chatData, message);
        if (audio) {
          setAudioInstance(audio);
          audio.play();
          setIsPlaying(true);

          audio.onended = () => {
            setIsPlaying(false);
          };
        }
      } catch (error) {
        console.error("Error fetching voice:", error);
      } finally {
        setIsFetchingVoice(false);
      }
    }
  };

  return (
    <div
      className={`flex flex-col justify-center w-fit ${
        message.role === "apiMessage" ? "self-start" : "self-end"
      }`}
    >
      <div
        className="inline-block p-2 rounded-lg"
        style={{
          backgroundColor:
            message.role === "apiMessage"
              ? Color(chatData.config.themeColor).darken(0.02).toString()
              : Color(chatData.config.themeColor).darken(0.01).toString()
        }}
      >
        {chatData.isApiTyping && isLastApiMessage ? (
          <CircularProgress size={16} />
        ) : (
          <MessageMarked content={message.content} />
        )}
      </div>

      <div className="flex gap-2 items-center text-xs text-gray-500 mt-1">
        {message.timestamp}{" "}
        {message.role === "apiMessage" && (
          <button onClick={handleVoiceClick}>
            {isFetchingVoice ? (
              <CircularProgress size={16} />
            ) : isPlaying ? (
              <StopIcon fontSize="small" />
            ) : (
              <VolumeUpIcon fontSize="small" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export function MessageMarked({ content }: { content: string }): JSX.Element {
  const rawHtml = marked(content);
  const sanitizedHtml = DOMPurify.sanitize(rawHtml as string);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
