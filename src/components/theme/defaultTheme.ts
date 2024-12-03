import { colors } from '../foundations';

export const defaultTheme = {
  colors: {
    primary: colors.action.primary.background,
    secondary: colors.action.secondary.background,
    success: colors.semantic.green.text,
    error: colors.semantic.red.text,
    warning: colors.semantic.yellow.text,
    info: colors.semantic.blue.text,
    background: colors.background.background1,
    backgroundHover: colors.background.hover,
    backgroundActive: colors.background.background3,
    text: colors.text.text1,
    textSecondary: colors.text.text2,
    border: colors.border.border1,
    avatar: {
      backgrounds: {
        option1: colors.semantic.purple.background,
        option2: colors.semantic.green.background,
        option3: colors.action.primary.background,
      },
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily:
      'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  },
};

export type Theme = typeof defaultTheme;
