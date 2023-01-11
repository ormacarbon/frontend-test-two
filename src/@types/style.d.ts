import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      background1: string;
      background2: string;
      background3: string;

      text1: string;
      text2: string;
      text3: string;

      success: string;
      error: string;
      info: string;
    };

    fontFamily: string;

    fontWeights: {
      regular: string;
      medium: string;
      bold: string;
    };
    fontSizes: {
      "4xl": string;
      "3xl": string;
      "2xl": string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };

    radii: {
      sm: string;
      md: string;
    };
  }
}
