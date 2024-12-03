import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';
import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from './AvatarGroup'

const meta = {
  title: 'Data Display/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof AvatarGroup>

const demoAvatars = [
  { src: 'https://i.pravatar.cc/300?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/300?img=2', alt: 'User 2' },
  { src: 'https://i.pravatar.cc/300?img=3', alt: 'User 3' },
  { src: 'https://i.pravatar.cc/300?img=4', alt: 'User 4' },
  { src: 'https://i.pravatar.cc/300?img=5', alt: 'User 5' },
  { src: 'https://i.pravatar.cc/300?img=6', alt: 'User 6' },
]

export const Default: Story = {
  args: {
    avatars: demoAvatars,
    max: 4,
    size: 'md'
  }
}