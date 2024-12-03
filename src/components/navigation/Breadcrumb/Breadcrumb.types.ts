import { ReactNode } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface BreadcrumbItem {
  id: string;
  label: string | ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps extends BaseComponentProps {
  items: BreadcrumbItem[];
  separator?: string | ReactNode;
  maxItems?: number;
  size?: 'small' | 'medium' | 'large';
  activeItemColor?: string;
  onItemClick?: (item: BreadcrumbItem) => void;
}
