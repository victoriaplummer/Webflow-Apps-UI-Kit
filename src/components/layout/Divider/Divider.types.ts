import { BoxProps } from '../../primitives/Box';

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerElevation = 1 | 2 | 3

export interface DividerProps extends BoxProps {
  orientation?: DividerOrientation
  elevation?: DividerElevation
  className?: string
}
