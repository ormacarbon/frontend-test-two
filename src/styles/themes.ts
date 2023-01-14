import { DefaultTheme } from "styled-components";

const baseTheme = {
  fontFamily: "Poppins",

  fontWeights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  fontSizes: {
    "4xl": "4rem",
    "3xl": "3rem",
    "2xl": "2rem",
    xl: "1.5rem",
    lg: "1.25rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },

  radii: {
    sm: "0.5rem",
    md: "0.75rem",
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    primary: "#7221de",
    secondary: "#FF6A55",

    background1: "#141320",
    background2: "#1c1a2d",
    background3: "#26243e",

    text1: "#EFEFEF",
    text2: "#9A9FA5",
    text3: "#5B6268",

    success: "#66b576",
    error: "#f34a5e",
    info: "#2866c3",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    primary: "#7221de",
    secondary: "#FF6A55",

    background1: "#FFFFFF",
    background2: "#EFF1F5",
    background3: "#C9E9F8",

    text1: "#141320",
    text2: "#1c1a2d",
    text3: "#26243e",

    success: "#66b576",
    error: "#f34a5e",
    info: "#2866c3",
  },
};
