import styled from 'styled-components';
import { colors, spacing } from '../../foundations';

export const StyledEmptyState = styled.div<{ isNested?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing.xs};
  gap: ${spacing.xxs};
  width: 280px;
  height: 104px;
  background: ${({ isNested }) => 
    isNested ? colors.background.background1 : colors.background.background2};
  border-radius: 4px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: ${spacing.xs} 0;
  width: 16px;
  height: 32px;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${colors.text.text2};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: ${spacing.xxs};
  width: 264px;
  height: 52px;
`;

export const TitleAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 264px;
  height: 32px;
`;

export const Title = styled.div`
  width: 264px;
  height: 16px;
  font: var(--text-11-medium);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${colors.text.text1};
`;

export const Body = styled.div`
  width: 264px;
  height: 16px;
  font: var(--text-11-regular);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${colors.text.text2};
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: ${spacing.xxs};
  width: 264px;
  height: 16px;
`;

export const ActionText = styled.div`
  width: 264px;
  height: 16px;
  font: var(--text-11-regular);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${colors.semantic.blue.text};
`;
