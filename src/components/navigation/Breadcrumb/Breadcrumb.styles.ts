import { BreadcrumbProps } from './Breadcrumb.types';
import { styled } from 'styled-components';
import { colors } from '../../foundations';

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbItem = styled.li<{
  isLast: boolean;
  size?: BreadcrumbProps['size'];
}>`
  display: flex;
  align-items: center;
  font-size: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '0.875rem';
      case 'large':
        return '1.125rem';
      default:
        return '1rem';
    }
  }};
`;

export const BreadcrumbLink = styled.a<{
  isLast: boolean;
  activeItemColor?: string;
}>`
  color: ${({ isLast, activeItemColor }) =>
    isLast ? activeItemColor || colors.semantic.blue.text : colors.text.text3};
  text-decoration: none;
  cursor: ${({ isLast }) => (isLast ? 'default' : 'pointer')};

  &:hover {
    text-decoration: ${({ isLast }) => (isLast ? 'none' : 'underline')};
  }
`;

export const Separator = styled.span<{
  size?: BreadcrumbProps['size'];
}>`
  margin: 0 0.5rem;
  color: ${colors.text.text3};
  opacity: 0.5;
  font-size: ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return '0.875rem';
      case 'large':
        return '1.125rem';
      default:
        return '1rem';
    }
  }};
`;

export const Ellipsis = styled.span`
  margin: 0 0.5rem;
  color: ${colors.text.text3};
  opacity: 0.5;
`;
