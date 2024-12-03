import React from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styles'

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  colorVariant = 'default',
  density = 'default',
  isDisabled = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      colorVariant={colorVariant}
      density={density}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
