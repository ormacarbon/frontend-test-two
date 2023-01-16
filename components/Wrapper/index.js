import React, { createContext, useState } from "react";
import { DarkWrapper } from "./styles";

export const MainWrapper = createContext({
  darkMode: false,
  setDarkMode: () => {},
  isLogged: false,
  setIsLogged: () => {},
  isLocationDetail: false,
  setIsLocationDetail: () => {},
  charIdFromLocation: null,
  setCharIdFromLocation: () => {},
  isCharacterDetail: false,
  setIsCharacterDetail: () => {},
  locationIdFromCharacter: 0,
  setLocationIdFromCharacter: () => {},
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
  const [isLocationDetail, setIsLocationDetail] = useState(false);
  const [charIdFromLocation, setCharIdFromLocation] = useState(null);
  const [isCharacterDetail, setIsCharacterDetail] = useState(false);
  const [locationIdFromCharacter, setLocationIdFromCharacter] = useState(0);
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
        isLocationDetail,
        setIsLocationDetail,
        charIdFromLocation,
        setCharIdFromLocation,
        isCharacterDetail,
        setIsCharacterDetail,
        locationIdFromCharacter,
        setLocationIdFromCharacter,
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
