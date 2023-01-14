import * as S from "./theme-switch.style";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeSwitchContext } from "@/contexts/ThemeContext";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeSwitchContext);

  return (
    <S.SwitchContainer onClick={() => toggleTheme()}>
      {theme === "dark" ? (
        <BsFillMoonFill size={"1.5rem"} id="moon" />
      ) : (
        <BsFillSunFill size={"1.5rem"} id="sun" />
      )}
    </S.SwitchContainer>
  );
};
