import React from 'react'
import { AvatarGroupContainer, GroupedAvatar, MoreAvatars } from './AvatarGroup.styles'
import { AvatarGroupProps } from './AvatarGroup.types'

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  size = 'md',
  className
}) => {
  const visibleAvatars = avatars.slice(0, max)
  const remainingCount = avatars.length - max

  return (
    <AvatarGroupContainer className={className}>
      {visibleAvatars.map((avatar, index) => (
        <GroupedAvatar key={index} size={size} {...avatar} />
      ))}
      {remainingCount > 0 && (
        <MoreAvatars size={size} initials={`+${remainingCount}`} />
      )}
    </AvatarGroupContainer>
  )
}