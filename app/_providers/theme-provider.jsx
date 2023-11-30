'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Use ThemeProvider in a parent component');
  }

  return context;
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
