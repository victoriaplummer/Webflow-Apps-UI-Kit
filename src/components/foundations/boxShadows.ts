export const boxShadows = {
  action: {
    secondary: 'var(--boxShadows-action-secondary)',
    colored: 'var(--boxShadows-action-colored)',
  }
} as const

// Type for the boxShadows object
export type BoxShadows = typeof boxShadows

// Export individual shadow categories for direct use
export type ActionShadows = BoxShadows['action']

export default boxShadows 