import React, { useState, useEffect, useRef } from "react";
import {
  sendMessageQuery,
  isStreamAvailableQuery,
  IncomingInput,
  getChatbotConfig,
  FeedbackRatingType
} from "../utils/sendMessageQuery";
import { TextInput } from "./inputs";
import { GuestBubble } from "./bubbles/GuestBubble";
import { BotBubble } from "./bubbles/BotBubble";
import { LoadingBubble } from "./bubbles/LoadingBubble";
import { SourceBubble } from "./bubbles/SourceBubble";
import { StarterPromptBubble } from "./bubbles/StarterPromptBubble";
import {
  BotMessageTheme,
  FooterTheme,
  TextInputTheme,
  UserMessageTheme,
  FeedbackTheme
} from "../features/bubble/types";
import { Badge } from "./Badge";
import socketIOClient from "socket.io-client";
import { Popup } from "@/features/popup";
import { Avatar } from "@/components/avatars/Avatar";
import { DeleteButton, SendButton } from "@/components/buttons/SendButton";
import { CircleDotIcon, TrashIcon } from "./icons";
import { CancelButton } from "./buttons/CancelButton";
import {
  cancelAudioRecording,
  startAudioRecording,
  stopAudioRecording
} from "@/utils/audioRecording";
import { LeadCaptureBubble } from "@/components/bubbles/LeadCaptureBubble";
import {
  removeLocalStorageChatHistory,
  getLocalStorageChatflow,
  setLocalStorageChatflow
} from "@/utils";

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const defaultWelcomeMessage = "Hi there! How can I help?";

