import * as Popover from "@radix-ui/react-popover";

import "./Popover.css";

export const CustomPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className="trigger">Show info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="content">
          Some content
          <Popover.Arrow className="arrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
