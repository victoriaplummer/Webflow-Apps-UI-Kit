import styled, { css } from 'styled-components'
import { colors } from '../../foundations'

export const RadioContainer = styled.label<{
  isHovered?: boolean
  isFocused?: boolean
  isError?: boolean
  disabled?: boolean
}>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`

export const RadioInput = styled.input.attrs({ type: 'radio' })<{
  isHovered?: boolean
  isFocused?: boolean
  isError?: boolean
}>`
  appearance: none;
  margin: 0;
  width: 12px;
  height: 12px;
  border: 1px solid ${colors.border.border1};
  border-radius: 50%;
  position: relative;
  cursor: inherit;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    transition: background 0.2s;
  }

  &:checked {
    background: ${colors.action.primary.background};
    border-color: ${colors.action.primary.background};
    
    &::before {
      background: ${colors.action.primary.text};
    }
  }

  ${props => props.isHovered && css`
    border-color: ${colors.action.primary.backgroundHover};
    
    &:checked {
      background: ${colors.action.primary.backgroundHover};
      border-color: ${colors.action.primary.backgroundHover};
    }
  `}

  ${props => props.isFocused && css`
    outline: 2px solid ${colors.semantic.blue.border};
    outline-offset: 1px;
  `}

  ${props => props.isError && css`
    border-color: ${colors.semantic.red.border};
    
    &:checked {
      background: ${colors.semantic.red.background};
      border-color: ${colors.semantic.red.border};
    }
  `}
`

export const RadioLabel = styled.span`
  color: ${colors.text.text1};
`
