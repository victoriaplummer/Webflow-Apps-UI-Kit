import { AvatarProps } from '../Avatar'

export interface AvatarGroupProps {
  /** Array of avatar data */
  avatars: Array<AvatarProps>
  /** Maximum number of avatars to display */
  max?: number
  /** Size of the avatars */
  size?: AvatarProps['size']
  /** Optional CSS class name */
  className?: string
}