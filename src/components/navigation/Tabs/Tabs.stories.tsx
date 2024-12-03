import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const DEMO_TABS = [
  { id: 'Menu', label: 'Menu' },
  { id: 'Settings', label: 'Settings' },
  { id: 'Help', label: 'Help' },
];

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(DEMO_TABS[0].id);
    
    return (
      <Tabs
        tabs={DEMO_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  }
};
