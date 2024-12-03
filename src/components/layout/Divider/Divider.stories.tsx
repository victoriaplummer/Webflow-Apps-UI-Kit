import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DemoSection = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  min-height: 100px;
`;

const meta = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    elevation: {
      control: 'radio',
      options: [1, 2, 3],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    elevation: 1
  }
};

export const AllVariants: Story = {
  render: () => (
    <Container>
      <h3>Horizontal Dividers</h3>
      <DemoSection style={{ flexDirection: 'column' }}>
        <Divider elevation={1} />
        <Divider elevation={2} />
        <Divider elevation={3} />
      </DemoSection>

      <h3>Vertical Dividers</h3>
      <DemoSection>
        <Divider orientation="vertical" elevation={1} />
        <Divider orientation="vertical" elevation={2} />
        <Divider orientation="vertical" elevation={3} />
      </DemoSection>
    </Container>
  )
};
