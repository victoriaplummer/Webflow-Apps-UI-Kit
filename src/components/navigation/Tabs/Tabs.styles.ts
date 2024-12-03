import styled from 'styled-components';
import { colors, spacing } from '../../foundations';

export const TabsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  height: 40px;
  border-bottom: 1px solid ${colors.border.border1};
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 ${spacing.xs};
  gap: ${spacing.s};
  height: 40px;
  width: 100%;
`;

export const TabItem = styled.button<{ isActive?: boolean }>`
  background: none;
  border: none;
  color: ${props => props.isActive ? colors.text.text1 : colors.text.text2};
  padding: ${spacing.xs} 0;
  cursor: pointer;
  position: relative;
  min-width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.isActive ? colors.semantic.blue.border : 'transparent'};
  }

  &:hover {
    color: ${colors.text.text1};
  }
`;

export const TabPanel = styled.div`
  // Add your panel styles here
`;
