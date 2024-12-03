import { StackProps } from './Stack.types';

export const getStackStyles = (props: Partial<StackProps>): React.CSSProperties => {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    gap: typeof props.spacing === 'number' ? `${props.spacing}px` : props.spacing || '0',
    alignItems: props.align,
    justifyContent: props.justify,
    flexWrap: props.wrap,
  };
};
