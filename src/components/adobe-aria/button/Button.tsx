import { useRef } from "react";
import { AriaButtonProps, mergeProps, useButton, useLongPress, usePress } from "react-aria";

import './Button.css';

export const Button = (props: AriaButtonProps<"button">) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  let { pressProps } = usePress({
    allowTextSelectionOnPress: false,
    onPress: (e) => console.log(`Naciśnięto, uzywając: ${e.pointerType}`),
  });

  let { longPressProps } = useLongPress({
    accessibilityDescription: 'Przytrzymaj, aby otworzyć menu...',
    onLongPress: (e) => console.log(`long press with ${e.pointerType}`),
    threshold: 1500
  });

  return (
    <button className="button" {...mergeProps(buttonProps, longPressProps, pressProps)} ref={ref}>
      {props.children}
    </button>
  );
};
