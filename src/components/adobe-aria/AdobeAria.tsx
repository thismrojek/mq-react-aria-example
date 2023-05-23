import { useState } from "react";
import { ToggleButon } from "./toggle-button/ToggleButton";
import { Button } from "./button/Button";
import { Input } from "./input/Input";

export const AdobeAriaExample = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <h2>React Aria & Stately</h2>

      <div>
        <h3>Button</h3>
        <Button onLongPress={(e) => setShowMenu((state) => !state)}>
          Click me!
        </Button>
        {showMenu && (
          <div>
            <Button>Usuń</Button>
            <Button>Właściwości</Button>
          </div>
        )}
      </div>

      <h3>Toggle button</h3>
      <ToggleButon size="large">☆</ToggleButon>
      
      <h3>Input</h3>
      <Input
        label="Imię"
        description="Proszę podać swoje imię."
        errorMessage="Proszę podać poprawne imię."
        placeholder="Wprowadź swoje imię"
      />
    </div>
  );
};
