/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import { CustomTabs } from "./Tabs";

describe("CustomTabs", () => {
  const tabs = [
    {
      trigger: <div data-testid="tab1">Tab 1</div>,
      content: <div data-testid="content1">Content 1</div>,
    },
    {
      trigger: <div data-testid="tab2">Tab 2</div>,
      content: <div data-testid="content2">Content 2</div>,
    },
    {
      trigger: <div data-testid="tab3">Tab 3</div>,
      content: <div data-testid="content3">Content 3</div>,
    },
  ];

  it("renders tabs and their content", () => {
    render(<CustomTabs tabs={tabs} />);

    tabs.forEach((tab) => {
      const tabTrigger = screen.getByTestId(`tab${tabs.indexOf(tab) + 1}`);
      expect(tabTrigger).toBeInTheDocument();
    });
  });

  it("switches tab content on click", () => {
    render(<CustomTabs tabs={tabs} />);

    const secondTabTrigger = screen.getByTestId("tab2");
    fireEvent.click(secondTabTrigger);

    const secondTabContentParent = screen.getByTestId("content2").parentElement;
    expect(secondTabContentParent).not.toHaveAttribute("hidden");

    const firstTabContentParent = screen.getByTestId("content1").parentElement;
    expect(firstTabContentParent).toHaveAttribute("hidden", "");
  });
});
