import { useState } from "react";
import { CustomAvatar } from "./avatar/Avatar";
import { CustomPopover } from "./popover/Popover";
import { CustomSlider } from "./slider/Slider";

export const RadixUIExample = () => {
  // MOCK DLA AVATARÓW
  const users = [
    {
      alt: "Adrian Drąg",
      src: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/309616612_5442842192459827_6280585183355757483_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VWk06P0QOfUAX8q4j8n&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfCHxKliTc-KaaR4jNJvczBRlOwncDYvVoiM98zrag2Tmg&oe=64713B28",
      textFallback: "AD",
    },
    {
      alt: "Jędrzej Knapik",
      src: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.6435-9/84146294_2665754686994619_771393806381448566_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m7ILaNSg5ioAX9G_-Hy&_nc_oc=AQn7EB2xuUg6ERF0BlZmve8_RLL74aDZC542hhX3z0KouQUBLkZKFW1pohkkkE0RIAU&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfDKNemATa1rkYztrJc6GzlT-uNxKEEOHalW60JLKdmJkQ&oe=64945925",
      textFallback: "JK",
    },
    {
      alt: "Mateusz Rojek",
      src: "https://badurl.com/test.jpg",
      textFallback: "MR",
    },
  ];

  const DEFAULT_VOLUME_LEVEL = 50;
  const [volumeLevel, setVolumeLevel] = useState(DEFAULT_VOLUME_LEVEL);

  return (
    <div>
      <h2>Radix UI</h2>

      <h3>Avatars</h3>
      <div style={{ display: "flex", gap: 16 }}>
        {users.map(({ alt, textFallback, src }) => (
          <CustomAvatar key={src} alt={alt} src={src} textFallback={textFallback} />
        ))}
      </div>

      <h3>Popover</h3>
      <CustomPopover />

      <h3>Slider</h3>
      <CustomSlider
        onValueChange={(value) => setVolumeLevel(value[0])}
        max={100}
        defaultValue={[DEFAULT_VOLUME_LEVEL]}
        aria-label="Poziom głośności"
      />
      <span>Poziom głośności: {volumeLevel}</span>
    </div>
  );
};
