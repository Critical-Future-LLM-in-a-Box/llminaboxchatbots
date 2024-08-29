import { useEffect, useState } from "react";
import { isMobile, isNotEmpty } from "../utils/utils";
import PersonIcon from "@mui/icons-material/Person";

export const Avatar = (props: { initialAvatarSrc?: string }) => {
  const [avatarSrc, setAvatarSrc] = useState(props.initialAvatarSrc);

  useEffect(() => {
    if (
      avatarSrc?.startsWith("{{") &&
      props.initialAvatarSrc?.startsWith("http")
    ) {
      setAvatarSrc(props.initialAvatarSrc);
    }
  }, [avatarSrc, props.initialAvatarSrc]);

  return (
    <div>
      <figure
        className={
          "flex justify-center items-center rounded-full text-white relative flex-shrink-0 " +
          (isMobile() ? "w-6 h-6 text-sm" : "w-10 h-10 text-xl")
        }
      >
        {isNotEmpty(avatarSrc) ? (
          <img
            src={avatarSrc}
            alt="Bot avatar"
            className="rounded-full object-cover w-full h-full"
          />
        ) : (
          <PersonIcon />
        )}
      </figure>
    </div>
  );
};
