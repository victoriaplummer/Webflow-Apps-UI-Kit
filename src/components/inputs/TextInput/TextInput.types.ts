import { BaseComponentProps } from '../../utils/types';

export interface TextInputProps extends BaseComponentProps {
  /** The current value of the input */
  value?: string;
  /** Default value for uncontrolled input */
  defaultValue?: string;
  /** Placeholder text when empty */
  placeholder?: string;
  /** Label text to display above input */
  label?: string;
  /** Helper text to display below input */
  helperText?: string;
  /** Size variant of the input */
  size?: 'small' | 'medium' | 'large';
  /** Type of the input field */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether to show error state */
  error?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Icon to display in the input */
  icon?: React.ReactNode;
  /** Position of the icon */
  iconPosition?: 'left' | 'right';
  /** Maximum length of input */
  maxLength?: number;
  /** Callback when value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback when input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback when input gains focus */
  onFocus?: () => void;
  /** Name attribute for the input */
  name?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Whether the input should be read-only */
  readOnly?: boolean;
  /** Icon to display in the input */
}
