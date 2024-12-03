import { BoxProps } from './Box.types';
import { spacing } from '../../foundations/spacing';

export const getBoxStyles = (props: Partial<BoxProps>): React.CSSProperties => {
  return {
    backgroundColor: props.backgroundColor,
    border: props.border,
    borderRadius: `${props.borderRadius || spacing.borderRadius}px`,
    boxShadow: props.boxShadow,
    display: props.display,
    position: props.position,
    overflow: props.overflow,
    zIndex: props.zIndex,
    width: props.width,
    height: props.height,
    padding: props.padding,
    margin: props.margin,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    flexDirection: props.flexDirection,
    flexWrap: props.flexWrap,
    gap: props.gap,
  };
};
