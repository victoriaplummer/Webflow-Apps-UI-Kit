import React from 'react';
import { TextProps } from './Text.types';
import { getTextStyles } from './Text.styles';
export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  color,
  align,
  weight,
  as,
  className,
  children,
}) => {
  const styles = getTextStyles({
    variant,
    color,
    align,
    weight,
  });

  const Component =
    as || (variant?.startsWith('h') ? (variant as keyof JSX.IntrinsicElements) : 'p');

  return (
    <Component className={className} style={styles.text}>
      {children}
    </Component>
  );
};
