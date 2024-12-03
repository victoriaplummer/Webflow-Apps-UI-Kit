import { FormControlProps, LayoutProps } from '../../utils/types';

export interface SwitchProps extends FormControlProps, LayoutProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  description?: string;
}
