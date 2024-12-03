import styled, { css } from 'styled-components';
import { colors, spacing, boxShadows } from '../../foundations';
import { DropdownProps } from './Dropdown.types';

export const StyledDropdown = styled.div<DropdownProps>`
  position: relative;
  width: 100%;

  select {
    width: 100%;
    height: ${(props) => (props.density === 'compact' ? '24px' : '32px')};
    padding: 0 ${spacing.m} 0 ${spacing.xs};
    background: ${colors.action.secondary.background};
    border: none;
    border-radius: ${spacing.borderRadius.small}px;
    color: ${colors.text.text1};
    appearance: none;
    cursor: pointer;
    box-shadow: ${boxShadows.action.secondary};

    &::placeholder {
      color: ${colors.text.text2};
    }

    ${(props) =>
      props.isHovered &&
      css`
        background: ${colors.action.secondary.backgroundHover};
      `}

    ${(props) =>
      props.isFocused &&
      css`
        outline: 2px solid ${colors.semantic.blue.border};
        outline-offset: 1px;
      `}

    ${(props) =>
      props.isError &&
      css`
        outline: 2px solid ${colors.semantic.red.border};
        outline-offset: 1px;
      `}

    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
        color: ${colors.text.inactive};
      `}
  }

  &::after {
    content: '';
    position: absolute;
    right: ${spacing.xs};
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%23D1D1D1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      &::after {
        opacity: 0.5;
      }
    `}
`;
