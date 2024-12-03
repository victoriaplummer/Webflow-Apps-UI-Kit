import { SpinnerProps, SpinnerSize, SpinnerVariant } from './Spinner.types'

const getSizeStyles = (size: SpinnerSize = 'medium') => {
  const sizes = {
    small: {
      width: '16px',
      height: '16px',
      borderWidth: '2px',
    },
    medium: {
      width: '24px',
      height: '24px',
      borderWidth: '3px',
    },
    large: {
      width: '32px',
      height: '32px',
      borderWidth: '4px',
    },
  }

  return sizes[size]
}

const getVariantStyles = (variant: SpinnerVariant = 'primary') => {
  const variants = {
    primary: {
      borderColor: '#E0E0E0',
      borderTopColor: '#1976D2',
    },
    secondary: {
      borderColor: '#E0E0E0',
      borderTopColor: '#666666',
    },
    light: {
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderTopColor: '#FFFFFF',
    },
    dark: {
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderTopColor: '#000000',
    },
  }

  return variants[variant]
}

export const getSpinnerStyles = (props: SpinnerProps) => {
  const sizeStyles = getSizeStyles(props.size)
  const variantStyles = getVariantStyles(props.variant)

  return {
    container: {
      display: 'inline-flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '8px',
    },
    spinner: {
      display: 'inline-block',
      ...sizeStyles,
      borderStyle: 'solid',
      borderRadius: '50%',
      ...variantStyles,
      animation: 'spin 1s linear infinite',
    },
    label: {
      fontSize: '14px',
      color: variantStyles.borderTopColor,
    },
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  }
}
