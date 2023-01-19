import React from "react";

import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const context = React.useContext(ThemeContext);
  const { toggleTheme, theme } = context;
  return {
    toggleTheme,
    theme,
  };
}
