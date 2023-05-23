import * as Avatar from "@radix-ui/react-avatar";
import { FC } from "react";

import './Avatar.css';

type CustomAvatarProps = Avatar.AvatarImageProps & { textFallback: string; }

export const CustomAvatar: FC<CustomAvatarProps> = ({ alt, src, textFallback }) => {
  return (
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src={src}
        alt={alt}
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        {textFallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};
