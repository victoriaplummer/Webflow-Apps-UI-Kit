export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

export interface WebflowTheme {
  brandColor: string;
  textColor: string;
  backgroundColor: string;
  // Add more theme properties as needed
}
