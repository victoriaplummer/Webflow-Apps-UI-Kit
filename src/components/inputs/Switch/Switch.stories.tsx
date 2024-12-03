import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle Switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Active Switch',
    checked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Notifications',
    description: 'Receive email notifications',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true,
  },
};
