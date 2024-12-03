import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const ErrorChecked: Story = {
  args: {
    error: true,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    disabled: true,
    indeterminate: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Terms and Conditions',
    helperText: 'Please read and accept the terms',
  },
};

export const WithError: Story = {
  args: {
    label: 'Error Checkbox',
    error: true,
    helperText: 'This field is required',
  },
};

export const WithLongLabel: Story = {
  args: {
    label:
      'This is a very long label that demonstrates how the checkbox handles wrapped text and maintains proper alignment with multiple lines',
  },
};

export const WithCustomStyles: Story = {
  args: {
    label: 'Custom Styled Checkbox',
    className: 'custom-checkbox',
    style: { borderRadius: '8px', padding: '12px' },
  },
};
