import React, { memo } from "react";
import { Box, Typography, Link } from "@mui/material";
import { useContextData } from "@/context";

const ChatbotFooter = (): JSX.Element => {
  const [chatData] = useContextData();

  const { backgroundColor, foregroundColor } = chatData.config.ui || {};

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        bgcolor: backgroundColor
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: foregroundColor
        }}
      >
        &copy; {new Date().getFullYear()} LLMINABOX. Made by{" "}
        <Link
          href="https://criticalfutureglobal.com/"
          target="_blank"
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
};

// Memoized export to prevent unnecessary re-renders
export default memo(ChatbotFooter);