const Bot = (botProps) => {
  const chatContainerRef = useRef(null);
  const bottomSpacerRef = useRef(null);
  const botContainerRef = useRef(null);
  const audioRef = useRef(null);

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sourcePopupOpen, setSourcePopupOpen] = useState(false);
  const [sourcePopupSrc, setSourcePopupSrc] = useState({});
  const [messages, setMessages] = useState([
    {
      message: botProps.welcomeMessage ?? defaultWelcomeMessage,
      type: "apiMessage"
    }
  ]);

  const [socketIOClientId, setSocketIOClientId] = useState("");
  const [isChatFlowAvailableToStream, setIsChatFlowAvailableToStream] =
    useState(false);
  const [chatId, setChatId] = useState(
    botProps.chatflowConfig?.vars?.customerId
      ? `${botProps.chatflowConfig?.vars.customerId.toString()}+${uuidv4()}`
      : uuidv4()
  );
  const [starterPrompts, setStarterPrompts] = useState([]);
  const [chatFeedbackStatus, setChatFeedbackStatus] = useState(false);
  const [uploadsConfig, setUploadsConfig] = useState();
  const [leadsConfig, setLeadsConfig] = useState();
  const [isLeadSaved, setIsLeadSaved] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");

  const [previews, setPreviews] = useState([]);
  const [elapsedTime, setElapsedTime] = useState("00:00");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingNotSupported, setRecordingNotSupported] = useState(false);
  const [isLoadingRecording, setIsLoadingRecording] = useState(false);

  const [isDragActive, setIsDragActive] = useState(false);

  useEffect(() => {
    if (botProps?.observersConfig) {
      const { observeUserInput, observeLoading, observeMessages } =
        botProps.observersConfig;
      if (typeof observeUserInput === "function") {
        observeUserInput(userInput);
      }
      if (typeof observeLoading === "function") {
        observeLoading(loading);
      }
      if (typeof observeMessages === "function") {
        observeMessages(messages);
      }
    }

    if (bottomSpacerRef.current) {
      setTimeout(() => {
        chatContainerRef.current?.scrollTo(
          0,
          chatContainerRef.current.scrollHeight
        );
      }, 50);
    }
  }, [bottomSpacerRef, botProps]);

  const scrollToBottom = () => {
    setTimeout(() => {
      chatContainerRef.current?.scrollTo(
        0,
        chatContainerRef.current.scrollHeight
      );
    }, 50);
  };

  const addChatMessage = (allMessage) => {
    const formattedMessages = allMessage.map((item) => {
      if (item.fileUploads) {
        const fileUploads = item?.fileUploads.map((file) => ({
          type: file.type,
          name: file.name,
          mime: file.mime
        }));
        return { ...item, fileUploads };
      }
      return item;
    });
    setLocalStorageChatflow(botProps.chatflowid, chatId, {
      chatHistory: formattedMessages
    });
  };

  const playReceiveSound = () => {
    if (botProps.textInput?.receiveMessageSound) {
      let audioSrc =
        "https://cdn.jsdelivr.net/gh/FlowiseAI/FlowiseChatEmbed@latest/src/assets/receive_message.mp3";
      if (botProps.textInput?.receiveSoundLocation) {
        audioSrc = botProps.textInput?.receiveSoundLocation;
      }
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
    }
  };

  let hasSoundPlayed = false;

  const updateLastMessage = (
    text,
    messageId,
    sourceDocuments,
    fileAnnotations,
    agentReasoning = [],
    action,
    resultText
  ) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((item, i) => {
        if (i === prevMessages.length - 1) {
          if (resultText && !hasSoundPlayed) {
            playReceiveSound();
            hasSoundPlayed = true;
          }
          return {
            ...item,
            message: item.message + text,
            messageId,
            sourceDocuments,
            fileAnnotations,
            agentReasoning,
            action
          };
        }
        return item;
      });
      addChatMessage(updatedMessages);
      return [...updatedMessages];
    });

    if (resultText) {
      hasSoundPlayed = false;
    }
  };

  const updateLastMessageSourceDocuments = (sourceDocuments) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((item, i) => {
        if (i === prevMessages.length - 1) {
          return { ...item, sourceDocuments };
        }
        return item;
      });
      addChatMessage(updatedMessages);
      return [...updatedMessages];
    });
  };

  const updateLastMessageAgentReasoning = (agentReasoning) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((item, i) => {
        if (i === prevMessages.length - 1) {
          return {
            ...item,
            agentReasoning:
              typeof agentReasoning === "string"
                ? JSON.parse(agentReasoning)
                : agentReasoning
          };
        }
        return item;
      });
      addChatMessage(updatedMessages);
      return [...updatedMessages];
    });
  };

  const updateLastMessageAction = (action) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((item, i) => {
        if (i === prevMessages.length - 1) {
          return {
            ...item,
            action: typeof action === "string" ? JSON.parse(action) : action
          };
        }
        return item;
      });
      addChatMessage(updatedMessages);
      return [...updatedMessages];
    });
  };

  const clearPreviews = () => {
    previews.forEach((file) => URL.revokeObjectURL(file.preview));
    setPreviews([]);
  };

  const handleError = (
    message = "Oops! There seems to be an error. Please try again."
  ) => {
    setMessages((prevMessages) => {
      const errorMessage = botProps.errorMessage || message;
      const updatedMessages = [
        ...prevMessages,
        { message: errorMessage, type: "apiMessage" }
      ];
      addChatMessage(updatedMessages);
      return updatedMessages;
    });
    setLoading(false);
    setUserInput("");
    scrollToBottom();
  };

  const promptClick = (prompt) => {
    handleSubmit(prompt);
  };

  const handleSubmit = async (value, action) => {
    setUserInput(value);

    if (value.trim() === "") {
      const containsAudio =
        previews.filter((item) => item.type === "audio").length > 0;
      if (!(previews.length >= 1 && containsAudio)) {
        return;
      }
    }

    setLoading(true);
    scrollToBottom();

    const urls = previews.map((item) => {
      return {
        data: item.data,
        type: item.type,
        name: item.name,
        mime: item.mime
      };
    });

    clearPreviews();

    setMessages((prevMessages) => {
      const updatedMessages = [
        ...prevMessages,
        { message: value, type: "userMessage", fileUploads: urls }
      ];
      addChatMessage(updatedMessages);
      return updatedMessages;
    });

    const body = {
      question: value,
      chatId: chatId
    };

    if (urls && urls.length > 0) body.uploads = urls;

    if (botProps.chatflowConfig) body.overrideConfig = botProps.chatflowConfig;

    if (leadEmail) body.leadEmail = leadEmail;

    if (action) body.action = action;

    if (isChatFlowAvailableToStream) {
      body.socketIOClientId = socketIOClientId;
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: "", type: "apiMessage" }
      ]);
    }

    const result = await sendMessageQuery({
      chatflowid: botProps.chatflowid,
      apiHost: botProps.apiHost,
      body
    });

    if (result.data) {
      const data = result.data;
      const question = data.question;
      if (value === "" && question) {
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.map((item, i) => {
            if (i === prevMessages.length - 2) {
              return { ...item, message: question };
            }
            return item;
          });
          addChatMessage(updatedMessages);
          return [...updatedMessages];
        });
      }
      if (urls && urls.length > 0) {
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.map((item, i) => {
            if (i === prevMessages.length - 2) {
              if (item.fileUploads) {
                const fileUploads = item?.fileUploads.map((file) => ({
                  type: file.type,
                  name: file.name,
                  mime: file.mime
                }));
                return { ...item, fileUploads };
              }
            }
            return item;
          });
          addChatMessage(updatedMessages);
          return [...updatedMessages];
        });
      }
      if (!isChatFlowAvailableToStream) {
        let text = "";
        if (data.text) text = data.text;
        else if (data.json) text = JSON.stringify(data.json, null, 2);
        else text = JSON.stringify(data, null, 2);

        updateLastMessage(
          text,
          data?.chatMessageId,
          data?.sourceDocuments,
          data?.fileAnnotations,
          data?.agentReasoning,
          data?.action,
          data.text
        );
      } else {
        updateLastMessage(
          "",
          data?.chatMessageId,
          data?.sourceDocuments,
          data?.fileAnnotations,
          data?.agentReasoning,
          data?.action,
          data.text
        );
      }
      setLoading(false);
      setUserInput("");
      scrollToBottom();
    }
    if (result.error) {
      const error = result.error;
      console.error(error);
      if (typeof error === "object") {
        handleError(`Error: ${error?.message.replace("Error:", " ")}`);
        return;
      }
      if (typeof error === "string") {
        handleError(error);
        return;
      }
      handleError();
      return;
    }
  };

  const handleActionClick = async (label, action) => {
    setUserInput(label);
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((item, i) => {
        if (i === prevMessages.length - 1) {
          return { ...item, action: null };
        }
        return item;
      });
      addChatMessage(updatedMessages);
      return [...updatedMessages];
    });
    handleSubmit(label, action);
  };

  const clearChat = () => {
    try {
      removeLocalStorageChatHistory(botProps.chatflowid);
      setChatId(
        botProps.chatflowConfig?.vars?.customerId
          ? `${botProps.chatflowConfig?.vars.customerId.toString()}+${uuidv4()}`
          : uuidv4()
      );
      const initialMessages = [
        {
          message: botProps.welcomeMessage ?? defaultWelcomeMessage,
          type: "apiMessage"
        }
      ];
      if (
        leadsConfig?.status &&
        !getLocalStorageChatflow(botProps.chatflowid)?.lead
      ) {
        initialMessages.push({ message: "", type: "leadCaptureMessage" });
      }
      setMessages(initialMessages);
    } catch (error) {
      console.error(`Error clearing chat: ${error}`);
    }
  };

  useEffect(() => {
    if (botProps.starterPrompts && botProps.starterPrompts.length > 0) {
      const prompts = Object.values(botProps.starterPrompts).filter(
        (prompt) => prompt !== ""
      );
      setStarterPrompts(prompts);
    }
  }, [botProps.starterPrompts]);

  useEffect(() => {
    if (messages.length > 1) {
      setTimeout(() => {
        chatContainerRef.current?.scrollTo(
          0,
          chatContainerRef.current.scrollHeight
        );
      }, 400);
    }
  }, [messages]);

  useEffect(() => {
    if (botProps.fontSize && botContainerRef.current) {
      botContainerRef.current.style.fontSize = `${botProps.fontSize}px`;
    }
  }, [botProps.fontSize]);

  useEffect(() => {
    const chatMessage = getLocalStorageChatflow(botProps.chatflowid);
    if (chatMessage && Object.keys(chatMessage).length) {
      if (chatMessage.chatId) setChatId(chatMessage.chatId);
      const savedLead = chatMessage.lead;
      if (savedLead) {
        setIsLeadSaved(!!savedLead);
        setLeadEmail(savedLead.email);
      }
      const loadedMessages =
        chatMessage?.chatHistory?.length > 0
          ? chatMessage.chatHistory.map((message) => {
              const chatHistory = {
                messageId: message?.messageId,
                message: message.message,
                type: message.type,
                rating: message.rating
              };
              if (message.sourceDocuments)
                chatHistory.sourceDocuments = message.sourceDocuments;
              if (message.fileAnnotations)
                chatHistory.fileAnnotations = message.fileAnnotations;
              if (message.fileUploads)
                chatHistory.fileUploads = message.fileUploads;
              if (message.agentReasoning)
                chatHistory.agentReasoning = message.agentReasoning;
              if (message.action) chatHistory.action = message.action;
              return chatHistory;
            })
          : [
              {
                message: botProps.welcomeMessage ?? defaultWelcomeMessage,
                type: "apiMessage"
              }
            ];

      const filteredMessages = loadedMessages.filter(
        (message) =>
          message.message !== "" && message.type !== "leadCaptureMessage"
      );
      setMessages(filteredMessages);
    }

    const fetchStreamingStatus = async () => {
      const { data } = await isStreamAvailableQuery({
        chatflowid: botProps.chatflowid,
        apiHost: botProps.apiHost
      });

      if (data) {
        setIsChatFlowAvailableToStream(data?.isStreaming ?? false);
      }
    };

    const fetchChatbotConfig = async () => {
      const result = await getChatbotConfig({
        chatflowid: botProps.chatflowid,
        apiHost: botProps.apiHost
      });

      if (result.data) {
        const chatbotConfig = result.data;
        if (
          (!botProps.starterPrompts || botProps.starterPrompts?.length === 0) &&
          chatbotConfig.starterPrompts
        ) {
          const prompts = Object.values(chatbotConfig.starterPrompts).filter(
            (prompt) => prompt !== ""
          );
          setStarterPrompts(prompts);
        }
        if (chatbotConfig.chatFeedback) {
          setChatFeedbackStatus(chatbotConfig.chatFeedback.status);
        }
        if (chatbotConfig.uploads) {
          setUploadsConfig(chatbotConfig.uploads);
        }
        if (chatbotConfig.leads) {
          setLeadsConfig(chatbotConfig.leads);
          if (
            chatbotConfig.leads?.status &&
            !getLocalStorageChatflow(botProps.chatflowid)?.lead
          ) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { message: "", type: "leadCaptureMessage" }
            ]);
          }
        }
      }
    };

    fetchStreamingStatus();
    fetchChatbotConfig();

    const socket = socketIOClient(botProps.apiHost);

    socket.on("connect", () => {
      setSocketIOClientId(socket.id);
    });

    socket.on("start", () => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: "", type: "apiMessage" }
      ]);
    });

    socket.on("sourceDocuments", updateLastMessageSourceDocuments);

    socket.on("agentReasoning", updateLastMessageAgentReasoning);

    socket.on("action", updateLastMessageAction);

    socket.on("token", updateLastMessage);

    return () => {
      setUserInput("");
      setLoading(false);
      setMessages([
        {
          message: botProps.welcomeMessage ?? defaultWelcomeMessage,
          type: "apiMessage"
        }
      ]);
      if (socket) {
        socket.disconnect();
        setSocketIOClientId("");
      }
    };
  }, []);

  const isValidURL = (url) => {
    try {
      return new URL(url);
    } catch (err) {
      return undefined;
    }
  };

  const removeDuplicateURL = (message) => {
    const visitedURLs = [];
    const newSourceDocuments = [];

    message.sourceDocuments.forEach((source) => {
      if (
        isValidURL(source.metadata.source) &&
        !visitedURLs.includes(source.metadata.source)
      ) {
        visitedURLs.push(source.metadata.source);
        newSourceDocuments.push(source);
      } else if (!isValidURL(source.metadata.source)) {
        newSourceDocuments.push(source);
      }
    });
    return newSourceDocuments;
  };

  const addRecordingToPreviews = (blob) => {
    let mimeType = "";
    const pos = blob.type.indexOf(";");
    if (pos === -1) {
      mimeType = blob.type;
    } else {
      mimeType = blob.type.substring(0, pos);
    }

    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      const upload = {
        data: base64data,
        preview: "../assets/wave-sound.jpg",
        type: "audio",
        name: `audio_${Date.now()}.wav`,
        mime: mimeType
      };
      setPreviews((prevPreviews) => [...prevPreviews, upload]);
    };
  };

  const isFileAllowedForUpload = (file) => {
    let acceptFile = false;
    if (
      uploadsConfig &&
      uploadsConfig.isImageUploadAllowed &&
      uploadsConfig.imgUploadSizeAndTypes
    ) {
      const fileType = file.type;
      const sizeInMB = file.size / 1024 / 1024;
      uploadsConfig.imgUploadSizeAndTypes.map((allowed) => {
        if (
          allowed.fileTypes.includes(fileType) &&
          sizeInMB <= allowed.maxUploadSize
        ) {
          acceptFile = true;
        }
      });
    }
    if (!acceptFile) {
      alert(
        `Cannot upload file. Kindly check the allowed file types and maximum allowed size.`
      );
    }
    return acceptFile;
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const filesList = [];
    for (const file of files) {
      if (!isFileAllowedForUpload(file)) {
        return;
      }
      const reader = new FileReader();
      const { name } = file;
      filesList.push(
        new Promise((resolve) => {
          reader.onload = (evt) => {
            if (!evt?.target?.result) {
              return;
            }
            const { result } = evt.target;
            resolve({
              data: result,
              preview: URL.createObjectURL(file),
              type: "file",
              name: name,
              mime: file.type
            });
          };
          reader.readAsDataURL(file);
        })
      );
    }

    const newFiles = await Promise.all(filesList);
    setPreviews((prevPreviews) => [...prevPreviews, ...newFiles]);
  };

  const handleDrag = (e) => {
    if (uploadsConfig?.isImageUploadAllowed) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setIsDragActive(true);
      } else if (e.type === "dragleave") {
        setIsDragActive(false);
      }
    }
  };

  const handleDrop = async (e) => {
    if (!uploadsConfig?.isImageUploadAllowed) {
      return;
    }
    e.preventDefault();
    setIsDragActive(false);
    const files = [];
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      for (const file of e.dataTransfer.files) {
        if (!isFileAllowedForUpload(file)) {
          return;
        }
        const reader = new FileReader();
        const { name } = file;
        files.push(
          new Promise((resolve) => {
            reader.onload = (evt) => {
              if (!evt?.target?.result) {
                return;
              }
              const { result } = evt.target;
              let previewUrl;
              if (file.type.startsWith("audio/")) {
                previewUrl = "../assets/wave-sound.jpg";
              } else if (file.type.startsWith("image/")) {
                previewUrl = URL.createObjectURL(file);
              }
              resolve({
                data: result,
                preview: previewUrl,
                type: "file",
                name: name,
                mime: file.type
              });
            };
            reader.readAsDataURL(file);
          })
        );
      }

      const newFiles = await Promise.all(files);
      setPreviews((prevPreviews) => [...prevPreviews, ...newFiles]);
    }

    if (e.dataTransfer && e.dataTransfer.items) {
      for (const item of e.dataTransfer.items) {
        if (item.kind === "string" && item.type.match("^text/uri-list")) {
          item.getAsString((s) => {
            const upload = {
              data: s,
              preview: s,
              type: "url",
              name: s.substring(s.lastIndexOf("/") + 1),
              mime: ""
            };
            setPreviews((prevPreviews) => [...prevPreviews, upload]);
          });
        } else if (item.kind === "string" && item.type.match("^text/html")) {
          item.getAsString((s) => {
            if (s.indexOf("href") === -1) return;
            const start = s.substring(s.indexOf("href") + 6);
            const hrefStr = start.substring(0, start.indexOf('"'));

            const upload = {
              data: hrefStr,
              preview: hrefStr,
              type: "url",
              name: hrefStr.substring(hrefStr.lastIndexOf("/") + 1),
              mime: ""
            };
            setPreviews((prevPreviews) => [...prevPreviews, upload]);
          });
        }
      }
    }
  };

  const handleDeletePreview = (itemToDelete) => {
    if (itemToDelete.type === "file") {
      URL.revokeObjectURL(itemToDelete.preview);
    }
    setPreviews(previews.filter((item) => item !== itemToDelete));
  };

  const onMicrophoneClicked = () => {
    setIsRecording(true);
    startAudioRecording(
      setIsRecording,
      setRecordingNotSupported,
      setElapsedTime
    );
  };

  const onRecordingCancelled = () => {
    if (!recordingNotSupported) cancelAudioRecording();
    setIsRecording(false);
    setRecordingNotSupported(false);
  };

  const onRecordingStopped = async () => {
    setIsLoadingRecording(true);
    stopAudioRecording(addRecordingToPreviews);
  };

  const getInputDisabled = () => {
    const disabled =
      loading ||
      !botProps.chatflowid ||
      (leadsConfig?.status && !isLeadSaved) ||
      (messages[messages.length - 1].action &&
        Object.keys(messages[messages.length - 1].action).length > 0);
    return !!disabled;
  };

  useEffect(() => {
    const containsAudio =
      previews.filter((item) => item.type === "audio").length > 0;
    if (previews.length >= 1 && containsAudio) {
      setIsRecording(false);
      setRecordingNotSupported(false);
      promptClick("");
    }

    return () => {
      setPreviews([]);
    };
  }, [previews]);

  return (
    <>
      <div
        ref={botContainerRef}
        className={
          "relative flex w-full h-full text-base overflow-hidden bg-cover bg-center flex-col items-center chatbot-container " +
          botProps.class
        }
        onDragEnter={handleDrag}
      >
        {isDragActive && (
          <div
            className="absolute top-0 left-0 bottom-0 right-0 w-full h-full z-50"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragEnd={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
        {isDragActive && uploadsConfig?.isImageUploadAllowed && (
          <div
            className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm text-white z-40 gap-2 border-2 border-dashed"
            style={{ borderColor: botProps.bubbleBackgroundColor }}
          >
            <h2 className="text-xl font-semibold">Drop here to upload</h2>
            {uploadsConfig?.imgUploadSizeAndTypes.map((allowed) => (
              <React.Fragment key={allowed.fileTypes.join()}>
                <span>{allowed.fileTypes?.join(", ")}</span>
                <span>Max Allowed Size: {allowed.maxUploadSize} MB</span>
              </React.Fragment>
            ))}
          </div>
        )}

        {botProps.showTitle && (
          <div
            className="flex flex-row items-center w-full h-[50px] absolute top-0 left-0 z-10"
            style={{
              background: botProps.bubbleBackgroundColor,
              color: botProps.bubbleTextColor,
              borderTopLeftRadius: botProps.isFullPage ? "0px" : "6px",
              borderTopRightRadius: botProps.isFullPage ? "0px" : "6px"
            }}
          >
            {botProps.titleAvatarSrc && (
              <>
                <div style={{ width: "15px" }} />
                <Avatar initialAvatarSrc={botProps.titleAvatarSrc} />
              </>
            )}
            {botProps.title && (
              <span className="px-3 whitespace-pre-wrap font-semibold max-w-full">
                {botProps.title}
              </span>
            )}
            <div style={{ flex: 1 }} />
            <DeleteButton
              sendButtonColor={botProps.bubbleTextColor}
              type="button"
              isDisabled={messages.length === 1}
              className="my-2 ml-2"
              onClick={clearChat}
            >
              <span style={{ fontFamily: "Poppins, sans-serif" }}>Clear</span>
            </DeleteButton>
          </div>
        )}
        <div className="flex flex-col w-full h-full justify-start z-0">
          <div
            ref={chatContainerRef}
            className="overflow-y-scroll flex flex-col flex-grow min-w-full w-full px-3 pt-[70px] relative scrollable-container chatbot-chat-view scroll-smooth"
          >
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                {message.type === "userMessage" && (
                  <GuestBubble
                    message={message}
                    apiHost={botProps.apiHost}
                    chatflowid={botProps.chatflowid}
                    chatId={chatId}
                    backgroundColor={botProps.userMessage?.backgroundColor}
                    textColor={botProps.userMessage?.textColor}
                    showAvatar={botProps.userMessage?.showAvatar}
                    avatarSrc={botProps.userMessage?.avatarSrc}
                    fontSize={botProps.fontSize}
                  />
                )}
                {message.type === "apiMessage" && (
                  <BotBubble
                    message={message}
                    fileAnnotations={message.fileAnnotations}
                    chatflowid={botProps.chatflowid}
                    chatId={chatId}
                    apiHost={botProps.apiHost}
                    backgroundColor={botProps.botMessage?.backgroundColor}
                    textColor={botProps.botMessage?.textColor}
                    feedbackColor={botProps.feedback?.color}
                    showAvatar={botProps.botMessage?.showAvatar}
                    avatarSrc={botProps.botMessage?.avatarSrc}
                    chatFeedbackStatus={chatFeedbackStatus}
                    fontSize={botProps.fontSize}
                    isLoading={loading && index === messages.length - 1}
                    showAgentMessages={botProps.showAgentMessages}
                    handleActionClick={handleActionClick}
                  />
                )}
                {message.type === "leadCaptureMessage" &&
                  leadsConfig?.status &&
                  !getLocalStorageChatflow(botProps.chatflowid)?.lead && (
                    <LeadCaptureBubble
                      message={message}
                      chatflowid={botProps.chatflowid}
                      chatId={chatId}
                      apiHost={botProps.apiHost}
                      backgroundColor={botProps.botMessage?.backgroundColor}
                      textColor={botProps.botMessage?.textColor}
                      fontSize={botProps.fontSize}
                      showAvatar={botProps.botMessage?.showAvatar}
                      avatarSrc={botProps.botMessage?.avatarSrc}
                      leadsConfig={leadsConfig}
                      sendButtonColor={botProps.textInput?.sendButtonColor}
                      isLeadSaved={isLeadSaved}
                      setIsLeadSaved={setIsLeadSaved}
                      setLeadEmail={setLeadEmail}
                    />
                  )}
                {message.type === "userMessage" &&
                  loading &&
                  index === messages.length - 1 && <LoadingBubble />}
                {message.type === "apiMessage" &&
                  message.message === "" &&
                  loading &&
                  index === messages.length - 1 && <LoadingBubble />}
                {message.sourceDocuments && message.sourceDocuments.length && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      flexWrap: "wrap"
                    }}
                  >
                    {removeDuplicateURL(message).map((src, idx) => {
                      const URL = isValidURL(src.metadata.source);
                      return (
                        <SourceBubble
                          key={idx}
                          pageContent={URL ? URL.pathname : src.pageContent}
                          metadata={src.metadata}
                          onSourceClick={() => {
                            if (URL) {
                              window.open(src.metadata.source, "_blank");
                            } else {
                              setSourcePopupSrc(src);
                              setSourcePopupOpen(true);
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          {messages.length === 1 && starterPrompts.length > 0 && (
            <div className="w-full flex flex-row flex-wrap px-5 py-[10px] gap-2">
              {starterPrompts.map((key) => (
                <StarterPromptBubble
                  key={key}
                  prompt={key}
                  onPromptClick={() => promptClick(key)}
                  starterPromptFontSize={botProps.starterPromptFontSize}
                />
              ))}
            </div>
          )}
          {previews.length > 0 && (
            <div className="w-full flex items-center justify-start gap-2 px-5 pt-2 border-t border-[#eeeeee]">
              {previews.map((item, index) => (
                <React.Fragment key={index}>
                  {item.mime.startsWith("image/") ? (
                    <button
                      className="group w-12 h-12 flex items-center justify-center relative rounded-[10px] overflow-hidden transition-colors duration-200"
                      onClick={() => handleDeletePreview(item)}
                    >
                      <img
                        className="w-full h-full bg-cover"
                        src={item.data}
                        alt={item.name}
                      />
                      <span className="absolute hidden group-hover:flex items-center justify-center z-10 w-full h-full top-0 left-0 bg-black/10 rounded-[10px] transition-colors duration-200">
                        <TrashIcon />
                      </span>
                    </button>
                  ) : (
                    <div
                      className="inline-flex basis-auto flex-grow-0 flex-shrink-0 justify-between items-center rounded-xl h-12 p-1 mr-1 bg-gray-500"
                      style={{
                        width: botContainerRef.current
                          ? botProps.isFullPage
                            ? botContainerRef.current.offsetWidth / 4
                            : botContainerRef.current.offsetWidth / 2
                          : "200"
                      }}
                    >
                      <audio
                        className="block bg-cover bg-center w-full h-full rounded-none text-transparent"
                        controls
                        src={item.data}
                      />
                      <button
                        className="w-7 h-7 flex items-center justify-center bg-transparent p-1"
                        onClick={() => handleDeletePreview(item)}
                      >
                        <TrashIcon color="white" />
                      </button>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
          <div className="w-full px-5 pt-2 pb-1">
            {isRecording ? (
              recordingNotSupported ? (
                <div className="w-full flex items-center justify-between p-4 border border-[#eeeeee]">
                  <div className="w-full flex items-center justify-between gap-3">
                    <span className="text-base">
                      To record audio, use modern browsers like Chrome or
                      Firefox that support audio recording.
                    </span>
                    <button
                      className="py-2 px-4 justify-center flex items-center bg-red-500 text-white rounded-md"
                      type="button"
                      onClick={onRecordingCancelled}
                    >
                      Okay
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="h-[58px] flex items-center justify-between chatbot-input border border-[#eeeeee]"
                  data-testid="input"
                  style={{
                    margin: "auto",
                    backgroundColor:
                      botProps.textInput?.backgroundColor ?? "#ffffff",
                    color: botProps.textInput?.textColor ?? "#303235"
                  }}
                >
                  <div className="flex items-center gap-3 px-4 py-2">
                    <span>
                      <CircleDotIcon color="red" />
                    </span>
                    <span>{elapsedTime || "00:00"}</span>
                    {isLoadingRecording && (
                      <span className="ml-1.5">Sending...</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <CancelButton
                      buttonColor={botProps.textInput?.sendButtonColor}
                      type="button"
                      className="m-0"
                      onClick={onRecordingCancelled}
                    >
                      <span style={{ fontFamily: "Poppins, sans-serif" }}>
                        Cancel
                      </span>
                    </CancelButton>
                    <SendButton
                      sendButtonColor={botProps.textInput?.sendButtonColor}
                      type="button"
                      isDisabled={loading}
                      className="m-0"
                      onClick={onRecordingStopped}
                    >
                      <span style={{ fontFamily: "Poppins, sans-serif" }}>
                        Send
                      </span>
                    </SendButton>
                  </div>
                </div>
              )
            ) : (
              <TextInput
                backgroundColor={botProps.textInput?.backgroundColor}
                textColor={botProps.textInput?.textColor}
                placeholder={botProps.textInput?.placeholder}
                sendButtonColor={botProps.textInput?.sendButtonColor}
                maxChars={botProps.textInput?.maxChars}
                maxCharsWarningMessage={
                  botProps.textInput?.maxCharsWarningMessage
                }
                autoFocus={botProps.textInput?.autoFocus}
                fontSize={botProps.fontSize}
                disabled={getInputDisabled()}
                defaultValue={userInput}
                onSubmit={handleSubmit}
                uploadsConfig={uploadsConfig}
                setPreviews={setPreviews}
                onMicrophoneClicked={onMicrophoneClicked}
                handleFileChange={handleFileChange}
                sendMessageSound={botProps.textInput?.sendMessageSound}
                sendSoundLocation={botProps.textInput?.sendSoundLocation}
              />
            )}
          </div>
          <Badge
            footer={botProps.footer}
            badgeBackgroundColor={botProps.badgeBackgroundColor}
            poweredByTextColor={botProps.poweredByTextColor}
            botContainer={botContainerRef.current}
          />
        </div>
      </div>
      {sourcePopupOpen && (
        <Popup
          isOpen={sourcePopupOpen}
          value={sourcePopupSrc}
          onClose={() => setSourcePopupOpen(false)}
        />
      )}
    </>
  );
};

export default Bot;
