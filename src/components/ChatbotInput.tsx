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

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [elapsedTime, setElapsedTime] = useState("00:00");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const [isApiAcceptingVoice, setIsApiAcceptingVoice] = useState(
    chatData.isApiAcceptingVoice
  );

  const [isApiAcceptingImage, setIsApiAcceptingImage] = useState(
    chatData.isApiAcceptingimage
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!chatData.online) return;
    if (!userMessage.trim() && !recordedAudio && !imageFile && !uploadedFile)
      return;
    if (chatData.isApiTyping) return;

    if (userMessage.trim()) {
      setUserMessage("");
      sendMessage(userMessage, chatData, dispatch);
    }

    if (recordedAudio) {
      console.log("Sending recorded audio...");
      setRecordedAudio(null);
      setAudioURL(null);
    }

    if (imageFile) {
      console.log("Sending image file...");
      setImageFile(null);
      setImageURL(null);
    }

    if (uploadedFile) {
      console.log("Sending uploaded file...");
      setUploadedFile(null);
      setFileName(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(e.target.value);
  };

  const handleStartRecording = async () => {
    await startAudioRecording(
      (isStarted) => setIsRecording(isStarted),
      (isUnsupported) => setIsApiAcceptingVoice(!isUnsupported),
      setElapsedTime
    );
    setIsRecording(true);
  };

  const handleStopRecording = async () => {
    await stopAudioRecording((blob) => {
      setRecordedAudio(blob);
      const audioUrl = URL.createObjectURL(blob);
      setAudioURL(audioUrl);
    });
    setIsRecording(false);
  };

  const handleDeleteRecording = () => {
    setRecordedAudio(null);
    setAudioURL(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setFileName(file.name);
    }
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    setFileName(null);
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

      {fileName && (
        <div className="flex items-center w-full p-2">
          <p>{fileName}</p>
          <IconButton onClick={handleDeleteFile}>
            <Delete color="error" />
          </IconButton>
        </div>
      )}

      <div className="flex flex-1 justify-center items-center">
        {audioURL && (
          <div className="flex flex-nowrap justify-center items-center w-full gap-2 p-2">
            <audio
              controls
              src={audioURL}
              className="w-full"
            >
              Your browser does not support the audio element.
            </audio>
            <IconButton onClick={handleDeleteRecording}>
              <Delete color="error" />
            </IconButton>
          </div>
        )}

        {!audioURL && (
          <TextareaAutosize
            value={userMessage}
            disabled={!chatData.online || chatData.isApiTyping || isRecording}
            placeholder="Type your message or listen to the recorded audio..."
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
        {isApiAcceptingVoice ? (
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

        {isApiAcceptingImage ? (
          <IconButton component="label">
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

        <IconButton component="label">
          <AttachFile />
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt,.ppt,.xls,.xlsx"
            hidden
            onChange={handleFileUpload}
          />
        </IconButton>

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
