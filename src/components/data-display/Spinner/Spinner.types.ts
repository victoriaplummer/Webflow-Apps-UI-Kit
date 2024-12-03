import { BaseComponentProps } from '../../utils/types';

export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerVariant = 'primary' | 'secondary' | 'light' | 'dark';

export interface SpinnerProps extends BaseComponentProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  color?: string;
}
