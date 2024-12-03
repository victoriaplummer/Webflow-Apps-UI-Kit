import { BaseComponentProps, LayoutProps } from '../../utils/types';

export interface BoxProps
  extends BaseComponentProps,
    LayoutProps,
    React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'none';
  gridArea?: string;
  gridColumn?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  zIndex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
