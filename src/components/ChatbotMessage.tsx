import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo
} from "react";
import {
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Skeleton,
  Paper,
  Stack,
  Chip,
  Tooltip
} from "@mui/material";
import {
  VolumeUp,
  Stop,
  ContentCopy,
  Mic,
  Image as ImageIcon,
  InsertDriveFile as FileIcon
} from "@mui/icons-material";

import { useContextData } from "@/context";
import { Message } from "@/types";
import { getVoice } from "@/utils/getTTSVoice";
import { marked } from "marked";

const MessageCard = ({ message }: { message: Message }) => {
  const [chatData, dispatch] = useContextData();
  const [isFetchingVoice, setIsFetchingVoice] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tooltipContainerRef = useRef<HTMLDivElement>(null);

  const isLastMessage = useMemo(() => {
    return (
      chatData.session.chatMessages[
        chatData.session.chatMessages.length - 1
      ] === message
    );
  }, [chatData.session.chatMessages]);

  const handleVoiceClick = useCallback(async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    setIsFetchingVoice(true);

    const audio = await getVoice(chatData, message).catch((error) => {
      setIsFetchingVoice(false);
      dispatch({
        type: "SET_ERROR",
        payload: (error as Error).message || "Failed to fetch voice"
      });
    });

    setIsFetchingVoice(false);

    if (audio) {
      audioRef.current = audio;
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  }, [chatData, dispatch, isPlaying, message]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(message.content || "");
  }, [message.content]);

  useEffect(() => {
    if (messageRef.current) {
      const chatContainer = messageRef.current.closest(".chat-container");
      if (chatContainer) {
        chatContainer.scrollTo({
          top: messageRef.current.offsetTop,
          behavior: "smooth"
        });
      }
    }
  }, [chatData.session.chatMessages]);

  return (
    <Paper
      variant="elevation"
      elevation={0}
      sx={{
        maxWidth: "90%",
        alignSelf: message.role === "api" ? "flex-start" : "flex-end",
        m: 1,
        color: chatData.config.ui?.foregroundColor || "#111111",
        bgcolor: chatData.config.ui?.bodyBackgroundColor || "#EFEFEF"
      }}
    >
      <div ref={tooltipContainerRef} />

      {/* Upload Previews */}
      {message.uploads && message.uploads.length > 0 && (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            p: 2,
            overflowX: "auto",
            justifyContent: "start",
            alignItems: "center"
          }}
        >
          {message.uploads.map((upload, index) => (
            <Chip
              key={index}
              label={upload.name}
              icon={
                upload.type === "audio" ? (
                  <Mic />
                ) : upload.mime.includes("image") ? (
                  <ImageIcon />
                ) : (
                  <FileIcon />
                )
              }
            />
          ))}
        </Stack>
      )}
      <Box
        sx={{
          typography: "body2",
          color: chatData.config.ui?.foregroundColor || "#111111",
          bgcolor: chatData.config.ui?.backgroundColor || "#EFEFEF",
          borderRadius: 2,
          p: "2px 16px",
          minHeight: "32px",
          overflow: "auto"
        }}
        ref={messageRef}
      >
        {chatData.api.isTyping && isLastMessage ? (
          <Skeleton
            animation="wave"
            height={32}
          />
        ) : (
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(message.content || "")
              }}
            />
          </div>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
        <Typography
          variant="caption"
          color="textSecondary"
        >
          {new Date(message.timestamp || "").toLocaleString()}
        </Typography>
        {message.role === "api" && (
          <>
            {chatData.config.assistant?.voice?.name && (
              <Tooltip
                title={isPlaying ? "Stop Audio" : "Play Audio"}
                PopperProps={{
                  container: tooltipContainerRef.current,
                  disablePortal: true
                }}
              >
                <span>
                  <IconButton
                    onClick={handleVoiceClick}
                    size="small"
                    disabled={isFetchingVoice}
                  >
                    {isFetchingVoice ? (
                      <CircularProgress size={16} />
                    ) : isPlaying ? (
                      <Stop fontSize="small" />
                    ) : (
                      <VolumeUp fontSize="small" />
                    )}
                  </IconButton>
                </span>
              </Tooltip>
            )}
            <Tooltip
              title="Copy Message"
              PopperProps={{
                container: tooltipContainerRef.current,
                disablePortal: true
              }}
            >
              <IconButton
                onClick={handleCopy}
                size="small"
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>
    </Paper>
  );
};

// Memoized export for better performance
export default React.memo(MessageCard);
