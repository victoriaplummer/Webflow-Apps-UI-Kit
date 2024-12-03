import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Inputs/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the text area',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the text area is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether to show error state',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior of the text area',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Feedback',
    helperText: 'Please provide your detailed feedback',
    placeholder: 'Enter your feedback',
  },
};

export const WithError: Story = {
  args: {
    label: 'Description',
    error: true,
    helperText: 'This field is required',
    placeholder: 'Enter description',
  },
};

export const Required: Story = {
  args: {
    label: 'Comments',
    required: true,
    placeholder: 'Enter your comments',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    disabled: true,
    value: 'This text area is disabled',
  },
};

export const WithMaxLength: Story = {
  args: {
    label: 'Limited Input',
    maxLength: 100,
    helperText: '100 characters maximum',
    placeholder: 'Start typing...',
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Large Text Area',
    rows: 8,
    placeholder: 'Enter long form content...',
  },
};

export const NoResize: Story = {
  args: {
    label: 'Fixed Size',
    resize: 'none',
    placeholder: 'This text area cannot be resized',
  },
};

export const VerticalResize: Story = {
  args: {
    label: 'Vertical Resize Only',
    resize: 'vertical',
    placeholder: 'Can be resized vertically',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width TextArea',
    fullWidth: true,
    placeholder: 'This text area takes up full width',
  },
};
