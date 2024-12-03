import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Box } from '../Box';

const meta = {
  title: 'Primitives/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Maximum width of the container',
    },
    padding: {
      control: 'text',
      description: 'Container padding',
    },
    centered: {
      control: 'boolean',
      description: 'Center the container horizontally',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Box padding="2rem" backgroundColor="#f0f0f0">
        Default Container Content
      </Box>
    ),
  },
};

export const Narrow: Story = {
  args: {
    maxWidth: 'sm',
    children: (
      <Box padding="2rem" backgroundColor="#f0f0f0">
        Narrow Container
      </Box>
    ),
  },
};

export const Wide: Story = {
  args: {
    maxWidth: '2xl',
    children: (
      <Box padding="2rem" backgroundColor="#f0f0f0">
        Wide Container
      </Box>
    ),
  },
};

export const WithCustomPadding: Story = {
  args: {
    padding: '2rem',
    children: (
      <Box backgroundColor="#f0f0f0" padding="2rem">
        Container with custom padding
      </Box>
    ),
  },
};
