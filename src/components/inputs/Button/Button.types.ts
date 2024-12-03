import { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonColorVariant = 'default' | 'primary' | 'danger'
export type ButtonDensity = 'compact' | 'default'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  colorVariant?: ButtonColorVariant
  density?: ButtonDensity
  isDisabled?: boolean
  children?: React.ReactNode
  color?: string
  isFocused?: boolean
  isHovered?: boolean
}

export const isValidButtonCombination = (
  variant: ButtonVariant,
  colorVariant: ButtonColorVariant
): boolean => {
  if (variant === 'solid') return true
  return colorVariant === 'default'
}
