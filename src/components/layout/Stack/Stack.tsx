import { Box } from '../../primitives/Box';
import { StackProps } from './Stack.types';

export const Stack = ({
  children,
  direction = 'column',
  spacing = '0',
  align,
  justify,
  wrap,
  ...props
}: StackProps) => {
  return (
    <Box
      display="flex"
      flexDirection={direction}
      gap={spacing}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      {...props}
    >
      {children}
    </Box>
  );
};
