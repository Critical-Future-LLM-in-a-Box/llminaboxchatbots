import React from "react";
import color from "color";
import { Button, ButtonGroup } from "@mui/material";
import { HeaderAvatar } from "@/components/Avatar";
import { useContextData } from "@/context";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function ChatbotHeader(): JSX.Element {
  const [chatData, dispatch] = useContextData();

  return (
    <div
      className="flex flex-row items-center justify-between border shadow-sm p-4 h-[80px]"
      style={{
        backgroundColor: color(chatData.config.themeColor)
          .darken(0.03)
          .string(),
        color: color(chatData.config.textColor).darken(0.05).string()
      }}
    >
      <HeaderAvatar />

      <ButtonGroup>
        <Button
          variant="outlined"
          style={{
            color: chatData.config.chatMemory ? undefined : "red"
          }}
          onClick={() => {
            dispatch({
              type: "SET_CHAT_MEMORY",
              payload: !chatData.config.chatMemory
            });
          }}
          endIcon={chatData.config.chatMemory ? <CheckIcon /> : <CloseIcon />}
        >
          <span>Memory</span>
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            dispatch({
              type: "CLEAR_CHAT",
              payload: ""
            })
          }
        >
          Clear
        </Button>
      </ButtonGroup>
    </div>
  );
}
