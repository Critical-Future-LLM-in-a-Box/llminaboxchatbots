import React, { useEffect, useRef } from "react";
import { marked } from "marked";
import { Box } from "@mui/material";

type Props = {
  agentName: string;
  agentMessage: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
};

const defaultBackgroundColor = "#f7f8ff";
const defaultTextColor = "#303235";
const defaultFontSize = 16;

marked.setOptions({});

export const AgentReasoningBubble: React.FC<Props> = (props) => {
  const botMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (botMessageRef.current) {
      botMessageRef.current.innerHTML = marked(
        `**✅ ${props.agentName}** \n\n${props.agentMessage}`
      );
      botMessageRef.current.querySelectorAll("a").forEach((link) => {
        link.setAttribute("target", "_blank");
      });
    }
  }, [props.agentName, props.agentMessage]);

  return (
    <Box mb={6}>
      {props.agentMessage && (
        <Box
          ref={botMessageRef}
          sx={{
            backgroundColor: props.backgroundColor ?? defaultBackgroundColor,
            color: props.textColor ?? defaultTextColor,
            fontSize: props.fontSize
              ? `${props.fontSize}px`
              : `${defaultFontSize}px`
          }}
        />
      )}
    </Box>
  );
};
