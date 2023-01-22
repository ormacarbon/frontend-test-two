import { createContext } from "react";
import styled from "styled-components";

export const themes = {
  dark: "dark-mode",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: (prop) => {
    console.log(prop);
  },
});

export const BtnDarkMode = styled.button`
  position: fixed;
  bottom: 138px;
  right: 10px;
  z-index: 999;
  background-image: url("/images/btn-dark.png");
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  width: 80px;
  height: 40px;
`;
