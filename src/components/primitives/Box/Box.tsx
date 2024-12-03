import React from 'react'
import { BoxProps } from './Box.types'
import { getBoxStyles } from './Box.styles'

export const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div className={className} style={getBoxStyles(props)}>
      {children}
    </div>
  )
}
