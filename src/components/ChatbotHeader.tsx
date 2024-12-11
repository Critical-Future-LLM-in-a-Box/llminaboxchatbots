import React, { useCallback, useEffect, memo } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Fab,
  Stack,
  Alert
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Person from "@mui/icons-material/Person";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import AddIcon from "@mui/icons-material/Add";
import { useContextData } from "@/context";
import { getOnlineStatus } from "@/utils";

interface ChatbotHeaderProps {
  onClose?: () => void;
  onToggleFullscreen?: () => void;
  isFullscreen?: boolean;
}

const ChatbotHeader = ({
  onClose,
  onToggleFullscreen,
  isFullscreen = false
}: ChatbotHeaderProps): JSX.Element => {
  const [chatData, dispatch] = useContextData();

  const startNewChat = useCallback(() => {
    dispatch({ type: "START_NEW_CHAT" });
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;
    getOnlineStatus(chatData)
      .then((isOnline) => {
        if (isMounted) {
          dispatch({ type: "SET_ONLINE_STATUS", payload: isOnline });
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          dispatch({
            type: "SET_ERROR",
            payload:
              (error as Error).message ||
              "server error: unable to get online status"
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [chatData.api, dispatch]);

  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: chatData.config.ui?.backgroundColor,
        color: chatData.config.ui?.foregroundColor,
        boxShadow: 0
      }}
    >
      <Toolbar
        variant="regular"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 8px"
        }}
      >
        {/* Assistant Avatar and Name */}
        <Stack
          direction="row"
          spacing={1}
        >
          <Avatar
            alt={chatData.config.assistant?.name}
            src={chatData.config.assistant?.avatar?.staticUrl || ""}
            sx={{
              width: 32,
              height: 32,
              border: chatData.api.online
                ? "2px solid #00FF00"
                : "2px solid #FF0000"
            }}
          >
            <Person />
          </Avatar>
          <Typography variant="h6">
            {chatData.config.assistant?.name}
          </Typography>
        </Stack>

        {/* Action Buttons */}
        <Stack
          direction="row"
          spacing={1}
        >
          {/* Start New Chat */}
          <Fab
            size="small"
            variant="circular"
            onClick={startNewChat}
            sx={{
              boxShadow: 0
            }}
          >
            <AddIcon />
          </Fab>

          {/* Fullscreen and Close Buttons */}
          {onToggleFullscreen && (
            <Fab
              size="small"
              variant="circular"
              sx={{
                boxShadow: 0
              }}
              onClick={onToggleFullscreen}
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </Fab>
          )}
          {onClose && (
            <Fab
              size="small"
              variant="circular"
              sx={{
                boxShadow: 0
              }}
              onClick={onClose}
            >
              <CloseIcon />
            </Fab>
          )}
        </Stack>
      </Toolbar>

      {/* Error Alert */}
      {chatData.error && (
        <Alert
          severity="error"
          variant="filled"
          sx={{
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          {chatData.error}
        </Alert>
      )}
    </AppBar>
  );
};

// Memoized export for performance
export default memo(ChatbotHeader);
