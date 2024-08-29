import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "../Avatar";
import { Marked } from "@ts-stack/markdown";
import {
  FeedbackRatingType,
  sendFeedbackQuery,
  sendFileDownloadQuery,
  updateFeedbackQuery
} from "@/queries/sendMessageQuery";
import { IAction, MessageType } from "../Bot";
import {
  CopyToClipboardButton,
  ThumbsDownButton,
  ThumbsUpButton
} from "../buttons/FeedbackButtons";
import FeedbackContentDialog from "../FeedbackContentDialog";
import { AgentReasoningBubble } from "./AgentReasoningBubble";
import { TickIcon, XIcon } from "../icons";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";

const StyledBotBubble = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  marginBottom: theme.spacing(2),
  alignItems: "start",
  marginRight: "50px"
}));

const StyledBubbleContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start"
}));

const StyledBubbleMessage = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  maxWidth: "100%"
}));

const StyledFeedbackButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginLeft: (props) => (props.showAvatar ? theme.spacing(10) : 0)
}));

const StyledCopiedMessage = styled(Typography)(({ theme }) => ({
  color: (props) => props.feedbackColor || "#3B81F6"
}));

const StyledFeedbackContentDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: (props) => props.backgroundColor || "#f7f8ff",
    color: (props) => props.textColor || "#303235"
  }
}));

type Props = {
  message: MessageType;
  chatflowid: string;
  chatId: string;
  apiHost?: string;
  fileAnnotations?: any;
  showAvatar?: boolean;
  avatarSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  chatFeedbackStatus?: boolean;
  fontSize?: number;
  feedbackColor?: string;
  isLoading: boolean;
  showAgentMessages?: boolean;
  handleActionClick: (
    label: string,
    action: IAction | undefined | null
  ) => void;
};

const defaultBackgroundColor = "#f7f8ff";
const defaultTextColor = "#303235";
const defaultFontSize = 16;
const defaultFeedbackColor = "#3B81F6";

Marked.setOptions({ isNoP: true });

