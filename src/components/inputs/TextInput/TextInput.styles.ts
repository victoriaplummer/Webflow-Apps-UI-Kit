import { TextInputProps } from './TextInput.types';
import { spacing, typography, colors } from '../../foundations';

type TextInputStylesType = {
  container: React.CSSProperties;
  input: React.CSSProperties;
  inputFocused: React.CSSProperties;
  inputDisabled: React.CSSProperties;
  inputError: React.CSSProperties;
  label: React.CSSProperties;
  helperText: React.CSSProperties;
  helperTextError: React.CSSProperties;
  icon: React.CSSProperties;
  characterCount: React.CSSProperties;
};

export const getTextInputStyles = (props: Partial<TextInputProps>): TextInputStylesType => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: props.fullWidth ? '100%' : 'auto',
      maxWidth: '100%',
      boxSizing: 'border-box',
    },
    input: {
      width: '100%',
      boxSizing: 'border-box',
      padding: props.icon ? '12px 36px' : '12px',
      paddingLeft: props.icon && props.iconPosition === 'left' ? '36px' : '12px',
      paddingRight: props.icon && props.iconPosition === 'right' ? '36px' : '12px',
      backgroundColor: colors.background.input,
      border: `1px solid ${colors.border.border1}`,
      borderRadius: `${spacing.borderRadius}px`,
      color: colors.text.text1,
      fontSize: typography.fontSize.small,
      lineHeight: '1.5',
      transition: 'border-color 0.2s ease',
    },
    inputFocused: {
      borderColor: colors.action.primary.background,
      outline: 'none',
    },
    inputDisabled: {
      backgroundColor: colors.background.inactive,
      borderColor: colors.border.border2,
      color: colors.text.inactive,
      cursor: 'not-allowed',
    },
    inputError: {
      borderColor: colors.semantic.red.border,
    },
    label: {
      marginBottom: '4px',
      color: colors.text.text2,
      fontSize: typography.fontSize.small,
    },
    helperText: {
      marginTop: '4px',
      fontSize: '12px',
      color: colors.text.text2,
    },
    helperTextError: {
      color: colors.semantic.red.text,
    },
    icon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [props.iconPosition === 'right' ? 'right' : 'left']: '12px',
      color: colors.text.text2,
      pointerEvents: 'none',
    },
    characterCount: {
      marginTop: '4px',
      fontSize: '12px',
      color: colors.text.text2,
      textAlign: 'right',
    },
  };
};
