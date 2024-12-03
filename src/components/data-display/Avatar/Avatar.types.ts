import { BaseComponentProps } from '../../utils/types'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends BaseComponentProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  colorOption?: 1 | 2 | 3
  name?: string
  initials?: string
}
