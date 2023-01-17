import { useEffect, useState, useCallback } from "react";
import {
  ModalContainer,
  InfoContainer,
  ItemName,
  ItemInfo,
  ItemDescription,
  ModalButton,
  ModalBackground,
  ItemCategory,
} from "./styles";
import Image from "next/image";
import { GlobalContext } from "../../storage/global";
import { useContext } from "react";
import ErrorComponent from "../Error/ErrorComponent";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";

const InfoModal = ({ renderModal, renderModalSetter, item, error }) => {
  const globalContext = useContext(GlobalContext);
  const [itemAppearances, setItemAppearances] = useState([]);
  const [itemInhabitants, setItemInhabitants] = useState([]);
  const [itemDungeons, setItemDungeons] = useState([]);
  const [itemGames, setItemGames] = useState([]);

  const itemDetails = item
    ? Object.entries(item).filter(
        (detail) =>
          detail[0] !== "name" &&
          detail[0] !== "description" &&
          detail[0] !== "id" &&
          detail[0] !== "appearances" &&
          detail[0] !== "inhabitants" &&
          detail[0] !== "dungeons" &&
          detail[0] !== "games"
      )
    : null;

  const closeModal = () => {
    renderModalSetter(false);
    document.querySelector("body").classList.remove("noScroll");
  };

  const fetchInfo = useCallback(
    async (category, dataSetter) => {
      if (item[category]) {
        const fetchResponse = await Promise.all(
          item[category].map((url) =>
            fetch(url)
              .then((res) => res.json())
              .then((res) => res.data)
          )
        );
        dataSetter(fetchResponse);
      }
    },
    [item]
  );

  useEffect(() => {
    fetchInfo("appearances", setItemAppearances);
    fetchInfo("inhabitants", setItemInhabitants);
    fetchInfo("dungeons", setItemDungeons);
    fetchInfo("games", setItemGames);
  }, [fetchInfo]);

  return (
    <>
      {renderModal && (
        <ModalBackground>
          <ModalContainer
            className={`animated ${
              globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"
            }`}
          >
            <ModalButton onClick={closeModal} className="animated">
              <Image
                src={
                  globalContext.lightTheme
                    ? "/icons/light-theme/light-theme-close-icon.svg"
                    : "/icons/dark-theme/dark-theme-close-icon.svg"
                }
                alt="hamburger menu icon"
                width={30}
                height={30}
              />
            </ModalButton>
            <InfoContainer className="animated">
              {error && (
                <ErrorComponent
                  title="SOMETHING WENT WRONG"
                  message="Refresh the page and try again or come back later. If the problem persists, mail me at: lucasnobre37@outlook.com"
                />
              )}
              {item && (
                <>
                  <ItemName
                    className={`animated ${
                      globalContext.lightTheme
                        ? "lightThemeFontColor"
                        : "darkThemeFontColor"
                    }`}
                  >
                    {item.name}
                  </ItemName>
                  {itemDetails.map((detail) => (
                    <ItemCategory
                      key={detail[0]}
                      className={`animated ${
                        globalContext.lightTheme
                          ? "lightThemeFontColor"
                          : "darkThemeFontColor"
                      }`}
                    >
                      {detail[0]}:
                      <ItemInfo
                        className={
                          globalContext.lightTheme
                            ? "lightThemeFontColor"
                            : "darkThemeFontColor"
                        }
                      >
                        {detail[1] ? detail[1] : "not identified"}
                      </ItemInfo>
                    </ItemCategory>
                  ))}
                  {itemAppearances && itemAppearances.length > 0 && (
                    <AdditionalInfo
                      category="appearances"
                      data={itemAppearances}
                    />
                  )}
                  {itemGames && itemGames.length > 0 && (
                    <AdditionalInfo category="games" data={itemGames} />
                  )}
                  {itemDungeons && itemDungeons.length > 0 && (
                    <AdditionalInfo category="dungeons" data={itemDungeons} />
                  )}
                  {itemInhabitants && itemInhabitants.length > 0 && (
                    <AdditionalInfo
                      category="inhabitants"
                      data={itemInhabitants}
                    />
                  )}
                  <ItemDescription
                    className={`animated ${
                      globalContext.lightTheme
                        ? "lightThemeFontColor"
                        : "darkThemeFontColor"
                    }`}
                  >
                    {item.description}
                  </ItemDescription>
                </>
              )}
            </InfoContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default InfoModal;
