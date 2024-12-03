import { ReactNode } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface Tab {
  id: string;
  label: string | ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends BaseComponentProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underlined';
  size?: 'small' | 'medium' | 'large';
  align?: 'start' | 'center' | 'end';
  fullWidth?: boolean;
}
