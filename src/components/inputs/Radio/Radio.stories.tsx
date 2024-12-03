import type { StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import styled from 'styled-components';

const StoryContainer = styled.div`
  display: grid;
  gap: 24px;
`;

const StateRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 24px;
  align-items: center;
`;

const meta = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'label'
  }
};

export const AllStates: Story = {
  render: () => (
    <StoryContainer>
      <StateRow>
        <div>default</div>
        <div>isHovered</div>
        <div>isFocused</div>
        <div>isError</div>
        <div>isError & isFocused</div>
        <div>isDisabled</div>
      </StateRow>

      <StateRow>
        <Radio name="row1" label="label" />
        <Radio name="row1" label="label" isHovered />
        <Radio name="row1" label="label" isFocused />
        <Radio name="row1" label="label" isError />
        <Radio name="row1" label="label" isError isFocused />
        <Radio name="row1" label="label" disabled />
      </StateRow>

      <StateRow>
        <Radio name="row2" label="label" checked />
        <Radio name="row2" label="label" checked isHovered />
        <Radio name="row2" label="label" checked isFocused />
        <Radio name="row2" label="label" checked isError />
        <Radio name="row2" label="label" checked isError isFocused />
        <Radio name="row2" label="label" checked disabled />
      </StateRow>
    </StoryContainer>
  )
};
