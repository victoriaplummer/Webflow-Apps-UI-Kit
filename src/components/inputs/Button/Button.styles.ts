import styled from 'styled-components';
import { ButtonColorVariant, ButtonDensity, ButtonVariant, ButtonProps } from './Button.types';
import { colors } from '../../foundations/colors';
import { spacing } from '../../foundations/spacing';

const baseButtonStyles = `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacing.xxs};
  border-radius: ${spacing.borderRadius.small}px;
  transition: all 0.2s ease;
  color: var(--text1);
  outline: none;
  border: none;
  
  &:focus {
    outline: none;
  }
  
  &:focus-visible {
    outline: 2px solid ${colors.semantic.blue.border};
    outline-offset: 1px;
  }
`;

const densityStyles: Record<ButtonDensity, string> = {
  compact: `
    padding: ${spacing.xxs};
    height: 24px;
    width: auto;
  `,
  default: `
    padding: ${spacing.xs};
    height: 32px;
    width: auto;
  `,
};

const variantStyles: Partial<Record<ButtonVariant, Partial<Record<ButtonColorVariant, string>>>> = {
  solid: {
    default: `
      background: ${colors.action.secondary.background};
      box-shadow: none;
      border-radius: ${spacing.borderRadius.small}px;
      
      &:hover:not(:disabled) {
        background: ${colors.action.secondary.backgroundHover};
      }
      
      &:disabled {
        opacity: 0.4;
      }
    `,
    primary: `
      background: ${colors.action.primary.background};
      box-shadow: none;
      border-radius: ${spacing.borderRadius.small}px;
      
      &:hover:not(:disabled) {
        background: ${colors.action.primary.backgroundHover};
      }
      
      &:disabled {
        opacity: 0.4;
      }
    `,
    danger: `
      background: ${colors.semantic.red.background};
      box-shadow: none;
      border-radius: ${spacing.borderRadius.small}px;
      
      &:hover:not(:disabled) {
        background: ${colors.semantic.red.backgroundHover};
      }
      
      &:disabled {
        opacity: 0.4;
      }
    `,
  },
  outline: {
    default: `
      border: 1px solid ${colors.action.secondary.border};
      color: ${colors.action.secondary.text};
      background: ${colors.action.secondary.background};
      
      &:hover:not(:disabled) {
        border-color: ${colors.action.secondary.borderHover};
      }
    `,
  },
  ghost: {
    default: `
      background: transparent;

    &:hover:not(:disabled) {
        background: ${colors.action.secondary.backgroundHover};
      }
    `,
  },
};

export const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyles}
  ${(props) => densityStyles[props.density || 'compact']}
  ${(props) => variantStyles[props.variant || 'solid']?.[props.colorVariant || 'default']}
  color: ${(props) => props.color || 'var(--text1)'};

  &:focus-visible {
    outline: 2px solid ${colors.semantic.blue.border};
    outline-offset: 1px;
  }

  ${(props) =>
    props.isFocused &&
    `
    outline: 2px solid ${colors.semantic.blue.border};
    outline-offset: 1px;
  `}
`;
