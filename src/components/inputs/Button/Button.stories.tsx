import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Button,
  title: 'Inputs/Button',
  args: {
    children: 'label'
  },
  argTypes: {
    variant: {
      options: ['solid', 'ghost'],
      control: 'radio'
    },
    colorVariant: {
      options: ['default', 'primary', 'danger'],
      control: 'radio'
    },
    isHovered: { control: 'boolean' },
    isFocused: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '24px', alignItems: 'center' }}>
        <div>default</div>
        <div>isHovered</div>
        <div>isFocused</div>
        <div>isDisabled</div>

        <Button variant="solid">label</Button>
        <Button variant="solid" isHovered>label</Button>
        <Button variant="solid" isFocused>label</Button>
        <Button variant="solid" disabled>label</Button>

        <Button variant="solid" colorVariant="primary">label</Button>
        <Button variant="solid" colorVariant="primary" isHovered>label</Button>
        <Button variant="solid" colorVariant="primary" isFocused>label</Button>
        <Button variant="solid" colorVariant="primary" disabled>label</Button>

        <Button variant="solid" colorVariant="danger">label</Button>
        <Button variant="solid" colorVariant="danger" isHovered>label</Button>
        <Button variant="solid" colorVariant="danger" isFocused>label</Button>
        <Button variant="solid" colorVariant="danger" disabled>label</Button>

        <Button variant="ghost">label</Button>
        <Button variant="ghost" isHovered>label</Button>
        <Button variant="ghost" isFocused>label</Button>
        <Button variant="ghost" disabled>label</Button>
      </div>
    </div>
  )
}