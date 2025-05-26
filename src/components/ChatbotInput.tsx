import { useState, useEffect, useCallback, useRef } from "react";
import {
  TextField,
  IconButton,
  Stack,
  Chip,
  Box,
  Tooltip
} from "@mui/material";
import {
  Send,
  Image as ImageIcon,
  Description as FileIcon,
  Mic
} from "@mui/icons-material";
import { useContextData } from "@/context";
import { getPrediction } from "@/utils";
import { Message, Uploads } from "@/types";
import { v4 as uuidv4 } from "uuid";
import UploadButton from "@/components/ChatbotInputFilesUploads";
import AudioRecordingButton from "@/components/ChatbotInputVoiceRecording";

export default function ChatbotInput() {
  const [chatData, dispatch] = useContextData();
  const isAudioUploadSupported = chatData.api.isApiAcceptingVoice;

  const [userMessage, setUserMessage] = useState<Message>({
    id: uuidv4(),
    role: "user",
    content: "",
    timestamp: new Date().toISOString(),
    uploads: [] as Uploads[]
  });

  const [apiMessage, setApiMessage] = useState<Message>({
    id: uuidv4(),
    role: "api",
    content: "",
    timestamp: new Date().toISOString()
  });

  const tooltipContainerRef = useRef<HTMLDivElement>(null);

  const handleAddUpload = (upload: Uploads) => {
    setUserMessage((prev) => ({
      ...prev,
      uploads: [...(prev.uploads || []), upload]
    }));
  };

  const handleResponseJSON = async (prevApiCount: number) => {
    const prediction = (await getPrediction({
      chatData,
      userMessage,
      canStream: false
    }).catch((error) => {
      dispatch({ type: "SET_TYPING_STATUS", payload: false });
      dispatch({ type: "DELETE_LAST_MESSAGE" });
      dispatch({
        type: "SET_ERROR",
        payload: `Error: ${(error as Error).message}`
      });
    })) as { chatMessageId: string; text: string };

    if (prediction) {
      dispatch({ type: "SET_TYPING_STATUS", payload: false });
      dispatch({
        type: "UPDATE_LAST_MESSAGE",
        payload: {
          id: prediction.chatMessageId,
          content: prediction.text
        }
      });

      const lastMessage =
        chatData.session.chatMessages[chatData.session.chatMessages.length - 1];

      if (chatData.config.onFirstAPIMessage && prevApiCount < 2)
        chatData.config.onFirstAPIMessage(lastMessage, chatData);

      if (chatData.config.onAPIMessage)
        chatData.config.onAPIMessage(lastMessage, chatData);
    }
  };

  const handleResponseStream = async (prevApiCount: number) => {
    const prediction = await getPrediction({
      chatData,
      userMessage,
      canStream: true
    }).catch((error) => {
      dispatch({ type: "DELETE_LAST_MESSAGE" });
      dispatch({ type: "SET_TYPING_STATUS", payload: false });
      dispatch({
        type: "SET_ERROR",
        payload: `Error: ${(error as Error).message}`
      });
    });

    dispatch({ type: "SET_TYPING_STATUS", payload: false });

    let apiMessageContent = apiMessage.content;
    for await (const sse of prediction as AsyncIterable<{ data: string }>) {
      const eventData = JSON.parse(sse.data);
      const event = eventData.event;
      const data = eventData.data;

      if (event === "token") {
        apiMessageContent += data;
        dispatch({
          type: "UPDATE_LAST_MESSAGE",
          payload: { content: data }
        });
      }
    }

    const lastMessage =
      chatData.session.chatMessages[chatData.session.chatMessages.length - 1];

    if (chatData.config.onFirstAPIMessage && prevApiCount < 2)
      chatData.config.onFirstAPIMessage(lastMessage, chatData);

    if (chatData.config.onAPIMessage)
      chatData.config.onAPIMessage(lastMessage, chatData);
  };

  const handleSubmit = useCallback(async () => {
    if (chatData.api.isTyping) return;
    setApiMessage({
      id: uuidv4(),
      role: "api",
      content: "",
      timestamp: new Date().toISOString()
    });

    if (!userMessage.content.trim() && !userMessage.uploads?.length) return;

    dispatch({ type: "ADD_NEW_MESSAGE", payload: userMessage });

    const prevUserCount = chatData.session.chatMessages.filter(
      (msg) => msg.role === "user"
    ).length;

    const prevApiCount = chatData.session.chatMessages.filter(
      (msg) => msg.role === "api"
    ).length;

    if (chatData.config.onFirstUserMessage && prevUserCount < 1)
      chatData.config.onFirstUserMessage(userMessage, chatData);

    if (chatData.config.onUserMessage)
      chatData.config.onUserMessage(userMessage, chatData);

    dispatch({ type: "SET_TYPING_STATUS", payload: true });
    dispatch({ type: "ADD_NEW_MESSAGE", payload: apiMessage });

    if (chatData.api.canStream) await handleResponseStream(prevApiCount);
    if (!chatData.api.canStream) await handleResponseJSON(prevApiCount);

    setUserMessage({
      id: uuidv4(),
      role: "user",
      content: "",
      timestamp: new Date().toISOString(),
      uploads: []
    });
  }, [userMessage, apiMessage, chatData, dispatch]);

  return (
    <Box
      sx={{
        color: chatData?.config?.ui?.foregroundColor || "#111111",
        backgroundColor: chatData?.config?.ui?.backgroundColor || "#FFF"
      }}
    >
      <div ref={tooltipContainerRef} />

      {/* Upload Previews */}
      {userMessage.uploads && userMessage.uploads.length > 0 && (
        <Stack
          useFlexGap
          direction="row"
          spacing={2}
          sx={{
            p: 2,
            overflowX: "auto",
            justifyContent: "start",
            alignItems: "center"
          }}
        >
          {userMessage.uploads.map((upload, index) => (
            <Chip
              key={index}
              label={upload.name}
              onDelete={() =>
                setUserMessage((prev) => ({
                  ...prev,
                  uploads: prev.uploads?.filter((_, i) => i !== index)
                }))
              }
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

      {/* Input Area */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ p: 1 }}
      >
        <UploadButton
          onAddUpload={(file) =>
            handleAddUpload({
              name: file.name,
              type: file.type,
              mime: file.mime,
              data: file.data
            })
          }
        />

        <Tooltip
          title="Type your message"
          PopperProps={{
            container: tooltipContainerRef.current,
            disablePortal: true
          }}
        >
          <TextField
            value={userMessage.content}
            onChange={(e) =>
              setUserMessage((prev) => ({ ...prev, content: e.target.value }))
            }
            sx={{
              "backgroundColor":
                chatData?.config?.ui?.backgroundColor || "#FFF",
              "& .MuiInputBase-root": {
                color: chatData?.config?.ui?.foregroundColor || "#111111"
              }
            }}
            placeholder="Type your message..."
            multiline
            fullWidth
            minRows={1}
            maxRows={4}
            variant="outlined"
            disabled={!chatData.api.isOnline}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !chatData.api.isTyping) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
        </Tooltip>

        {isAudioUploadSupported && (
          <AudioRecordingButton
            onAddAudio={(audio) =>
              handleAddUpload({
                name: audio.name,
                type: audio.type,
                mime: audio.mime,
                data: audio.data
              })
            }
          />
        )}

        <Tooltip
          title="Send message"
          PopperProps={{
            container: tooltipContainerRef.current,
            disablePortal: true
          }}
        >
          <span>
            <IconButton
              onClick={handleSubmit}
              sx={{
                boxShadow: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                width: 32,
                height: 32,
                backgroundColor: chatData?.config?.ui?.backgroundColor
              }}
              disabled={
                !chatData.api.isOnline ||
                chatData.api.isTyping ||
                (!userMessage.content && userMessage.uploads?.length === 0)
              }
            >
              <Send />
            </IconButton>
          </span>
        </Tooltip>
      </Stack>
    </Box>
  );
}
