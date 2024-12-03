import { createGlobalStyle } from 'styled-components';
import type { Theme } from '../theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;
