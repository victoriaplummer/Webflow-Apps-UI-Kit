import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { Search, Mail, Lock } from 'react-feather';
import React from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible text input component that supports various states and configurations.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// Basic usage
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

// With validation error
export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
    error: true,
    helperText: 'Please enter a valid email address',
    required: true,
  },
};

// With icon
export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    icon: <Search size={16} />,
  },
};

// With character limit
export const WithCharacterLimit: Story = {
  args: {
    label: 'Tweet',
    placeholder: "What's happening?",
    maxLength: 280,
    helperText: 'Keep it brief',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextInput label="Small Input" placeholder="Small size" size="small" />
      <TextInput label="Medium Input" placeholder="Medium size" size="medium" />
      <TextInput label="Large Input" placeholder="Large size" size="large" />
    </div>
  ),
};

// Different types
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextInput label="Email" type="email" placeholder="Enter email" icon={<Mail size={16} />} />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter password"
        icon={<Lock size={16} />}
      />
      <TextInput label="Number" type="number" placeholder="Enter number" />
    </div>
  ),
};

// Full width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <TextInput
        label="Interactive Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={`You typed: ${value}`}
      />
    );
  },
};
