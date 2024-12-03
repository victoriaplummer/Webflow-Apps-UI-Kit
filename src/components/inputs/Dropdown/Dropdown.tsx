import React from 'react'
import { StyledDropdown } from './Dropdown.styles'
import { DropdownProps } from './Dropdown.types'

export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(({
  placeholder = 'Input text...',
  isHovered,
  isFocused,
  isError,
  disabled,
  density = 'compact',
  className,
  ...props
}, ref) => {
  return (
    <StyledDropdown
      className={className}
      isHovered={isHovered}
      isFocused={isFocused}
      isError={isError}
      disabled={disabled}
      density={density}
    >
      <select
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {!props.value && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {props.children}
      </select>
    </StyledDropdown>
  )
})

Dropdown.displayName = 'Dropdown'
