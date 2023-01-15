import { DefaultTheme } from "styled-components";
import dark from "./theme/dark";
import light from "./theme/light";

type Dtheme = typeof light;
type Ctheme = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Dtheme {
     spacings: {
      xSmall: string,
      small: string,
      medium: string,
      large: string,
      xLarge: string,
    },

    content: {
      size: {
        large:string,
        medium: string,
      }
    },

    font: {
      sizes: {
        small:string,
        medium:string,
        large:string,
        xLarge:string,
        xxLarge:string,
      },
      weight: {
        light:string,
        regular:string,
        semiBold:string,
        bold:string,
      }
    },

    box: {
      shadow:string,
      border:string,
      radius:string,
    }
  }

  export interface CustomTheme extends Ctheme {}
}
