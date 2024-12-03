import { ReactNode } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface GridProps extends BaseComponentProps {
  children: ReactNode;
  columns?: number | string;
  rows?: string;
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  areas?: string;
  autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
}
