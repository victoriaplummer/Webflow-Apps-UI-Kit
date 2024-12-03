import React from 'react';
import { GridProps } from './Grid.types';
import { StyledGrid } from './Grid.styles';

export const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};
