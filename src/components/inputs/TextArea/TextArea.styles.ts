import { TextAreaProps } from './TextArea.types';
import { colors } from '../../foundations/colors';
import { spacing } from '../../foundations/spacing';

type TextAreaStylesType = {
  container: React.CSSProperties;
  textarea: React.CSSProperties;
  textareaFocused: React.CSSProperties;
  textareaDisabled: React.CSSProperties;
  textareaError: React.CSSProperties;
  label: React.CSSProperties;
  helperText: React.CSSProperties;
  helperTextError: React.CSSProperties;
  characterCount: React.CSSProperties;
};

export const getTextAreaStyles = (props: Partial<TextAreaProps>): TextAreaStylesType => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: props.width ? `${props.width}px` : '100%',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      backgroundColor: colors.background.input,
      border: `1px solid ${colors.border.border1}`,
      borderRadius: `${spacing.borderRadius}px`,
      color: colors.text.text1,
      fontSize: '14px',
      lineHeight: '1.5',
      resize: props.resize || 'vertical',
      transition: 'border-color 0.2s ease',
    },
    textareaFocused: {
      borderColor: colors.action.primary.background,
      outline: 'none',
    },
    textareaDisabled: {
      backgroundColor: colors.background.inactive,
      borderColor: colors.border.border2,
      color: colors.text.inactive,
      cursor: 'not-allowed',
    },
    textareaError: {
      borderColor: colors.semantic.red.border,
    },
    label: {
      marginBottom: '4px',
      color: colors.text.text1,
      fontSize: '14px',
    },
    helperText: {
      marginTop: '4px',
      fontSize: '12px',
      color: colors.text.text2,
    },
    helperTextError: {
      color: colors.semantic.red.text,
    },
    characterCount: {
      marginTop: '4px',
      fontSize: '12px',
      color: colors.text.text2,
      textAlign: 'right',
    },
  };
};
