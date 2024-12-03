import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import styled from 'styled-components';

// Create a styled component for consistent text styling
const Label = styled.div``;

const StoryContainer = styled.div`
  display: grid;
  gap: 24px;
`;

const meta = {
  title: 'Inputs/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    density: {
      control: 'radio',
      options: ['compact', 'default'],
      description: 'The density of the dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
    isError: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    isHovered: {
      control: 'boolean',
      description: 'Show hover state',
    },
    isFocused: {
      control: 'boolean',
      description: 'Show focus state',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Dropdown>
  )
};

export const AllStates: Story = {
  render: () => (
    <StoryContainer>
      <Label>default</Label>
      <Dropdown>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>

      <Label>isHovered</Label>
      <Dropdown isHovered>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>

      <Label>isFocused</Label>
      <Dropdown isFocused>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>

      <Label>isError</Label>
      <Dropdown isError>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>

      <Label>isDisabled</Label>
      <Dropdown disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    </StoryContainer>
  )
};

export const Densities: Story = {
  render: () => (
    <StoryContainer>
      <Label>compact</Label>
      <Dropdown density="compact">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>

      <Label>default</Label>
      <Dropdown density="default">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    </StoryContainer>
  )
};
