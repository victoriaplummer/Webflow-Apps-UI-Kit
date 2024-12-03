import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
    colorOption: 2, // Using green background
  },
};
