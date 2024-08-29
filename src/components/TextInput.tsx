import React, { useState, useEffect, useRef } from "react";
import { isMobile } from "../utils/utils";
import { SendButton } from "./buttons/SendButton";
import { ImageUploadButton } from "./buttons/ImageUploadButton";
import { RecordAudioButton } from "./buttons/RecordAudioButton";

type Props = {
  placeholder?: string;
  backgroundColor?: string;
  textColor?: string;
  sendButtonColor?: string;
  defaultValue?: string;
  fontSize?: number;
  disabled?: boolean;
  onSubmit: (value: string) => void;
  uploadsConfig?: Partial<UploadsConfig>;
  setPreviews: React.Dispatch<React.SetStateAction<unknown[]>>;
  onMicrophoneClicked: () => void;
  handleFileChange: () => void;
  maxChars?: number;
  maxCharsWarningMessage?: string;
  autoFocus?: boolean;
  sendMessageSound?: boolean;
  sendSoundLocation?: string;
};

const defaultBackgroundColor = "#ffffff";
const defaultTextColor = "#303235";
// CDN link for default send sound
const defaultSendSound =
  "https://cdn.jsdelivr.net/gh/FlowiseAI/FlowiseChatEmbed@latest/src/assets/send_message.mp3";

const DEFAULT_HEIGHT = 56;

type ShortTextInputProps = {
  onInput: (value: string) => void;
  fontSize?: number;
  disabled?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ShortTextInput = (props: ShortTextInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      if (e.currentTarget.value === "") {
        // reset height when value is empty
        setHeight(DEFAULT_HEIGHT);
      } else {
        setHeight(e.currentTarget.scrollHeight - 24);
      }
      e.currentTarget.scrollTo(0, e.currentTarget.scrollHeight);
      props.onInput(e.currentTarget.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle Shift + Enter new line
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.value += "\n";
      handleInput(e as unknown as React.ChangeEvent<HTMLTextAreaElement>);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      className="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full h-full min-h-[56px] max-h-[128px] text-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100"
      disabled={props.disabled}
      style={{
        fontSize: props.fontSize ? `${props.fontSize}px` : "16px",
        resize: "none",
        height: `${props.value !== "" ? height : DEFAULT_HEIGHT}px`
      }}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};

export const TextInput = (props: Props) => {
  const [inputValue, setInputValue] = useState(props.defaultValue ?? "");
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleInput = (inputValue: string) => {
    const wordCount = inputValue.length;

    if (props.maxChars && wordCount > props.maxChars) {
      setWarningMessage(
        props.maxCharsWarningMessage ??
          `You exceeded the characters limit. Please input less than ${props.maxChars} characters.`
      );
      setIsSendButtonDisabled(true);
      return;
    }

    setInputValue(inputValue);
    setWarningMessage("");
    setIsSendButtonDisabled(false);
  };

  const checkIfInputIsValid = () =>
    inputValue !== "" &&
    warningMessage === "" &&
    inputRef.current?.reportValidity();

  const submit = () => {
    if (checkIfInputIsValid()) {
      props.onSubmit(inputValue);
      if (props.sendMessageSound && audioRef.current) {
        audioRef.current.play();
      }
      setInputValue("");
    }
  };

  const submitWhenEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const isIMEComposition = e.isComposing || e.keyCode === 229;
    if (e.key === "Enter" && !isIMEComposition && warningMessage === "")
      submit();
  };

  const handleImageUploadClick = () => {
    if (fileUploadRef.current) fileUploadRef.current.click();
  };

  useEffect(() => {
    const shouldAutoFocus =
      props.autoFocus !== undefined
        ? props.autoFocus
        : !isMobile() && window.innerWidth > 640;

    if (!props.disabled && shouldAutoFocus && inputRef.current)
      inputRef.current.focus();
  }, [props.autoFocus, props.disabled]);

  useEffect(() => {
    const shouldAutoFocus =
      props.autoFocus !== undefined
        ? props.autoFocus
        : !isMobile() && window.innerWidth > 640;

    if (!props.disabled && shouldAutoFocus && inputRef.current)
      inputRef.current.focus();

    if (props.sendMessageSound) {
      if (props.sendSoundLocation) {
        audioRef.current = new Audio(props.sendSoundLocation);
      } else {
        audioRef.current = new Audio(defaultSendSound);
      }
    }
  }, [
    props.autoFocus,
    props.disabled,
    props.sendMessageSound,
    props.sendSoundLocation
  ]);

  const handleFileChange = (event: FileEvent<HTMLInputElement>) => {
    props.handleFileChange(event);
    if (event.target) event.target.value = "";
  };

  return (
    <div
      className="w-full h-auto max-h-[192px] min-h-[56px] flex flex-col items-end justify-between chatbot-input border border-[#eeeeee]"
      data-testid="input"
      style={{
        margin: "auto",
        backgroundColor: props.backgroundColor ?? defaultBackgroundColor,
        color: props.textColor ?? defaultTextColor
      }}
      onKeyDown={submitWhenEnter}
    >
      {warningMessage !== "" && (
        <div
          className="w-full px-4 pt-4 pb-1 text-red-500 text-sm"
          data-testid="warning-message"
        >
          {warningMessage}
        </div>
      )}
      <div className="w-full flex items-end justify-between">
        {props.uploadsConfig?.isImageUploadAllowed && (
          <>
            <ImageUploadButton
              buttonColor={props.sendButtonColor}
              type="button"
              className="m-0 h-14 flex items-center justify-center"
              isDisabled={props.disabled || isSendButtonDisabled}
              onClick={handleImageUploadClick}
            >
              <span style={{ fontFamily: "Poppins, sans-serif" }}>
                Image Upload
              </span>
            </ImageUploadButton>
            <input
              style={{ display: "none" }}
              multiple
              ref={fileUploadRef}
              type="file"
              onChange={handleFileChange}
            />
          </>
        )}
        <ShortTextInput
          ref={inputRef}
          onInput={handleInput}
          value={inputValue}
          fontSize={props.fontSize}
          disabled={props.disabled}
          placeholder={props.placeholder ?? "Type your question"}
        />
        {props.uploadsConfig?.isSpeechToTextEnabled && (
          <RecordAudioButton
            buttonColor={props.sendButtonColor}
            type="button"
            className="m-0 start-recording-button h-14 flex items-center justify-center"
            isDisabled={props.disabled || isSendButtonDisabled}
            onClick={props.onMicrophoneClicked}
          >
            <span style={{ fontFamily: "Poppins, sans-serif" }}>
              Record Audio
            </span>
          </RecordAudioButton>
        )}
        <SendButton
          sendButtonColor={props.sendButtonColor}
          type="button"
          isDisabled={props.disabled || isSendButtonDisabled}
          className="m-0 h-14 flex items-center justify-center"
          onClick={submit}
        >
          <span style={{ fontFamily: "Poppins, sans-serif" }}>Send</span>
        </SendButton>
      </div>
    </div>
  );
};
