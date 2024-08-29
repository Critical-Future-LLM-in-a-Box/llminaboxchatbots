import { TypingBubble } from "../TypingBubble";
import { Box } from "@mui/material";

export const LoadingBubble = () => (
  <Box
    className="flex justify-start mb-2 items-start animate-fade-in host-container"
    component="div"
    data-testid="host-bubble"
    sx={{
      px: 4,
      py: 4,
      ml: 2,
      whiteSpace: "pre-wrap",
      maxWidth: "100%",
      bgcolor: "primary.main"
    }}
  >
    <TypingBubble />
  </Box>
);
