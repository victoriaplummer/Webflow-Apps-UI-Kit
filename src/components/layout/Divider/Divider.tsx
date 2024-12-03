import React from 'react'
import { StyledDivider } from './Divider.styles'
import { DividerProps } from './Divider.types'

export const Divider: React.FC<DividerProps> = ({ 
  orientation = 'horizontal',
  elevation = 1,
  className 
}) => {
  return (
    <StyledDivider 
      orientation={orientation}
      elevation={elevation}
      className={className}
      role="separator"
      aria-orientation={orientation}
    />
  )
}
