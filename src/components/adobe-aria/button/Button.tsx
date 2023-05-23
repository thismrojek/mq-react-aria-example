import { useRef } from "react";
import { AriaButtonProps, LongPressProps, mergeProps, useButton, useLongPress, usePress } from "react-aria";

import './Button.css';

type ButtonProps = AriaButtonProps<"button"> & LongPressProps;

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  let { pressProps } = usePress({
    allowTextSelectionOnPress: false,
    onPress: (e) => console.log(`Naciśnięto, uzywając: ${e.pointerType}`),
  });

  let { longPressProps } = useLongPress({
    accessibilityDescription: 'Przytrzymaj, aby otworzyć menu...',
    onLongPress: props.onLongPress
  });

  return (
    <button className="button" {...mergeProps(buttonProps, longPressProps, pressProps)} ref={ref}>
      {props.children}
    </button>
  );
};
