import React, { useRef, useState, useEffect } from 'react'
import { ScrollbarContainer, ScrollThumb } from './Scrollbar.styles'

interface ScrollbarProps {
  contentHeight: number
  viewportHeight: number
  scrollTop: number
  onScroll: (scrollTop: number) => void
  className?: string
}

export const Scrollbar: React.FC<ScrollbarProps> = ({
  contentHeight,
  viewportHeight,
  scrollTop,
  onScroll,
  className
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const thumbRef = useRef<HTMLDivElement>(null)
  const startDragRef = useRef<{ y: number; scrollTop: number } | null>(null)

  const thumbHeight = Math.max(
    (viewportHeight / contentHeight) * viewportHeight,
    30
  )
  
  const thumbPosition = (scrollTop / (contentHeight - viewportHeight)) * 
    (viewportHeight - thumbHeight)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startDragRef.current = { y: e.clientY, scrollTop }
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!startDragRef.current) return
      
      const delta = e.clientY - startDragRef.current.y
      const percentage = delta / (viewportHeight - thumbHeight)
      const newScrollTop = startDragRef.current.scrollTop + 
        percentage * (contentHeight - viewportHeight)
      
      onScroll(Math.max(0, Math.min(newScrollTop, contentHeight - viewportHeight)))
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      startDragRef.current = null
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, contentHeight, viewportHeight, thumbHeight, onScroll])

  return (
    <ScrollbarContainer className={className}>
      <ScrollThumb
        ref={thumbRef}
        style={{
          height: thumbHeight,
          transform: `translateY(${thumbPosition}px)`
        }}
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
      />
    </ScrollbarContainer>
  )
}