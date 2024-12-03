import styled from 'styled-components';
import { GridProps } from './Grid.types';

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns = 12 }) =>
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  ${({ gap }) => gap && `gap: ${typeof gap === 'number' ? `${gap}px` : gap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${typeof rowGap === 'number' ? `${rowGap}px` : rowGap}`};
  ${({ columnGap }) =>
    columnGap && `column-gap: ${typeof columnGap === 'number' ? `${columnGap}px` : columnGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${areas}`};
  ${({ autoFlow }) => autoFlow && `grid-auto-flow: ${autoFlow}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
`;