export const BotBubble: React.FC<Props> = (props) => {
  const botMessageEl = useRef<HTMLDivElement>(null);
  const botDetailsEl = useRef<HTMLDetailsElement>(null);

  const [rating, setRating] = useState("");
  const [feedbackId, setFeedbackId] = useState("");
  const [showFeedbackContentDialog, setShowFeedbackContentModal] =
    useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [thumbsUpColor, setThumbsUpColor] = useState(
    props.feedbackColor ?? defaultFeedbackColor
  ); // default color
  const [thumbsDownColor, setThumbsDownColor] = useState(
    props.feedbackColor ?? defaultFeedbackColor
  ); // default color

  const downloadFile = async (fileAnnotation: any) => {
    try {
      const response = await sendFileDownloadQuery({
        apiHost: props.apiHost,
        body: { question: "", fileName: fileAnnotation.fileName }
      });
      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileAnnotation.fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const copyMessageToClipboard = async () => {
    try {
      const text = botMessageEl.current?.textContent;
      await navigator.clipboard.writeText(text || "");
      setCopiedMessage(true);
      setTimeout(() => {
        setCopiedMessage(false);
      }, 2000); // Hide the message after 2 seconds
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const saveToLocalStorage = (rating: FeedbackRatingType) => {
    const chatDetails = localStorage.getItem(`${props.chatflowid}_EXTERNAL`);
    if (!chatDetails) return;
    try {
      const parsedDetails = JSON.parse(chatDetails);
      const messages: MessageType[] = parsedDetails.chatHistory || [];
      const message = messages.find(
        (msg) => msg.messageId === props.message.messageId
      );
      if (!message) return;
      message.rating = rating;
      localStorage.setItem(
        `${props.chatflowid}_EXTERNAL`,
        JSON.stringify({ ...parsedDetails, chatHistory: messages })
      );
    } catch (e) {
      return;
    }
  };

  const onThumbsUpClick = async () => {
    if (rating === "") {
      const body = {
        chatflowid: props.chatflowid,
        chatId: props.chatId,
        messageId: props.message?.messageId as string,
        rating: "THUMBS_UP" as FeedbackRatingType,
        content: ""
      };
      const result = await sendFeedbackQuery({
        chatflowid: props.chatflowid,
        apiHost: props.apiHost,
        body
      });

      if (result.data) {
        const data = result.data as any;
        let id = "";
        if (data && data.id) id = data.id;
        setRating("THUMBS_UP");
        setFeedbackId(id);
        setShowFeedbackContentModal(true);
        // update the thumbs up color state
        setThumbsUpColor("#006400");
        saveToLocalStorage("THUMBS_UP");
      }
    }
  };

  const onThumbsDownClick = async () => {
    if (rating === "") {
      const body = {
        chatflowid: props.chatflowid,
        chatId: props.chatId,
        messageId: props.message?.messageId as string,
        rating: "THUMBS_DOWN" as FeedbackRatingType,
        content: ""
      };
      const result = await sendFeedbackQuery({
        chatflowid: props.chatflowid,
        apiHost: props.apiHost,
        body
      });

      if (result.data) {
        const data = result.data as any;
        let id = "";
        if (data && data.id) id = data.id;
        setRating("THUMBS_DOWN");
        setFeedbackId(id);
        setShowFeedbackContentModal(true);
        // update the thumbs down color state
        setThumbsDownColor("#8B0000");
        saveToLocalStorage("THUMBS_DOWN");
      }
    }
  };

  const submitFeedbackContent = async (text: string) => {
    const body = {
      content: text
    };
    const result = await updateFeedbackQuery({
      id: feedbackId,
      apiHost: props.apiHost,
      body
    });

    if (result.data) {
      setFeedbackId("");
      setShowFeedbackContentModal(false);
    }
  };

  useEffect(() => {
    if (botMessageEl.current) {
      botMessageEl.current.innerHTML = Marked.parse(props.message.message);
      botMessageEl.current.querySelectorAll("a").forEach((link) => {
        link.target = "_blank";
      });
      if (props.message.rating) {
        setRating(props.message.rating);
        if (props.message.rating === "THUMBS_UP") {
          setThumbsUpColor("#006400");
        } else if (props.message.rating === "THUMBS_DOWN") {
          setThumbsDownColor("#8B0000");
        }
      }
      if (props.fileAnnotations && props.fileAnnotations.length) {
        for (const annotations of props.fileAnnotations) {
          const button = document.createElement("button");
          button.textContent = annotations.fileName;
          button.className =
            "py-2 px-4 mb-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 file-annotation-button";
          button.addEventListener("click", function () {
            downloadFile(annotations);
          });
          const svgContainer = document.createElement("div");
          svgContainer.className = "ml-2";
          svgContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>`;

          button.appendChild(svgContainer);
          botMessageEl.current.appendChild(button);
        }
      }
    }

    if (botDetailsEl.current && props.isLoading) {
      botDetailsEl.current.open = true;
    }
  }, []);

  useEffect(() => {
    if (botDetailsEl.current && props.isLoading) {
      botDetailsEl.current.open = true;
    } else if (botDetailsEl.current && !props.isLoading) {
      botDetailsEl.current.open = false;
    }
  }, [props.isLoading]);

  return (
    <div>
      <StyledBotBubble>
        {props.showAvatar && <Avatar initialAvatarSrc={props.avatarSrc} />}
        <StyledBubbleContent>
          {props.showAgentMessages && props.message.agentReasoning && (
            <details
              ref={botDetailsEl}
              className="mb-2 px-4 py-2 ml-2 chatbot-host-bubble rounded-[6px]"
            >
              <summary className="cursor-pointer">
                <span className="italic">Agent Messages</span>
              </summary>
              <br />
              {props.message.agentReasoning.map((agent) => {
                const agentMessages = agent.messages ?? [];
                let msgContent =
                  agent.instructions ||
                  (agentMessages.length > 1
                    ? agentMessages.join("\\n")
                    : agentMessages[0]);
                if (agentMessages.length === 0 && !agent.instructions)
                  msgContent = "<p>Finished</p>";
                return (
                  <AgentReasoningBubble
                    agentName={agent.agentName ?? ""}
                    agentMessage={msgContent}
                    backgroundColor={props.backgroundColor}
                    textColor={props.textColor}
                    fontSize={props.fontSize}
                  />
                );
              })}
            </details>
          )}
          {props.message.message && (
            <StyledBubbleMessage
              ref={botMessageEl}
              data-testid="host-bubble"
              sx={{
                backgroundColor:
                  props.backgroundColor || defaultBackgroundColor,
                color: props.textColor || defaultTextColor,
                borderRadius: "6px",
                fontSize: props.fontSize
                  ? `${props.fontSize}px`
                  : `${defaultFontSize}px`
              }}
            />
          )}
          {props.message.action && (
            <Box
              sx={{
                px: 4,
                py: 2,
                display: "flex",
                justifyContent: "start",
                spaceX: 2
              }}
            >
              {props.message.action.elements?.map((action) => {
                return (
                  <>
                    {action.type === "approve-button" ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() =>
                          props.handleActionClick(
                            action.label,
                            props.message.action
                          )
                        }
                      >
                        <TickIcon />
                        &nbsp;
                        {action.label}
                      </Button>
                    ) : action.type === "reject-button" ? (
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() =>
                          props.handleActionClick(
                            action.label,
                            props.message.action
                          )
                        }
                      >
                        <XIcon isCurrentColor={true} />
                        &nbsp;
                        {action.label}
                      </Button>
                    ) : (
                      <Button>{action.label}</Button>
                    )}
                  </>
                );
              })}
            </Box>
          )}
        </StyledBubbleContent>
      </StyledBotBubble>
      <div>
        {props.chatFeedbackStatus && props.message.messageId && (
          <>
            <StyledFeedbackButtons showAvatar={props.showAvatar}>
              <CopyToClipboardButton
                feedbackColor={props.feedbackColor}
                onClick={() => copyMessageToClipboard()}
              />
              {copiedMessage && (
                <StyledCopiedMessage feedbackColor={props.feedbackColor}>
                  Copied!
                </StyledCopiedMessage>
              )}
              {(rating === "" || rating === "THUMBS_UP") && (
                <ThumbsUpButton
                  feedbackColor={thumbsUpColor}
                  isDisabled={rating === "THUMBS_UP"}
                  rating={rating}
                  onClick={onThumbsUpClick}
                />
              )}
              {(rating === "" || rating === "THUMBS_DOWN") && (
                <ThumbsDownButton
                  feedbackColor={thumbsDownColor}
                  isDisabled={rating === "THUMBS_DOWN"}
                  rating={rating}
                  onClick={onThumbsDownClick}
                />
              )}
            </StyledFeedbackButtons>
            {showFeedbackContentDialog && (
              <StyledFeedbackContentDialog
                open={showFeedbackContentDialog}
                onClose={() => setShowFeedbackContentModal(false)}
                backgroundColor={props.backgroundColor}
                textColor={props.textColor}
              >
                <DialogTitle>Feedback Content</DialogTitle>
                <DialogContent>
                  <FeedbackContentDialog onSubmit={submitFeedbackContent} />
                </DialogContent>
              </StyledFeedbackContentDialog>
            )}
          </>
        )}
      </div>
    </div>
  );
};
