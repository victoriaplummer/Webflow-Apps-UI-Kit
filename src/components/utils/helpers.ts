import { Size, ColorVariant } from './types'

// Size-related helpers
export const getSizeValue = (size: Size): number => {
  const sizes = {
    small: 24,
    medium: 32,
    large: 40,
  }
  return sizes[size]
}

// Color-related helpers
export const getColorValue = (color: ColorVariant): string => {
  const colors = {
    blue: '#1976D2',
    green: '#388E3C',
    yellow: '#F57F17',
    red: '#D32F2F',
    orange: '#F57C00',
    purple: '#7B1FA2',
  }
  return colors[color]
}

// Style-related helpers
export const createRippleEffect = (event: React.MouseEvent<HTMLElement>) => {
  const button = event.currentTarget
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - button.offsetLeft - diameter / 2}px`
  circle.style.top = `${event.clientY - button.offsetTop - diameter / 2}px`
  circle.classList.add('ripple')

  button.appendChild(circle)

  setTimeout(() => circle.remove(), 600)
}

// Accessibility helpers
export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

export const combineClassNames = (
  ...classes: (string | undefined)[]
): string => {
  return classes.filter(Boolean).join(' ')
}
