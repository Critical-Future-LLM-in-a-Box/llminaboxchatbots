import React, { useState, useEffect } from "react";
import { Fab, Badge } from "@mui/material";
import { Mic, Stop as StopIcon } from "@mui/icons-material";
import { AudioRecorder } from "@/utils";
import { useContextData } from "@/context";

type AudioRecordingProps = {
  onAddAudio: (audio: {
    name: string;
    type: "audio";
    mime: string;
    data: string;
  }) => void;
};

export default function AudioRecordingButton({
  onAddAudio
}: AudioRecordingProps) {
  const [chatData] = useContextData();
  const [recorder] = useState(() => new AudioRecorder());
  const [timeRecorded, setTimeRecorded] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingInterval, setRecordingInterval] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (recordingInterval && !isRecording) {
      clearInterval(recordingInterval);
      setRecordingInterval(null);
    }
  }, [isRecording, recordingInterval]);

  const handleStartRecording = async () => {
    try {
      await recorder.startRecording();
      setIsRecording(true);
      setTimeRecorded(0);

      const interval = setInterval(() => {
        setTimeRecorded((prev) => prev + 1);
      }, 1000);

      setRecordingInterval(interval);
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  const handleStopRecording = async () => {
    try {
      setIsRecording(false);
      setTimeRecorded(recorder.timeRecorded);
      const audioBlob = await recorder.stopRecording();

      if (audioBlob) {
        const base64Audio = await blobToBase64(audioBlob);
        onAddAudio({
          name: `audio${recorder.startTime}.wav`,
          type: "audio",
          mime: audioBlob.type,
          data: base64Audio
        });
      }
    } catch (error) {
      console.error("Failed to stop recording:", error);
    }
  };

  const blobToBase64 = async (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  };

  return (
    <Fab
      size="medium"
      onClick={isRecording ? handleStopRecording : handleStartRecording}
      sx={{
        color: chatData?.config?.ui?.foregroundColor || "#111111",
        boxShadow: 0,
        bgcolor: "transparent"
      }}
    >
      {isRecording ? (
        <Badge
          badgeContent={`${timeRecorded}s`}
          color="secondary"
          sx={{ boxShadow: 0, bgcolor: "transparent" }}
        >
          <StopIcon sx={{ fontSize: 24 }} />
        </Badge>
      ) : (
        <Mic sx={{ fontSize: 24 }} />
      )}
    </Fab>
  );
}
