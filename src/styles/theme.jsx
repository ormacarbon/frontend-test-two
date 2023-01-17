import { ThemeProvider, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

html {
  scroll-behavior: smooth;
}

#main {
  display: flex;

  main {
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 280px);
    min-height: calc(100vh - 80px);

    .container {
      @media screen and (min-width: 1900px) {        
        position: relative;
        right: 130px;
      }
    }

    @media screen and (max-width: 980px) {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 980px) {
    display: initial;
  }
}

.container {
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
}

button {
  cursor: pointer;
}
`;

export const theme = {
  colors: {
    redCrayola: "#FA174B",
    tangerine: "#fb8500",
    minionYellow: "#FFE45C",
    blueJeans: "#00a6fb",
    greenBlueCrayola: "#0582ca",
    sapphireBlue: "#006494",
    prussianBlue: "#003554",
    richBlackFogra29: "#051923",
    cultured: "#F8F9FA",
    culturedDarker: "#E9ECEF",
    gainsboro: "#DEE2E6",
    lightGray: "#CED4DA",
    cadetBlueCrayola: "#ADB5BD",
    sonicSilver: "#6C757D",
    davysGray: "#495057",
    onyx: "#343A40",
    eerieBlack: "#212529",
    black: "#000000",
    white: "#ffffff",
  },
  fontSizes: {
    fs_small: "14px",
    fs_medium: "16px",
    fs_mediumLg: "18px",
    fs_large: "24px",
    fs_largeX: "32px",
    fs_largeXx: "48px",
  },
  utils: {
    flexUtil(flexFlow, justifyContent, alignItems, important) {
      return {
        display: `flex ${important ? important : ""}`,
        flexFlow: flexFlow,
        justifyContent: justifyContent,
        alignItems: alignItems,
      };
    },
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
