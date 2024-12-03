import { BaseComponentProps } from '../../utils/types'

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'

export type TextColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export interface TextProps extends BaseComponentProps {
  variant?: TextVariant
  color?: TextColor
  align?: 'left' | 'center' | 'right' | 'justify'
  weight?: number | string
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}
