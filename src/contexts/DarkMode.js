import React, { createContext, useContext, useState } from 'react';

const darkModeContext = createContext();

export const useDarkModeContext = () => {
  return useContext(darkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};
