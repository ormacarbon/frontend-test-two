import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("me configure primeiro");
  },
  toggleMode: () => {
    alert("me configure primeiro");
  },
});

export default function ColorModeProvider({ children, inicialMode }) {
  const [mode, setMode] = useState(inicialMode);

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      setCookie(null, "USER_THEME", "light", {
        maxAge: 86400 * 7,
        path: "/",
      });
    }
    if (mode === "light") {
      setMode("dark");
      setCookie(null, "USER_THEME", "dark", {
        maxAge: 86400 * 7,
        path: "/",
      });
    }
  }

  useEffect(() => {
    const cookies = parseCookies();
    const userTheme = cookies.USER_THEME;
    if (userTheme) {
      setMode(userTheme);
    }
  }, []);

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

