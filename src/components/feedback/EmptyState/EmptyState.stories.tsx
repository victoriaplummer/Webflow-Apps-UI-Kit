import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { PinIcon } from '../../icons/Pin';
import { colors } from '../../foundations';

const meta = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isNested: {
      control: 'boolean',
      description: 'Whether the empty state is nested within another component',
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <PinIcon fill={colors.semantic.blue.icon} />,
    title: 'No pinned items',
    body: 'Items you pin will appear here',
    actionText: 'Learn about pinning',
    isNested: false,
  },
};

export const Nested: Story = {
  args: {
    icon: <PinIcon fill={colors.semantic.blue.icon} />,
    title: 'No pinned items',
    body: 'Items you pin will appear here',
    actionText: 'Learn about pinning',
    isNested: true,
  },
};

export const WithoutAction: Story = {
  args: {
    icon: <PinIcon fill={colors.semantic.blue.icon} />,
    title: 'No pinned items',
    body: 'Items you pin will appear here',
    isNested: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'No pinned items',
    body: 'Items you pin will appear here',
    actionText: 'Learn about pinning',
    isNested: false,
  },
};
