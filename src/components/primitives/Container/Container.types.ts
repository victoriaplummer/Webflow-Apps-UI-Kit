import { BaseContainerProps } from '../../utils/types';

export interface ContainerProps extends BaseContainerProps {
  // Add any Container-specific props here
  background?: string;
  borderRadius?: string | number;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
