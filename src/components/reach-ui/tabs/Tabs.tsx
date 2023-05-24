import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { randomUUID } from "crypto";
import { FC, ReactNode } from "react";

interface CustomTab {
  trigger: ReactNode;
  content: ReactNode;
}

interface CustomTabsProps {
  tabs: CustomTab[];
}

export const CustomTabs: FC<CustomTabsProps> = ({ tabs }) => {
  const tabList = tabs.map(({ trigger }) => trigger);
  const tabPanels = tabs.map(({ content }) => content);

  return (
    <Tabs>
      <TabList>
        {tabList.map((node) => (
          <Tab key={randomUUID()}>{node}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabPanels.map((node) => (
          <TabPanel key={randomUUID()}>{node}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
