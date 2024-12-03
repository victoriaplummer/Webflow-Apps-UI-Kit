import React from 'react';
import { BreadcrumbProps } from './Breadcrumb.types';
import {
  BreadcrumbContainer,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  Separator,
  Ellipsis,
} from './Breadcrumb.styles';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  maxItems,
  size = 'medium',
  activeItemColor,
  onItemClick,
  ...props
}) => {
  const renderItems = () => {
    let displayedItems = [...items];

    if (maxItems && items.length > maxItems) {
      const firstItem = items[0];
      const lastItems = items.slice(-Math.floor(maxItems - 1));
      displayedItems = [firstItem, ...lastItems];
    }

    return displayedItems.map((item, index) => {
      const isLast = index === displayedItems.length - 1;
      const showSeparator = !isLast;

      const handleClick = (e: React.MouseEvent) => {
        if (isLast) {
          e.preventDefault();
          return;
        }
        item.onClick?.();
        onItemClick?.(item);
      };

      return (
        <React.Fragment key={item.id}>
          {maxItems && index === 1 && items.length > maxItems && (
            <BreadcrumbItem isLast={false} size={size}>
              <Ellipsis>...</Ellipsis>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem isLast={isLast} size={size}>
            <BreadcrumbLink
              href={item.href}
              onClick={handleClick}
              isLast={isLast}
              activeItemColor={activeItemColor}
            >
              {item.label}
            </BreadcrumbLink>
            {showSeparator && <Separator size={size}>{separator}</Separator>}
          </BreadcrumbItem>
        </React.Fragment>
      );
    });
  };

  return (
    <BreadcrumbContainer aria-label="Breadcrumb" {...props}>
      <BreadcrumbList>{renderItems()}</BreadcrumbList>
    </BreadcrumbContainer>
  );
};
