import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useContextData } from "@/context";

export default function ChatbotFooter(): JSX.Element {
  const [chatData] = useContextData();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        bgcolor: chatData.config.ui?.backgroundColor
      }}
    >
      <Typography
        typography={"caption"}
        sx={{
          color: chatData.config.ui?.foregroundColor
        }}
      >
        &copy; {new Date().getFullYear()} LLMINABOX. Made by{" "}
        <Link
          href="https://criticalfutureglobal.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "primary.main",
            textDecoration: "none"
          }}
        >
          CriticalFuture
        </Link>
      </Typography>
    </Box>
  );
}
