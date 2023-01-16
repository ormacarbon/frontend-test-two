import React from "react";
import styled from "styled-components";
import Link from "next/link";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Image from "next/image";
import bmg from "../public/coin.png";
import MoonIcon from "../public/icons/moonIcon";
import SunIcon from "../public/icons/sunIcon";
import Toggle from "./toggle";
import { useState } from "react";
import { lightTheme, darkTheme } from "../pages/themes.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../pages/themes.js";


const DivInitial = styled.div`
  display: flex;
  justify-content: space-between;
  
  box-shadow: 10px 5px 500px rgba(0, 0, 0, 0.08);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    353deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(18, 18, 41, 1) 100%,
    rgba(14, 14, 14, 1) 100%
  );

  align-items: center;
  padding: 0 5px;
  height: 75px;
  background-color: black;
  @media (max-width: 576px) {
    display: inline-block;
  }
`;

const Lists = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0 5px;
  color: white;
  font-size: 25px;
  margin-right: 15px;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;

const Colum = styled.ul`
  display: flex;
  padding: 0 20px;
  align-items: center;
  margin-left: 80px;

  @media (max-width: 768px) {
    margin-right: 38px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledIcon = styled(DarkModeOutlinedIcon)`
  margin-right: 40px;
  color: white;
`;

const ImgBrm = styled(Image)`
  width: 60px;
  height: 60px;
  margin-right: 300px;
  @media (max-width: 768px) {
    visibility: hidden;
  }
  animation: rotation 8s infinite linear;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;


const SunStyle = styled(SunIcon)`
  
`


const navbar = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };



  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <DivInitial>
        <Colum>
          <Lists>
            <StyledLink href="/">Home</StyledLink>
          </Lists>
          <Lists>
            <StyledLink href="/search">Search</StyledLink>
          </Lists>
          <Lists>
            <StyledLink href="/galery">Galery</StyledLink>
          </Lists>
          <div>
            <MoonIcon  />
            <Toggle toggleTheme={themeToggler} />
            
            <SunStyle />
          </div>
        </Colum>
        <ImgBrm src={bmg} alt="/" />
    
      </DivInitial>
    </ThemeProvider>
  );
};

export default navbar;
