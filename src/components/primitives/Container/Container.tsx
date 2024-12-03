import React from 'react'
import { ContainerProps } from './Container.types'
import { getContainerStyles } from './Container.styles'

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={className} style={getContainerStyles(props)}>
      {children}
    </div>
  )
}
