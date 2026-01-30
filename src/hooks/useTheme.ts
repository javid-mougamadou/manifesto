import { useEffect } from 'react';
import type { Theme } from '../constants';
import { usePersistentState } from './usePersistentState';

export type { Theme };

export function useTheme() {
  const [theme, setTheme, resetTheme] = usePersistentState<Theme>({
    key: 'manifesto.theme-v1',
    defaultValue: 'light',
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return { theme, toggleTheme, resetTheme };
}
