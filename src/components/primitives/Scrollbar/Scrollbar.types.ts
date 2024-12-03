export interface ScrollbarProps {
    /** Total height of the scrollable content */
    contentHeight: number
    /** Height of the visible viewport */
    viewportHeight: number
    /** Current scroll position */
    scrollTop: number
    /** Callback fired when scrolling occurs */
    onScroll: (scrollTop: number) => void
    /** Optional CSS class name */
    className?: string
  }
  
  export interface ScrollThumbProps {
    /** Whether the thumb is currently being dragged */
    isDragging?: boolean
  }