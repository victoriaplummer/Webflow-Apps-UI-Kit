import { BaseComponentProps, FormControlProps } from '../../utils/types';

export interface CheckboxProps extends BaseComponentProps, FormControlProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
}
