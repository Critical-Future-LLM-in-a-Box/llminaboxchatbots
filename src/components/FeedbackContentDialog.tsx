import React, { useState, useRef } from "react";

type FeedbackContentDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
  backgroundColor?: string;
  textColor?: string;
};

const defaultBackgroundColor = "#ffffff";
const defaultTextColor = "#303235";

const FeedbackContentDialog: React.FC<FeedbackContentDialogProps> = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const checkIfInputIsValid = () =>
    inputValue !== "" && inputRef.current?.reportValidity();

  const submit = () => {
    if (checkIfInputIsValid()) {
      props.onSubmit(inputValue);
    }
    setInputValue("");
  };

  const onClose = () => {
    props.onClose();
  };

  return (
    <>
      <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1002] outline-none focus:outline-none justify-center items-center">
        <div className="relative w-full my-6 max-w-3xl mx-4">
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            style={{
              backgroundColor: props.backgroundColor ?? defaultBackgroundColor,
              color: props.textColor ?? defaultTextColor
            }}
          >
            <div
              className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
              style={{
                border: "1px solid #eeeeee"
              }}
            >
              <span className="whitespace-pre-wrap font-semibold max-w-full">
                Provide additional feedback
              </span>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                type="button"
                onClick={onClose}
              >
                <span className="bg-transparent block outline-none focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black h-6 w-6"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <textarea
                onInput={handleInput}
                ref={inputRef}
                rows={4}
                className="block p-2.5 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-transparent flex-1 w-full feedback-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 font-normal"
                style={{
                  border: "1px solid #eeeeee",
                  color: props.textColor ?? defaultTextColor
                }}
                placeholder="What do you think of the response?"
                value={inputValue}
              />
            </div>
            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={submit}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex opacity-25 fixed inset-0 z-[1001] bg-black" />
    </>
  );
};

export default FeedbackContentDialog;
