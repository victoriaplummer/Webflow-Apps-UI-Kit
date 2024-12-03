import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Box } from '../../primitives/Box';
import styled from 'styled-components';
import { colors, spacing } from '../../foundations';

// Helper component for grid items
const GridItem = styled(Box)`
  padding: 1rem;
  background: ${colors.background.background2};
  border-radius: ${spacing.borderRadius};
  text-align: center;
  color: ${colors.text.text1};
`;

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible Grid layout component built with CSS Grid.',
      },
    },
  },
  argTypes: {
    columns: {
      control: { type: 'number' },
      defaultValue: 12,
      description: 'Number of grid columns',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: 12 },
      },
    },
    gap: {
      control: { type: 'text' },
      description: 'Space between grid items',
      table: {
        type: { summary: 'string | number' },
      },
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch'],
      description: 'Vertical alignment of grid items',
    },
    justifyItems: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch'],
      description: 'Horizontal alignment of grid items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  args: {
    columns: 3,
    gap: '1rem',
    children: (
      <>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
      </>
    ),
  },
};

export const ResponsiveColumns: Story = {
  args: {
    columns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    children: (
      <>
        <GridItem>Responsive Item 1</GridItem>
        <GridItem>Responsive Item 2</GridItem>
        <GridItem>Responsive Item 3</GridItem>
        <GridItem>Responsive Item 4</GridItem>
      </>
    ),
  },
};

export const WithAlignment: Story = {
  args: {
    columns: 3,
    gap: '1rem',
    alignItems: 'center',
    justifyItems: 'center',
    children: (
      <>
        <GridItem>Centered 1</GridItem>
        <GridItem>Centered 2</GridItem>
        <GridItem>Centered 3</GridItem>
      </>
    ),
  },
};

export const DifferentHeights: Story = {
  args: {
    columns: 3,
    gap: '1rem',
    children: (
      <>
        <GridItem>Short</GridItem>
        <GridItem style={{ padding: '3rem' }}>
          Tall Content
        </GridItem>
        <GridItem>Short</GridItem>
      </>
    ),
  },
};

export const WithAreas: Story = {
  args: {
    areas: `
      "header header header"
      "sidebar main main"
      "footer footer footer"
    `,
    gap: '1rem',
    children: (
      <>
        <GridItem style={{ gridArea: 'header', background: colors.semantic.blue.background }}>
          Header
        </GridItem>
        <GridItem style={{ gridArea: 'sidebar', background: colors.semantic.green.background }}>
          Sidebar
        </GridItem>
        <GridItem style={{ gridArea: 'main', background: colors.semantic.purple.background }}>
          Main Content
        </GridItem>
        <GridItem style={{ gridArea: 'footer' }}>
          Footer
        </GridItem>
      </>
    ),
  },
};

export const DenseGrid: Story = {
  args: {
    columns: 3,
    gap: '1rem',
    autoFlow: 'row dense',
    children: (
      <>
        <GridItem style={{ gridColumn: 'span 2', background: colors.semantic.blue.background }}>
          Span 2
        </GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem style={{ gridColumn: 'span 2', background: colors.semantic.green.background }}>
          Span 2
        </GridItem>
      </>
    ),
  },
};
