import React, { createContext, useState } from "react";
import { DarkWrapper } from "./styles";

export const MainWrapper = createContext({
  darkMode: false,
  setDarkMode: () => {},
  isLogged: false,
  setIsLogged: () => {},
  currentNavigation: "",
  setCurrentNavigation: () => {},
  characterId: 0,
  setCharacterId: () => {},
  locationId: 0,
  setLocationId: () => {},
  episodeId: 0,
  setEpisodeId: () => {},
});

function Wrapper({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState("");
  const [characterId, setCharacterId] = useState(0);
  const [locationId, setLocationId] = useState(0);
  const [episodeId, setEpisodeId] = useState(0);

  return (
    <MainWrapper.Provider
      value={{
        darkMode,
        setDarkMode,
        isLogged,
        setIsLogged,
        currentNavigation,
        setCurrentNavigation,
        characterId,
        setCharacterId,
        locationId,
        setLocationId,
        episodeId,
        setEpisodeId,
      }}
    >
      <DarkWrapper darkMode={darkMode} data-testid="darkmode-wrapper">{children}</DarkWrapper>
    </MainWrapper.Provider>
  );
}

export default Wrapper;
