import { useRef } from "react";
import { AriaTextFieldProps, useKeyboard } from "react-aria";
import { useTextField } from "react-aria";

import './Input.css';

export const Input = (props: AriaTextFieldProps) => {
  let { label } = props;
  let ref = useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  // OBSŁUGA EVENTÓW Z KLAWIATURY
  let { keyboardProps } = useKeyboard({
    isDisabled: true,
    onKeyDown: (e) => console.log(`Key down: ${e.key}`),
    onKeyUp: (e) => console.log(`Key up: ${e.key}`),
  });

  console.log(keyboardProps)

  return (
    <div className="inputWrapper">
      {/* CORE INPUT & LABEL */}
      <label {...labelProps}>{label}</label>
      <input {...inputProps} {...keyboardProps} ref={ref} />

      {/* OPIS POLA TEKSTOWEGO */}
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}

      {/* KOMUNIKATY BŁĘDÓW */}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};
