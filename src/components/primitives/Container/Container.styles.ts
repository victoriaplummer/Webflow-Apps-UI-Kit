import { colors, spacing } from '../../foundations';
import { ContainerProps } from './Container.types';

export const getContainerStyles = ({
  width,
  height,
  padding = spacing.xs,
  gap = spacing.s,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexDirection = 'column',
  background = colors.background.background1,
  borderRadius = `${spacing.borderRadius}px`,
}: ContainerProps): React.CSSProperties => ({
  display: 'flex',
  flexDirection,
  alignItems,
  justifyContent,
  padding,
  gap,
  position: 'relative',
  width,
  height,
  background,
  borderRadius,
});
