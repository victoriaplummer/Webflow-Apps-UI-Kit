import { BaseComponentProps } from '../../utils/types';

export interface MenuItemProps {
  id: string;
  label: string;
  labelSecondary?: string;
  option?: string;
  isSelected?: boolean;
  isHovered?: boolean;
  isExpanded?: boolean;
  variant?: 'default' | 'heading';
  prefixIcon?: React.ReactNode;
  suffix?: React.ReactNode;
  onClick?: () => void;
}

export interface MenuProps extends BaseComponentProps {
  items: MenuItemProps[];
  variant?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium' | 'large';
  activeId?: string;
  expandedIds?: string[];
  onItemClick?: (item: MenuItemProps) => void;
  onExpandChange?: (id: string, expanded: boolean) => void;
  showIcons?: boolean;
  bordered?: boolean;
  rounded?: boolean;
}
