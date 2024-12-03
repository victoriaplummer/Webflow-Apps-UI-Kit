import styled, { css } from 'styled-components'
import { DividerOrientation, DividerElevation } from './Divider.types'

const getElevationBackground = (elevation: DividerElevation) => {
  switch (elevation) {
    case 1:
      return 'rgba(255, 255, 255, 0.13)'
    case 2:
      return 'rgba(255, 255, 255, 0.14)'
    case 3:
      return 'rgba(255, 255, 255, 0.19)'
    default:
      return 'rgba(255, 255, 255, 0.13)'
  }
}

const getOrientationStyles = (orientation: DividerOrientation) => css`
  ${orientation === 'vertical' ? `
    width: 1px;
    height: 100%;
  ` : `
    width: 100%;
    height: 1px;
  `}
`

export const StyledDivider = styled.hr<{
  orientation: DividerOrientation
  elevation: DividerElevation
}>`
  border: none;
  margin: 0;
  flex: none;
  flex-grow: 0;
  background: ${props => getElevationBackground(props.elevation)};
  ${props => getOrientationStyles(props.orientation)}
  
  ${props => props.elevation === 2 && `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
  `}
`
