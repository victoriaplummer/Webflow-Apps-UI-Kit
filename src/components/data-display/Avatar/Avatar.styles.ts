import styled from 'styled-components';
import { spacing, colors } from '../../foundations';

const sizes = {
  sm: spacing.l,
  md: spacing.xl,
  lg: spacing.xxl,
};

const fontSizes = {
  sm: '11px',
  md: '15px',
  lg: '19px',
};

export const StyledAvatar = styled.div<{
  hasImage: boolean;
  colorOption: number;
  size: 'sm' | 'md' | 'lg';
}>`
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ hasImage, colorOption }) =>
    !hasImage &&
    `
    background: ${
      colorOption === 1
        ? colors.semantic.purple.background
        : colorOption === 2
          ? colors.semantic.green.background
          : colorOption === 3
            ? colors.semantic.blue.background
            : colors.semantic.purple.background
    };
    color: ${colors.text.text1};
  `}
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InitialsText = styled.span<{ size: 'sm' | 'md' | 'lg' }>`
  color: ${colors.text.text1};
  font-size: ${({ size }) => fontSizes[size]};
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;
