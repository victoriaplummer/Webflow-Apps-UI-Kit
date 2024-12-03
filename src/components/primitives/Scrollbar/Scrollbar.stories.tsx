import type { Meta, StoryObj } from '@storybook/react'
import { Scrollbar } from './Scrollbar'
import styled from 'styled-components'
import { useState } from 'react'
import type { ScrollbarProps } from './Scrollbar.types'

const ScrollableContent = styled.div`
  height: 420px;
  overflow: hidden;
  display: flex;
`

const Content = styled.div`
  height: 1000px;
  width: 300px;
`

const meta: Meta<ScrollbarProps> = {
  title: 'Primitives/Scrollbar',
  component: Scrollbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Scrollbar>

export default meta
type Story = StoryObj<typeof Scrollbar>

export const Default: Story = {
  render: () => {
    const [scrollTop, setScrollTop] = useState(0)
    
    return (
      <ScrollableContent>
        <Content>
          {/* Add some content here */}
          Scrollable content...
        </Content>
        <Scrollbar
          contentHeight={1000}
          viewportHeight={420}
          scrollTop={scrollTop}
          onScroll={setScrollTop}
        />
      </ScrollableContent>
    )
  }
}