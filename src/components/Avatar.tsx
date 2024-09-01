import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { cn } from "../utils";

interface AvatarComponentProps {
  className?: string;
}

const StyledAvatar = styled(Avatar)`
  &.custom-avatar {
    width: 40px;
    height: 40px;
  }
`;

const AvatarComponent = React.forwardRef<HTMLDivElement, AvatarComponentProps>(
  ({ className, ...props }, ref) => (
    <StyledAvatar
      ref={ref}
      className={cn("relative", className)}
      {...props}
    />
  )
);
AvatarComponent.displayName = "Avatar";

interface AvatarImageProps {
  className?: string;
}

const AvatarImage = React.forwardRef<HTMLDivElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <StyledAvatar
      ref={ref}
      className={cn("aspect-square", className)}
      {...props}
    />
  )
);
AvatarImage.displayName = "AvatarImage";

interface AvatarFallbackProps {
  className?: string;
}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <StyledAvatar
      ref={ref}
      className={cn("flex items-center justify-center", className)}
      {...props}
    />
  )
);
AvatarFallback.displayName = "AvatarFallback";

export { AvatarComponent as Avatar, AvatarImage, AvatarFallback };
