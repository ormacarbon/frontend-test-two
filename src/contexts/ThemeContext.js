import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { themes } from '../assets/styles/themes/default';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, handleToggleTheme }}>
      <GlobalStyles theme={currentTheme} />
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
