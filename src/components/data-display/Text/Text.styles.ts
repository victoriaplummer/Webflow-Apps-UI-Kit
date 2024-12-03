import { TextProps, TextVariant, TextColor } from './Text.types'
import { colors } from '../../foundations'

type TextStyleProps = Omit<TextProps, 'children' | 'className' | 'as'>

const getVariantStyles = (variant: TextVariant = 'body1') => {
  const variants = {
    h1: {
      fontSize: '32px',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: '28px',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h3: {
      fontSize: '24px',
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h4: {
      fontSize: '20px',
      lineHeight: 1.4,
      fontWeight: 600,
    },
    h5: {
      fontSize: '18px',
      lineHeight: 1.4,
      fontWeight: 500,
    },
    h6: {
      fontSize: '16px',
      lineHeight: 1.4,
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      fontSize: '12px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  }

  return variants[variant]
}

const getColorStyles = (color: TextColor) => {
  const textColors = {
    primary: colors.text.text1,
    secondary: colors.text.text2,
    error: colors.semantic.red.text,
    warning: colors.semantic.yellow.text,
    info: colors.semantic.blue.text,
    success: colors.semantic.green.text
  }

  return textColors[color]
}

export const getTextStyles = (props: TextStyleProps) => {
  const variantStyles = getVariantStyles(props.variant)
  const colorStyles = getColorStyles(props.color || 'primary')
  const { fontSize, lineHeight } = variantStyles

  return {
    text: {
      margin: 0,
      color: colorStyles || 'inherit',
      textAlign: props.align || 'left',
      fontWeight: props.weight || variantStyles.fontWeight,
      fontSize,
      lineHeight,
    },
  }
}
