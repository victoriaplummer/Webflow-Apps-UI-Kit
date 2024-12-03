import React from 'react'
import {
  StyledEmptyState,
  IconWrapper,
  Content,
  TitleAndLabel,
  Title,
  Body,
  Controls,
  ActionText
} from './EmptyState.styles'
import { EmptyStateProps } from './EmptyState.types'

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  body,
  actionText,
  isNested = false,
  onAction,
  ...props
}) => {
  return (
    <StyledEmptyState isNested={isNested} {...props}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Content>
        <TitleAndLabel>
          <Title>{title}</Title>
          <Body>{body}</Body>
        </TitleAndLabel>
        {actionText && (
          <Controls>
            <ActionText onClick={onAction}>{actionText}</ActionText>
          </Controls>
        )}
      </Content>
    </StyledEmptyState>
  )
}
