import React from 'react';
import { StyledAvatar, AvatarImage, InitialsText } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  colorOption = 1,
  name,
}) => {
  const hasImage = Boolean(src);

  const getInitials = (name?: string) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <StyledAvatar hasImage={hasImage} colorOption={colorOption} size={size}>
      {hasImage ? (
        <AvatarImage src={src} alt={alt} />
      ) : name ? (
        <InitialsText size={size}>{getInitials(name)}</InitialsText>
      ) : null}
    </StyledAvatar>
  );
};
