import React from 'react';
import {
  StyledMenu,
  MenuItem,
  CheckIcon,
  PrefixIcon,
  Content,
  Label,
  LabelSecondary,
  Option,
  SuffixIcon,
} from './Menu.styles';
import { MenuProps, MenuItemProps } from './Menu.types';

export const Menu: React.FC<MenuProps> = ({ items, onItemClick, onExpandChange }) => {
  const handleItemClick = (item: MenuItemProps) => {
    // Call the general onItemClick handler if it exists
    onItemClick?.(item);

    onExpandChange?.(item.id, !item.isExpanded);
  };

  return (
    <StyledMenu>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          isSelected={item.isSelected}
          isHovered={item.isHovered}
          variant={item.variant}
          onClick={() => handleItemClick(item)}
        >
          {item.isSelected && <CheckIcon />}

          {item.prefixIcon && <PrefixIcon>{item.prefixIcon}</PrefixIcon>}

          <Content>
            <div className="label-container">
              <Label>{item.label}</Label>
              {item.labelSecondary && <LabelSecondary>{item.labelSecondary}</LabelSecondary>}
            </div>
            {item.option && <Option>{item.option}</Option>}
          </Content>

          {item.suffix && <SuffixIcon>{item.suffix}</SuffixIcon>}
        </MenuItem>
      ))}
    </StyledMenu>
  );
};
