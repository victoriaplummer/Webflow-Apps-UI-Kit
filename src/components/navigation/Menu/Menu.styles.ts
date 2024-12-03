import styled, { css } from 'styled-components';
import { spacing, colors } from '../../foundations';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${spacing.xxs};
  gap: ${spacing.xxs};
  background: ${colors.background.background3};
  border-radius: ${spacing.xxs};
`;

export const MenuItem = styled.div<{
  isSelected?: boolean;
  isHovered?: boolean;
  variant?: 'default' | 'heading';
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${spacing.xs} ${spacing.xxs};
  gap: ${spacing.xs};
  font-family: var(--font-stack);
  font-size: var(--font-size-small);
  letter-spacing: var(--font-size-small-letter-spacing);
  line-height: ${spacing.s};
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${colors.background.background5};
  }

  ${({ isHovered }) =>
    isHovered &&
    css`
      background: ${colors.background.background5};
    `}

  ${({ variant }) =>
    variant === 'heading' &&
    css`
      font-weight: 500;
      color: ${colors.text.text2};
    `}
`;

export const CheckIcon = styled.div`
  flex: none;
  color: ${colors.text.text1};

  svg {
    position: absolute;
    left: 16.54%;
    right: 16.54%;
    top: 22.79%;
    bottom: 31.25%;
    background: ${colors.text.text1};
  }
`;

export const PrefixIcon = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  color: ${colors.text.text1};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  .label-container {
    display: flex;
    flex-direction: row;
    gap: ${spacing.xxs};
    align-items: center;
  }
`;

export const Label = styled.span`
  font: var(--text-11-regular);
  color: ${colors.text.text1};
`;

export const LabelSecondary = styled.span`
  font: var(--text-11-regular);
  color: ${colors.text.text2};
`;

export const Option = styled.span`
  font: var(--text-11-regular);
  color: ${colors.text.text2};
`;

export const SuffixIcon = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  color: ${colors.text.text2};
  margin-left: auto;
`;
