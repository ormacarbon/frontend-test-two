import React, { useContext, useState, useCallback, useEffect } from "react";
import { MenuWrapper } from "./styles";
import { MainWrapper } from "../Wrapper";
import CharList from "./CharList";
import LocationList from "./LocationList";
import EpisodeList from "./EpisodeList";
import { useRouter } from "next/router";

function MainMenu() {
  const { darkMode, currentNavigation, setCurrentNavigation } =
    useContext(MainWrapper);
  const [currentMenuView, setCurrentMenuView] = useState("charList");
  const router = useRouter();

  const handleMenuView = useCallback((view) => {
    const views = {
      charList: <CharList />,
      locationList: <LocationList />,
      episodeList: <EpisodeList />,
      rickJokes: "/rickjokes",
    };

    return views[view];
  }, []);

  const switchMenus = useCallback(
    (view) => {
      const changeNav = () => {
        setCurrentNavigation("");
      };
      changeNav();
      if (view === "rickJokes") {
        router.push(view.toLowerCase());
        return;
      }
      setCurrentMenuView(view);
    },
    [setCurrentNavigation, router]
  );

  useEffect(() => {
    const autoNavigation = () => {
      if (currentNavigation === "") return;
      if (currentNavigation === "characters") {
        setCurrentMenuView("charList");
      } else if ("episodes") {
        setCurrentMenuView("episodeList");
      } else if ("locations") {
        setCurrentMenuView("locationList");
      }
    };
    autoNavigation();
  }, [currentNavigation]);

  return (
    <MenuWrapper darkMode={darkMode}>
      <div className="side-menu">
        <div className="nav-buttons">
          <button onClick={() => switchMenus("charList")}>
            Characters List
          </button>
          <button onClick={() => switchMenus("locationList")}>
            Locations List
          </button>
          <button onClick={() => switchMenus("episodeList")}>
            Episodes List
          </button>
          <button onClick={() => switchMenus("rickJokes")}>
            Rick tells jokes
          </button>
        </div>
        <button className="logout-btn">Log out</button>
      </div>
      <div className="content">{handleMenuView(currentMenuView)}</div>
    </MenuWrapper>
  );
}

export default MainMenu;
