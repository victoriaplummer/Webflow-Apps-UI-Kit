import { BaseComponentProps } from '../../utils/types'

export interface EmptyStateProps extends BaseComponentProps {
  icon?: React.ReactNode
  title: string
  body: string
  actionText?: string
  isNested?: boolean
  onAction?: () => void
}
