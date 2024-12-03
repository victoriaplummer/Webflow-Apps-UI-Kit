import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Data Display/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllHeadings: Story = {
  args: {
    children: 'Text content'
  },
  render: () => (
    <div>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
    </div>
  ),
};

export const TextStyles: Story = {
  args: {
    children: 'Text content'
  },
  render: () => (
    <div>
      <Text variant="body1" weight="bold">Bold Text</Text>
      <Text variant="body1" as="em">Italic Text</Text>
      <Text variant="body2">Small Body Text</Text>
      <Text variant="caption">Caption Text</Text>
    </div>
  ),
};

export const SamplePassage: Story = {
  args: {
    children: 'Text content'
  },
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Text variant="h2">The Art of Programming</Text>
      <Text variant="body1">
        Programming is like crafting a story. Each line of code is a sentence, each function a paragraph, 
        and each module a chapter. The programmer, like a writer, must carefully consider their audience, 
        maintain clarity, and ensure every piece serves a purpose.
      </Text><br />
      <Text variant="body1">
        Just as a well-written book flows naturally from one idea to the next, well-written code 
        should flow logically from one operation to another. The best code, like the best prose, 
        appears effortless despite the careful thought and numerous revisions behind it.
      </Text>
      <br />
      <Text variant="caption" align="right">
        - Anonymous Developer
      </Text>
    </div>
  ),
};

export const ColorVariations: Story = {
  args: {
    children: 'Text content'
  },
  render: () => (
    <div>
      <Text color="primary">Primary Color Text</Text>
      <Text color="secondary">Secondary Color Text</Text>
      <Text color="error">Error Color Text</Text>
      <Text color="warning">Warning Color Text</Text>
      <Text color="info">Info Color Text</Text>
      <Text color="success">Success Color Text</Text>
    </div>
  ),
};

export const TextAlignment: Story = {
  args: {
    children: 'Text content'
  },
  render: () => (
    <div style={{ width: '300px', border: '1px solid #ccc', padding: '1rem' }}>
      <Text align="left">Left aligned text</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
      <Text align="justify">
        Justified text that spans multiple lines to demonstrate the alignment
      </Text>
    </div>
  ),
};
