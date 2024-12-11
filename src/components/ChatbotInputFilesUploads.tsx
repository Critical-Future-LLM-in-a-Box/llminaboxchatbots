import React, { useState, useEffect } from "react";
import {
  Fab,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack
} from "@mui/material";
import {
  AttachFile,
  Camera,
  Description,
  Image as ImageIcon
} from "@mui/icons-material";
import { ImageCapturer } from "@/utils";
import { useContextData } from "@/context";

interface UploadButtonProps {
  onAddUpload: (file: {
    name: string;
    type: "file" | "file:full";
    mime: string;
    data: string;
  }) => void;
}

export default function UploadButton({ onAddUpload }: UploadButtonProps) {
  const [chatData] = useContextData();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [imageCapturer] = useState(() => new ImageCapturer());
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const videoPreviewRef = React.useRef<HTMLVideoElement | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const isUploadImageSupported = chatData.api.isApiAcceptingImage;
  const isUploadFileSupported = chatData.api.isApiAcceptingFullFile;

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleFileUpload = (type: string) => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = type;
      fileInputRef.current.click();
    }
  };

  const handleStartPreview = async () => {
    try {
      await imageCapturer.requestPermission();
      const imageStream = imageCapturer.getPreview();
      setVideoStream(imageStream);
      setIsCameraOpen(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const handleCapture = () => {
    const imageURL = imageCapturer.captureImage(videoPreviewRef?.current!);
    setImageURL(imageURL);
    onAddUpload({
      name: `image${Date.now()}.png`,
      type: "file",
      mime: "image/png",
      data: imageURL
    });
    handleCloseCamera();
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
    setVideoStream(null);
    imageCapturer.stop();
  };

  useEffect(() => {
    return () => {
      imageCapturer.stop();
    };
  }, []);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64Data = await blobToBase64(file);
      onAddUpload({
        name: file.name,
        type: file.type.includes("image") ? "file" : "file:full",
        mime: file.type,
        data: base64Data
      });
    }
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <>
      <Fab
        size="small"
        sx={{ boxShadow: 0, bgcolor: "transparent" }}
        onClick={handleOpenMenu}
      >
        <AttachFile />
      </Fab>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={handleStartPreview}
          disabled={!isUploadImageSupported}
        >
          <Camera sx={{ mr: 1 }} /> Capture Image
        </MenuItem>
        <MenuItem
          onClick={() => handleFileUpload("image/*")}
          disabled={!isUploadImageSupported}
        >
          <ImageIcon sx={{ mr: 1 }} /> Upload Image
        </MenuItem>
        <MenuItem
          onClick={() => handleFileUpload("*/*")}
          disabled={!isUploadFileSupported}
        >
          <Description sx={{ mr: 1 }} /> Upload File
        </MenuItem>
      </Menu>

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        multiple
      />

      <Dialog
        open={isCameraOpen}
        onClose={handleCloseCamera}
      >
        <DialogTitle>Camera Preview</DialogTitle>
        <DialogContent>
          <Stack alignItems="center">
            <video
              style={{ width: "100%", maxHeight: "400px" }}
              autoPlay
              playsInline
              muted
              ref={(video) => {
                if (video) {
                  video.srcObject = videoStream;
                  videoPreviewRef.current = video;
                }
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseCamera}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCapture}
            color="secondary"
          >
            Capture
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
