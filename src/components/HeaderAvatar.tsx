import React from "react";
import { Avatar } from "@mui/material";
import { useContextData } from "@/context";
import { Person } from "@mui/icons-material";
import { getOnlineStatus } from "@/utils";

export function HeaderAvatar(): JSX.Element {
  const [chatData, dispatch] = useContextData();

  React.useEffect(() => {
    getOnlineStatus(chatData, dispatch);
  }, []);

  return (
    <Avatar
      alt={chatData.config.assistant?.name}
      src={chatData.config.assistant.avatar.staticUrl}
      sx={{
        width: 32,
        height: 32,
        border: chatData.api.online ? "2px solid #00FF00" : "2px solid #FF0000"
      }}
    >
      <Person />
    </Avatar>
  );
}
