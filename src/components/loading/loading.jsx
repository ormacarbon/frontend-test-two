import { useContext } from "react";
import { BarsSpinner } from "react-spinners-kit";

import { themeContext } from "../../context/themeContext";

import { LoadingComponent } from "./loadingStyle";
import { theme } from "../../styles/theme";

export function Loading({ isLoading }) {
  const [darkTheme, setDarkTheme] = useContext(themeContext);

  return (
    <LoadingComponent dark={darkTheme}>
      <BarsSpinner
        loading={isLoading}
        color={darkTheme ? theme.colors.blueJeans : theme.colors.redCrayola}
      />
    </LoadingComponent>
  );
}
