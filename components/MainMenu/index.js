import React, { useContext, useState, useCallback, useEffect } from "react";
import { MenuWrapper } from "./styles";
import { MainWrapper } from "../Wrapper";
import CharList from "./CharList";
import LocationList from "./LocationList";
import EpisodeList from "./EpisodeList";
import { useRouter } from "next/router";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";

function MainMenu() {
  const { darkMode, currentNavigation, setCurrentNavigation, setIsLogged } =
    useContext(MainWrapper);
  const [currentMenuView, setCurrentMenuView] = useState("charList");
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const logOut = () => {
    setIsLogged(false);
    router.push("/");
  }

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
      <CustomModal isVisible={isModalVisible}>
        Are you sure you want to log out?
        <div className="modal-btns">
          <CustomButton theme="ghost" action={() => setIsModalVisible(false)}>
            Cancel
          </CustomButton>
          <CustomButton theme="danger" action={logOut}>
            Confirm
          </CustomButton>
        </div>
      </CustomModal>
      <div className="side-menu">
        <div className="nav-buttons">
          <CustomButton
            theme={currentMenuView === "charList" ? "ghost" : ""}
            action={() => switchMenus("charList")}
          >
            Characters List
          </CustomButton>
          <CustomButton
            theme={currentMenuView === "locationList" ? "ghost" : ""}
            action={() => switchMenus("locationList")}
          >
            Locations List
          </CustomButton>
          <CustomButton
            theme={currentMenuView === "episodeList" ? "ghost" : ""}
            action={() => switchMenus("episodeList")}
          >
            Episodes List
          </CustomButton>
          <CustomButton
            theme={currentMenuView === "rickJokes" ? "ghost" : ""}
            action={() => switchMenus("rickJokes")}
          >
            Rick tells jokes
          </CustomButton>
        </div>
        <CustomButton theme="danger" action={() => setIsModalVisible(true)}>
          Log out
        </CustomButton>
      </div>
      <div className="content">{handleMenuView(currentMenuView)}</div>
    </MenuWrapper>
  );
}

export default MainMenu;
