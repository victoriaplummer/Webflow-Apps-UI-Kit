import styled from 'styled-components'
import { colors, spacing } from '../../foundations'

export const ScrollbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px;
  width: 10px;
  height: 420px;
  background: ${colors.background.background1}; // #1E1E1E
  border-radius: 0px;
  
  // Hide default scrollbar
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const ScrollThumb = styled.div<{ isDragging?: boolean }>`
  width: 6px;
  background: ${props => props.isDragging 
    ? colors.semantic.blue.background
    : colors.background.background4};
  border-radius: ${spacing.xxs};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${colors.action.primary.backgroundHover};
  }
`