import { colors } from '../../foundations/colors';

type CheckboxStylesType = {
  container: React.CSSProperties;
  input: React.CSSProperties;
  custom: React.CSSProperties;
  customChecked: React.CSSProperties;
  customIndeterminate: React.CSSProperties;
  customDisabled: React.CSSProperties;
  customError: React.CSSProperties;
  customFocused: React.CSSProperties;
  customHovered: React.CSSProperties;
  checkmark: React.CSSProperties;
  indeterminateMark: React.CSSProperties;
};

export const getCheckboxStyles = (): CheckboxStylesType => {
  return {
    container: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      userSelect: 'none',
    },
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0,
    },
    custom: {
      position: 'relative',
      height: '12px',
      width: '12px',
      background: colors.background.input,
      boxShadow: 'inset 0px 16px 16px -16px rgba(0, 0, 0, 0.1333), inset 0px 12px 12px -12px rgba(0, 0, 0, 0.1333), inset 0px 8px 8px -8px rgba(0, 0, 0, 0.1667), inset 0px 4px 4px -4px rgba(0, 0, 0, 0.1667), inset 0px 3px 3px -3px rgba(0, 0, 0, 0.1667), inset 0px 1px 1px -1px rgba(0, 0, 0, 0.1333)',
      border: `1px solid ${colors.border.border3}`,
      borderRadius: '2px',
    },
    customChecked: {
      background: colors.action.primary.background,
      border: 'none',
    },
    customIndeterminate: {
      background: colors.action.primary.background,
      border: 'none',
    },
    customDisabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    customError: {
      border: `1px solid ${colors.semantic.red.border}`,
    },
    customFocused: {
      outline: `1px solid ${colors.semantic.blue.border}`,
      outlineOffset: '1px',
      borderRadius: '3px',
    },
    customHovered: {
      border: `1px solid ${colors.border.border3}`,
      background: colors.background.hover,
    },
    checkmark: {
      position: 'absolute',
      left: '15.62%',
      right: '40.62%',
      top: '21.88%',
      bottom: '46.88%',
      border: `1.25px solid ${colors.text.text1}`,
      borderWidth: '0 1.25px 1.25px 0',
      transform: 'rotate(45deg)',
    },
    indeterminateMark: {
      position: 'absolute',
      width: '6px',
      height: 0,
      left: '3px',
      top: '6px',
      border: `1.25px solid ${colors.text.text1}`,
    },
  };
};
