import React from 'react';

// Basic Props
export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

// Layout Props
export interface LayoutProps {
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  margin?: string | number;
  gap?: string | number;
}

// Container Props
export interface BaseContainerProps extends BaseComponentProps, LayoutProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  centered?: boolean;
}

// Common Interactive Props
export interface InteractiveProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
}

// Common Form Props
export interface FormControlProps extends BaseComponentProps, InteractiveProps {
  name?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  required?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
}

// Size variants
export type Size = 'small' | 'medium' | 'large';

// Color variants based on semantic colors
export type ColorVariant = 'blue' | 'green' | 'yellow' | 'red' | 'orange' | 'purple';

// Button specific props
export interface ButtonProps extends BaseComponentProps, InteractiveProps {
  variant?: 'primary' | 'secondary';
  size?: Size;
  color?: ColorVariant;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Input specific props
export interface InputProps extends FormControlProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  placeholder?: string;
  autoComplete?: string;
  size?: Size;
}

// Checkbox & Radio props
export interface ToggleProps extends Omit<FormControlProps, 'value' | 'defaultValue'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Select/Dropdown props
export interface SelectProps extends FormControlProps {
  options: Array<{ label: string; value: string | number }>;
  placeholder?: string;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
}

// Text props for typography components
export interface TextProps extends BaseComponentProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: number | string;
  as?: keyof JSX.IntrinsicElements;
}

// Icon props
export interface IconProps extends BaseComponentProps {
  size?: number | string;
  color?: string;
  onClick?: () => void;
}

// Animation props
export interface AnimationProps {
  animate?: boolean;
  duration?: number;
  delay?: number;
  easing?: string;
}

// Theme-related types
export interface ThemeMode {
  isDark: boolean;
  toggleTheme: () => void;
}
