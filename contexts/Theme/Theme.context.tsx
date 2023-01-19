import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme,
  isDark: boolean,
  toggle: () => void
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  isDark: true,
  toggle: () => null
});

function ThemeContextComponent(props: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme') === 'dark'
      ? 'dark'
      : (window.localStorage.getItem('theme') === 'light'
          ? 'light'
          : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      )
    )
  }, []);


  function toggle() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <div className={theme}>
      <ThemeContext.Provider value={ {
        theme,
        isDark: theme === 'dark',
        toggle
      } }>
        <ThemeProvider theme={ createTheme({
          palette: { mode: theme }
        }) }>
          { props.children }
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeContextComponent;