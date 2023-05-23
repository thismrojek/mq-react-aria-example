import * as Slider from "@radix-ui/react-slider";
import "./Slider.css";
import { FC } from "react";

export const CustomSlider: FC<Slider.SliderProps> = (props) => {
  const { defaultValue, max, step } = props;

  return (
    <form>
      <Slider.Root
        {...props}
        className="SliderRoot"
        defaultValue={defaultValue}
        max={max}
        step={step}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
    </form>
  );
};
