import { useEffect, useRef } from "react";
import { FooterTheme } from "../features/bubble/types";

type Props = {
  footer?: FooterTheme;
  botContainer: HTMLDivElement | undefined;
  poweredByTextColor?: string;
  badgeBackgroundColor?: string;
};

const defaultTextColor = "#303235";

export const Badge = (props: Props) => {
  const liteBadgeRef = useRef<HTMLAnchorElement>(null);
  let observer: MutationObserver | undefined;

  const appendBadgeIfNecessary = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((removedNode) => {
        if (
          "id" in removedNode &&
          liteBadgeRef.current &&
          removedNode.id === "lite-badge"
        ) {
          console.log("Sorry, you can't remove the brand 😅");
          props.botContainer?.append(liteBadgeRef.current);
        }
      });
    });
  };

  useEffect(() => {
    if (!document || !props.botContainer) return;
    observer = new MutationObserver(appendBadgeIfNecessary);
    observer.observe(props.botContainer, {
      subtree: false,
      childList: true
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, [props.botContainer]);

  return (
    <>
      {props.footer?.showFooter === undefined ||
      props.footer?.showFooter === null ||
      props.footer?.showFooter === true ? (
        <span
          className="w-full text-center px-[10px] pt-[6px] pb-[10px] m-auto text-[13px]"
          style={{
            color:
              props.footer?.textColor ??
              props.poweredByTextColor ??
              defaultTextColor,
            backgroundColor: props.badgeBackgroundColor ?? "#ffffff"
          }}
        >
          {props.footer?.text ?? "Powered by"}
          <a
            ref={liteBadgeRef}
            href={props.footer?.companyLink ?? "https://flowiseai.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="lite-badge"
            id="lite-badge"
            style={{
              fontWeight: "bold",
              color:
                props.footer?.textColor ??
                props.poweredByTextColor ??
                defaultTextColor
            }}
          >
            <span>&nbsp;{props.footer?.company ?? "Flowise"}</span>
          </a>
        </span>
      ) : (
        <span
          className="w-full text-center px-[10px] pt-[6px] pb-[10px] m-auto text-[13px]"
          style={{
            color:
              props.footer?.textColor ??
              props.poweredByTextColor ??
              defaultTextColor,
            backgroundColor: props.badgeBackgroundColor ?? "#ffffff"
          }}
        />
      )}
    </>
  );
};
