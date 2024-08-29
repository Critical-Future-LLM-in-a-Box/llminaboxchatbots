import { Box, Typography } from "@mui/material";

type Props = {
  pageContent: string;
  metadata: object;
  onSourceClick?: () => void;
};

export const SourceBubble = (props: Props) => (
  <>
    <Box
      component="div"
      sx={{
        "display": "flex",
        "justifyContent": "start",
        "marginBottom": 2,
        "alignItems": "start",
        "animation": "fade-in 0.3s",
        "&:hover": {
          filter: "brightness(90%)"
        },
        "&:active": {
          filter: "brightness(75%)"
        }
      }}
      onClick={() => props.onSourceClick?.()}
    >
      <Typography
        component="span"
        sx={{
          paddingX: 2,
          paddingY: 1,
          marginLeft: 1,
          whiteSpace: "pre-wrap",
          maxWidth: "100%",
          fontFamily: "inherit",
          fontSize: "13px",
          borderRadius: "15px",
          cursor: "pointer",
          textOverflow: "ellipsis",
          overflow: "hidden",
          textTransform: "none"
        }}
        data-testid="host-bubble"
      >
        {props.pageContent}
      </Typography>
    </Box>
  </>
);
