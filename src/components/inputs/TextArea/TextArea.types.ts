import { BaseComponentProps } from '../../utils/types';

export interface TextAreaProps extends BaseComponentProps {
  /** The current value of the textarea */
  value?: string;
  /** Placeholder text when empty */
  placeholder?: string;
  /** Label text to display above textarea */
  label?: string;
  /** Helper text to display below textarea */
  helperText?: string;
  /** Size variant of the textarea */
  size?: 'small' | 'medium' | 'large';
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Whether to show error state */
  error?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Resize behavior of the textarea */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** Number of visible text lines */
  rows?: number;
  /** Maximum number of characters allowed */
  maxLength?: number;
  /** Whether the textarea should take full width */
  fullWidth?: boolean;
  /** Callback when value changes */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Callback when textarea loses focus */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Name attribute for the textarea */
  name?: string;
  /** Width of the textarea */
  width?: number;
  /** Default value for uncontrolled textarea */
  defaultValue?: string;
  /** Minimum number of visible text lines */
  minRows?: number;
  /** Maximum number of visible text lines */
  maxRows?: number;
  /** Callback when textarea gains focus */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
