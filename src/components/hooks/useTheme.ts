import { useState, useCallback } from 'react';
import { ThemeMode } from '../utils/types';

export const useTheme = (initialMode = false): ThemeMode => {
  const [isDark, setIsDark] = useState(initialMode);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return {
    isDark,
    toggleTheme,
  };
};
