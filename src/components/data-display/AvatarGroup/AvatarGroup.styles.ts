import styled from 'styled-components'
import { Avatar } from '../Avatar'

export const AvatarGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
`

export const StyledAvatarGroup = styled(Avatar)`
  margin-left: -8px;

  &:first-child {
    margin-left: 0;
  }
`

export const MoreAvatars = styled(StyledAvatarGroup)`
  background: ${({ theme }) => theme?.colors?.background ?? '#FFFFFF'};
  color: ${props => props.theme.colors.text.text1};
`

export const GroupedAvatar = styled(Avatar)`
  margin-left: -8px;
  border: 2px solid ${({ theme }) => theme?.colors?.background ?? '#FFFFFF'};

  &:first-child {
    margin-left: 0;
  }
`