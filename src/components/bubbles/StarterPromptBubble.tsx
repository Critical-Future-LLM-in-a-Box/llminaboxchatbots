import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  prompt: string;
  onPromptClick?: () => void;
  starterPromptFontSize?: number;
};

const StarterPromptBubble: React.FC<Props> = (props) => (
  <>
    <Box
      component="div"
      sx={{
        "display": "flex",
        "justifyContent": "start",
        "alignItems": "start",
        "animation": "fade-in 0.3s",
        "&:hover": {
          filter: "brightness(90%)"
        },
        "&:active": {
          filter: "brightness(75%)"
        }
      }}
      onClick={() => props.onPromptClick?.()}
    >
      <Typography
        component="span"
        sx={{
          padding: "2px",
          margin: "1px",
          whiteSpace: "pre-wrap",
          maxWidth: "100%",
          borderRadius: "15px",
          cursor: "pointer",
          fontSize: props.starterPromptFontSize
            ? `${props.starterPromptFontSize}px`
            : "15px"
        }}
        data-testid="host-bubble"
      >
        {props.prompt}
      </Typography>
    </Box>
  </>
);

export default StarterPromptBubble;
