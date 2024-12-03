import React from 'react'
import { RadioContainer, RadioInput, RadioLabel } from './Radio.styles'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  isHovered?: boolean
  isFocused?: boolean
  isError?: boolean
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
  label,
  isHovered,
  isFocused,
  isError,
  disabled,
  className,
  ...props
}, ref) => {
  return (
    <RadioContainer
      className={className}
      disabled={disabled}
    >
      <RadioInput
        ref={ref}
        isHovered={isHovered}
        isFocused={isFocused}
        isError={isError}
        disabled={disabled}
        {...props}
      />
      {label && <RadioLabel>{label}</RadioLabel>}
    </RadioContainer>
  )
})

Radio.displayName = 'Radio'
