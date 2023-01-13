import { Moon, Sun } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import { ToggleTheme } from "./styles";


export function DarkTheme(){
  const { toggleTheme, currentTheme } = useContext(ThemeContext)

  function handleToggleTheme() {
    toggleTheme();
  }
  return (
    <>
      {currentTheme === 'dark' ? (
        <ToggleTheme onClick={handleToggleTheme}>
          <Sun size={24} />
        </ToggleTheme>
      ) : (
        <ToggleTheme onClick={handleToggleTheme}>
          <Moon size={24} />
        </ToggleTheme>
      )}
    </>
  )
}