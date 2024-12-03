
export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
  density?: 'compact' | 'default'
  isHovered?: boolean
  isFocused?: boolean
  isError?: boolean
}
