import React, { useContext } from "react";
import * as C from "./style";
import { ThemeContext } from "../../contexts/themeContext";

const Title = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <C.ContainerTitle theme={theme}>
      <h2>{text}</h2>
    </C.ContainerTitle>
  );
};

export default Title;
