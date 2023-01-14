import React, { useContext } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "styled-components";
import {
  DarkButton,
  HeaderWrapper,
  HeaderWrapperInner,
  HomeButton,
  LightButton,
  SpaceBetween,
} from "./styles";

export default function Header({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <HeaderWrapperInner>
        <SpaceBetween>
          <HomeButton href="/">Pokémon Search</HomeButton>

          {title === "light" ? (
            <DarkButton onClick={toggleTheme} />
          ) : (
            <LightButton onClick={toggleTheme} size={25} />
          )}
        </SpaceBetween>
      </HeaderWrapperInner>
    </HeaderWrapper>
  );
}
