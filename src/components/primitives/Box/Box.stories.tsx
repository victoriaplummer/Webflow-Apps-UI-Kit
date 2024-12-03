import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta = {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'text',
      description: 'Padding around the content',
    },
    margin: {
      control: 'text',
      description: 'Margin around the box',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the box',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius of the box',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    padding: '1rem',
    children: 'Basic Box',
  },
};

export const WithBackground: Story = {
  args: {
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    children: 'Box with background',
  },
};

export const WithBorderRadius: Story = {
  args: {
    padding: '1.5rem',
    backgroundColor: '#e2e8f0',
    borderRadius: '8px',
    children: 'Rounded Box',
  },
};

export const AsFlexContainer: Story = {
  args: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    children: (
      <>
        <Box padding="1rem" backgroundColor="#e2e8f0">
          Item 1
        </Box>
        <Box padding="1rem" backgroundColor="#e2e8f0">
          Item 2
        </Box>
        <Box padding="1rem" backgroundColor="#e2e8f0">
          Item 3
        </Box>
      </>
    ),
  },
};
