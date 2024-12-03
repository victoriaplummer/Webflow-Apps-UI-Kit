import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Box } from '../../primitives/Box';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const StackItem = () => (
  <Box padding="1rem" backgroundColor="gray.100" borderRadius="md">
    Stack Item
  </Box>
);

export const Vertical: Story = {
  render: () => (
    <Stack spacing="1rem">
      <StackItem />
      <StackItem />
      <StackItem />
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" spacing="1rem">
      <StackItem />
      <StackItem />
      <StackItem />
    </Stack>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <Stack direction="row" spacing="1rem" align="center" justify="space-between">
      <StackItem />
      <StackItem />
      <StackItem />
    </Stack>
  ),
};
