import React, { useState } from 'react'
import { SwitchProps } from './Switch.types'
import { getSwitchStyles } from './Switch.styles'

export const Switch: React.FC<SwitchProps> = ({
  className,
  checked,
  defaultChecked = false,
  onChange,
  size = 'medium',
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked)
  const styles = getSwitchStyles({ ...props, size })

  const handleChange = () => {
    if (!disabled) {
      const newValue = !isChecked
      setIsChecked(newValue)
      onChange?.(newValue)
    }
  }

  return (
    <div className={className} style={styles.container}>
      {label && (
        <label style={styles.label}>
          {label}
          {required && ' *'}
        </label>
      )}
      <div
        style={styles.switch}
        onClick={handleChange}
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
      >
        <div
          style={{
            ...styles.track,
            ...(isChecked && styles.trackChecked),
            ...(disabled && styles.trackDisabled),
            ...(error && styles.trackError),
          }}
        >
          <div
            style={{
              ...styles.thumb,
              ...(isChecked && styles.thumbChecked),
              ...(disabled && styles.thumbDisabled),
            }}
          />
        </div>
      </div>
      {helperText && (
        <span
          style={{
            ...styles.helperText,
            ...(error && styles.helperTextError),
          }}
        >
          {helperText}
        </span>
      )}
    </div>
  )
}
