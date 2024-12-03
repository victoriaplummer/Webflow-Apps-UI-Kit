import { SwitchProps } from './Switch.types';
import { colors, boxShadows } from '../../foundations';

type SwitchStylesType = {
  container: React.CSSProperties;
  switch: React.CSSProperties;
  track: React.CSSProperties;
  trackChecked: React.CSSProperties;
  trackDisabled: React.CSSProperties;
  trackError: React.CSSProperties;
  thumb: React.CSSProperties;
  thumbChecked: React.CSSProperties;
  thumbDisabled: React.CSSProperties;
  label: React.CSSProperties;
  helperText: React.CSSProperties;
  helperTextError: React.CSSProperties;
};

const getSizeStyles = (size: SwitchProps['size'] = 'medium') => {
  const sizes = {
    small: {
      width: 32,
      height: 16,
      thumbSize: 12,
      thumbOffset: 12,
    },
    medium: {
      width: 44,
      height: 22,
      thumbSize: 18,
      thumbOffset: 18,
    },
    large: {
      width: 56,
      height: 28,
      thumbSize: 24,
      thumbOffset: 24,
    },
  };

  return sizes[size];
};

export const getSwitchStyles = (props: Partial<SwitchProps>): SwitchStylesType => {
  const sizeStyles = getSizeStyles(props.size);

  return {
    container: {
      display: 'inline-flex',
      flexDirection: 'column',
      width: props.width ? `${props.width}px` : 'auto',
    },
    switch: {
      position: 'relative',
      display: 'inline-block',
      width: sizeStyles.width,
      height: sizeStyles.height,
    },
    track: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: -3,
      backgroundColor: colors.background.background3,
      borderRadius: sizeStyles.height,
      transition: 'background-color 0.2s ease',
      border: `2px solid ${colors.border.border3}`,
    },
    trackChecked: {
      backgroundColor: colors.action.primary.background,
      border: `2px solid ${colors.action.primary.background}`,
    },
    trackDisabled: {
      backgroundColor: `rgba${colors.background.background3}, 0.4`,
      cursor: 'not-allowed',
    },
    trackError: {
      backgroundColor: colors.semantic.red.background,
    },
    thumb: {
      position: 'absolute',
      top: (sizeStyles.height - sizeStyles.thumbSize) / 2,
      left: 2,
      width: sizeStyles.thumbSize,
      height: sizeStyles.thumbSize,
      backgroundColor: colors.action.primary.text,
      borderRadius: '50%',
      transition: 'transform 0.2s ease',
      boxShadow: boxShadows.action.colored,
    },
    thumbChecked: {
      transform: `translateX(${sizeStyles.thumbOffset}px)`,
    },
    thumbDisabled: {
      backgroundColor: colors.action.primary.text,
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
  };
};
