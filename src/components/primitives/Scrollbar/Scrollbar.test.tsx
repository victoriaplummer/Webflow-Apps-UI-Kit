import { render, fireEvent, screen } from '@testing-library/react'
import { Scrollbar } from './Scrollbar'

describe('Scrollbar', () => {
  const defaultProps = {
    contentHeight: 1000,
    viewportHeight: 400,
    scrollTop: 0,
    onScroll: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<Scrollbar {...defaultProps} />)
    expect(screen.getByRole('scrollbar')).toBeInTheDocument()
  })

  it('calculates thumb height correctly', () => {
    render(<Scrollbar {...defaultProps} />)
    const thumb = screen.getByRole('scrollbar').firstChild as HTMLElement
    expect(thumb).toHaveStyle({ height: '160px' }) // (400/1000) * 400 = 160
  })

  it('uses minimum thumb height when content is very long', () => {
    render(<Scrollbar {...defaultProps} contentHeight={10000} />)
    const thumb = screen.getByRole('scrollbar').firstChild as HTMLElement
    expect(thumb).toHaveStyle({ height: '30px' }) // minimum height
  })

  it('calls onScroll when dragging', () => {
    render(<Scrollbar {...defaultProps} />)
    const thumb = screen.getByRole('scrollbar').firstChild as HTMLElement

    fireEvent.mouseDown(thumb, { clientY: 0 })
    fireEvent.mouseMove(document, { clientY: 100 })
    
    expect(defaultProps.onScroll).toHaveBeenCalled()
  })

  it('stops scrolling when mouse is released', () => {
    render(<Scrollbar {...defaultProps} />)
    const thumb = screen.getByRole('scrollbar').firstChild as HTMLElement

    fireEvent.mouseDown(thumb, { clientY: 0 })
    fireEvent.mouseMove(document, { clientY: 100 })
    fireEvent.mouseUp(document)
    
    const callCount = defaultProps.onScroll.mock.calls.length
    fireEvent.mouseMove(document, { clientY: 200 })
    
    expect(defaultProps.onScroll).toHaveBeenCalledTimes(callCount)
  })
})