import React from 'react'
import { SpinnerProps } from './Spinner.types'
import { getSpinnerStyles } from './Spinner.styles'

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  variant = 'primary',
  label,
  className,
  ...props
}) => {
  const styles = getSpinnerStyles({ size, variant, label, ...props })

  return (
    <div className={className} style={styles.container} role="status">
      <div style={styles.spinner} aria-hidden="true" />
      {label && <span style={styles.label}>{label}</span>}
      <span className="sr-only">Loading{label ? `: ${label}` : ''}</span>
    </div>
  )
}
