const BASE_UNIT = 4;

export const spacing = {
  xxs: `${BASE_UNIT}px`, // 4px
  xs: `${BASE_UNIT * 2}px`, // 8px
  s: `${BASE_UNIT * 3}px`, // 12px
  m: `${BASE_UNIT * 4}px`, // 16px
  l: `${BASE_UNIT * 5}px`, // 20px
  xl: `${BASE_UNIT * 6}px`, // 24px
  xxl: `${BASE_UNIT * 8}px`, // 32px

  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },

  // Padding/margin values in pixels
  padding: {
    small: 8,
    medium: 12,
    large: 16,
  },

  // Gap values in pixels
  gap: {
    small: 4,
    medium: 8,
    large: 12,
  },

  // Shadows
  shadows: {
    actionSecondary: '0px 0.5px 1px #000000, inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.12)',
    actionColored:
      '0px 0.5px 1px #000000, inset 0px 29px 23px -16px rgba(255, 255, 255, 0.04), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.2)',
  },
} as const;

// Type helper
export type SpacingToken = keyof typeof spacing;
