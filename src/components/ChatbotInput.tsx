import React, { useState, useEffect } from "react";
import { Button, TextareaAutosize, IconButton } from "@mui/material";
import {
  Mic,
  MicOff,
  Stop,
  Delete,
  Image,
  ImageNotSupported,
  AttachFile
} from "@mui/icons-material";
import { sendMessage } from "@/utils/getMessage";
import { useContextData } from "@/context";
import {
  startAudioRecording,
  stopAudioRecording
} from "@/utils/getVoiceRecord";

export default function ChatbotInput() {
  const [chatData, dispatch] = useContextData();

  const [userMessage, setUserMessage] = useState("");

  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState("00:00");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!chatData.online) return;
    if (!userMessage.trim() && !audioBlob && !imageFile) return;
    if (chatData.isApiTyping) return;

    if (userMessage.trim()) {
      sendMessage(userMessage, chatData, dispatch);
      setUserMessage("");
    }

    if (audioBlob) {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        sendMessage("", chatData, dispatch, [
          {
            data: reader.result as string,
            mime: audioBlob.type,
            type: audioBlob.type.split("/")[0],
            name: `audio.${audioBlob.type.split("/")[1]}`
          }
        ]);
        setAudioBlob(null);
      };
    }

    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => {
        console.log(imageFile.type);

        sendMessage("", chatData, dispatch, [
          {
            data: reader.result as string,
            mime: imageFile.type,
            type: "file",
            name: imageFile.name
          }
        ]);
        setImageFile(null);
        setImageURL(null);
      };
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(e.target.value);
  };

  const handleStartRecording = async () => {
    await startAudioRecording(
      (isStarted) => setIsRecording(isStarted),
      (isUnsupported) =>
        dispatch({ type: "SET_API_ACCEPTING_VOICE", payload: !isUnsupported }),
      setElapsedTime
    );
    setIsRecording(true);
  };

  const handleStopRecording = async () => {
    await stopAudioRecording(async (blob) => {
      setAudioBlob(blob);
    });
    setIsRecording(false);
  };

  const handleDeleteRecording = () => {
    setAudioBlob(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setImageFile(null);
    setImageURL(null);
  };

  return (
    <form
      className="flex flex-wrap items-center justify-between gap-4 w-full"
      onSubmit={handleSubmit}
    >
      {imageURL && (
        <div className="flex items-center w-full p-2">
          <img
            src={imageURL}
            alt="Preview for the uploaded image"
            className="w-20 h-20 object-cover rounded"
          />
          <IconButton onClick={handleDeleteImage}>
            <Delete color="error" />
          </IconButton>
        </div>
      )}

      <div className="flex flex-1 justify-center items-center">
        {audioBlob && (
          <div className="flex flex-nowrap justify-center items-center w-full gap-2 p-2">
            <audio
              controls
              src={URL.createObjectURL(audioBlob)}
              className="w-full"
            >
              Your browser does not support the audio element.
            </audio>
            <IconButton onClick={handleDeleteRecording}>
              <Delete color="error" />
            </IconButton>
          </div>
        )}

        {!audioBlob && (
          <TextareaAutosize
            value={userMessage}
            disabled={!chatData.online || chatData.isApiTyping || isRecording}
            placeholder="Type your message..."
            className="resize-none flex justify-center items-center w-full p-2"
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
          />
        )}
      </div>

      <div className="flex flex-nowrap justify-center items-center gap-2 p-2">
        {chatData.isApiAcceptingVoice ? (
          <IconButton
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            disabled={!chatData.online || chatData.isApiTyping}
          >
            {isRecording ? <Stop color="error" /> : <Mic />}
          </IconButton>
        ) : (
          <IconButton disabled>
            <MicOff color="disabled" />
          </IconButton>
        )}

        {chatData.isApiAcceptingimage ? (
          <IconButton
            component="label"
            disabled={!chatData.online || chatData.isApiTyping}
          >
            <Image />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </IconButton>
        ) : (
          <IconButton disabled>
            <ImageNotSupported color="disabled" />
          </IconButton>
        )}

        <Button
          type="submit"
          variant="outlined"
        >
          Send
        </Button>
      </div>
    </form>
  );
}
