import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { cn } from "../utils";

const StyledAvatar = styled(Avatar)`
  &.custom-avatar {
    width: 40px;
    height: 40px;
  }
`;

export const AvatarComponent = React.forwardRef<
  HTMLDivElement,
  { [key: string]: string | any }
>(({ className, ...props }, ref) => (
  <StyledAvatar
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
));

export const AvatarImage = React.forwardRef<
  HTMLDivElement,
  { [key: string]: string | any }
>(({ className, ...props }, ref) => (
  <StyledAvatar
    ref={ref}
    className={cn("aspect-square", className)}
    {...props}
  />
));

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  { [key: string]: string | any }
>(({ className, ...props }, ref) => (
  <StyledAvatar
    ref={ref}
    className={cn("flex items-center justify-center", className)}
    {...props}
  />
));
