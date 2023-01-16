import { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Container } from "./styles";


export function Header({ onChangeTheme }) {  


  return (
    <Container>
      <Navbar/>
      <ThemeSwitcher onChangeTheme={onChangeTheme} />
    </Container>
  )
}