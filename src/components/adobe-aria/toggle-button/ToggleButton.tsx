import { useToggleState } from "react-stately";
import { ElementType, useRef } from "react";
import { AriaToggleButtonProps, useToggleButton } from "react-aria";

import "./ToggleButton.css";
import classNames from "classnames";

export const ToggleButon = (props: AriaToggleButtonProps<ElementType>) => {
  const ref = useRef(null);
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);
  const { isSelected } = state;

  const className = classNames('toggleButton', {
    toggleButtonPressed: isPressed && !isSelected,
    toggleButtonSelected: !isPressed && isSelected,
    toggleButtonPressedSelected: isPressed && isSelected,
  })

  return (
    <button
      className={className}
      ref={ref}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};
