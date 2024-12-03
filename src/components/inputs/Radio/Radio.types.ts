import { FormControlProps, LayoutProps } from '../../utils/types';

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps extends FormControlProps, LayoutProps {
  options: RadioOption[];
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
}
