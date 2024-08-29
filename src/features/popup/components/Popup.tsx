import React, { useState, useEffect } from "react";
import { isNotDefined } from "../../../utils/utils";

export type PopupProps = {
  value?: any;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

function syntaxHighlight(json: any) {
  if (typeof json !== "string") {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // eslint-disable-next-line
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match: string) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}

export const Popup: React.FC<PopupProps> = (props) => {
  const [isBotOpened, setIsBotOpened] = useState(props.isOpen ?? false);

  useEffect(() => {
    if (props.value) {
      const preEl = document.getElementById("popup-pre");
      if (preEl) {
        preEl.innerHTML = syntaxHighlight(
          JSON.stringify(props.value, undefined, 2)
        );
      }
    }
  }, [props.value]);

  useEffect(() => {
    if (isNotDefined(props.isOpen) || props.isOpen === isBotOpened) return;
    toggleBot();
  }, [props.isOpen]);

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const openBot = () => {
    setIsBotOpened(true);
    props.onOpen?.();
    document.body.style.overflow = "hidden";
  };

  const closeBot = () => {
    setIsBotOpened(false);
    props.onClose?.();
    document.body.style.overflow = "auto";
  };

  const toggleBot = () => {
    isBotOpened ? closeBot() : openBot();
  };

  return (
    <>
      {isBotOpened && (
        <>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            style={{ zIndex: 1100 }}
            onClick={closeBot}
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity animate-fade-in" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <div
                  className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  style={{
                    backgroundColor: "transparent",
                    marginLeft: "20px",
                    marginRight: "20px"
                  }}
                  onClick={stopPropagation}
                  onPointerDown={stopPropagation}
                >
                  {props.value && (
                    <div
                      style={{
                        background: "white",
                        margin: "auto",
                        padding: "7px"
                      }}
                    >
                      <pre id="popup-pre" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
