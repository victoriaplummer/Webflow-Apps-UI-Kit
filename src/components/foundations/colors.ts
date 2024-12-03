export const colors = {
  background: {
    hover: 'var(--backgroundHover)',
    background1: 'var(--background1)',
    background2: 'var(--background2)',
    background3: 'var(--background3)',
    background4: 'var(--background4)',
    background5: 'var(--background5)',
    inactive: 'var(--backgroundInactive)',
    inverse: 'var(--backgroundInverse)',
    input: 'var(--backgroundInput)',
  },
  action: {
    primary: {
      background: 'var(--actionPrimaryBackground)',
      backgroundHover: 'var(--actionPrimaryBackgroundHover)',
      text: 'var(--actionPrimaryText)',
      textHover: 'var(--actionPrimaryTextHover)',
      border: 'var(--actionPrimaryBorder)',
      borderHover: 'var(--actionPrimaryBorderHover)',
    },
    secondary: {
      background: 'var(--actionSecondaryBackground)',
      backgroundHover: 'var(--actionSecondaryBackgroundHover)',
      text: 'var(--actionSecondaryText)',
      textHover: 'var(--actionSecondaryTextHover)',
      border: 'var(--actionSecondaryBorder)',
      borderHover: 'var(--actionSecondaryBorderHover)',
    },
  },
  border: {
    border1: 'var(--border1)',
    border2: 'var(--border2)',
    border3: 'var(--border3)',
    actionSecondaryBorder: 'var(--actionSecondaryBorder)',
    actionSecondaryBorderHover: 'var(--actionSecondaryBorderHover)',
  },
  text: {
    text1: 'var(--text1)',
    text2: 'var(--text2)',
    text3: 'var(--text3)',
    inactive: 'var(--textInactive)',
    inverse: 'var(--textInverse)',
  },
  semantic: {
    blue: {
      text: 'var(--blueText)',
      icon: 'var(--blueIcon)',
      border: 'var(--blueBorder)',
      background: 'var(--blueBackground)',
    },
    green: {
      background: 'var(--greenBackground)',
      backgroundHover: 'var(--greenBackgroundHover)',
      text: 'var(--greenText)',
      icon: 'var(--greenIcon)',
      border: 'var(--greenBorder)',
    },
    yellow: {
      background: 'var(--yellowBackground)',
      backgroundHover: 'var(--yellowBackgroundHover)',
      text: 'var(--yellowText)',
      icon: 'var(--yellowIcon)',
      border: 'var(--yellowBorder)',
    },
    red: {
      background: 'var(--redBackground)',
      backgroundHover: 'var(--redBackgroundHover)',
      text: 'var(--redText)',
      icon: 'var(--redIcon)',
      border: 'var(--redBorder)',
    },
    orange: {
      background: 'var(--orangeBackground)',
      backgroundHover: 'var(--orangeBackgroundHover)',
      text: 'var(--orangeText)',
      icon: 'var(--orangeIcon)',
      border: 'var(--orangeBorder)',
    },
    purple: {
      background: 'var(--purpleBackground)',
      backgroundHover: 'var(--purpleBackgroundHover)',
      text: 'var(--purpleText)',
      icon: 'var(--purpleIcon)',
      border: 'var(--purpleBorder)',
    },
  },
} as const

// Type for the colors object
export type Colors = typeof colors

// Export individual color categories for direct use
export type BackgroundColors = Colors['background']
export type ActionColors = Colors['action']
export type BorderColors = Colors['border']
export type TextColors = Colors['text']
export type SemanticColors = Colors['semantic']

export default colors
