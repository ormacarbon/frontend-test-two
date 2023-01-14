import { colors } from "./colors";
import { dark as DarkTheme } from "./dark";
import { light as LightTheme } from "./light";

const combinedLightThemes = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    ...colors,
  },
};

const combinedDarkThemes = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colors,
  },
};

export const light = combinedLightThemes;
export const dark = combinedDarkThemes;
