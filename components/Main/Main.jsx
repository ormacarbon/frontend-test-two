import { useState, useEffect, useContext } from "react";
import ErrorComponent from "../Error/ErrorComponent";
import InfoModal from "../InfoModal/InfoModal";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import { MainContainer, Title } from "../IndexMain/styles";
import { MenuItem, Menu, MenuButton, ButtonsContainer } from "./styles";
import { GlobalContext } from "../../storage/global";
import Loader from "../Loader/Loader";

const Main = ({ category, title, items, error }) => {
  const globalContext = useContext(GlobalContext);
  const displayedItemsAmount = globalContext.isMobile ? 6 : 8;
  const [maxDisplayedItemsAmount, setMaxDisplayedItemsAmount] =
    useState(displayedItemsAmount);
  const [fetchedItems, setFetchedItems] = useState(items);
  const [summarizedItems, setSummarizedItems] = useState(
    fetchedItems ? fetchedItems.slice(0, maxDisplayedItemsAmount) : null
  );
  const [foundItems, setFoundItems] = useState(null);
  const [summarizedFoundItems, setSummarizedFoundItems] = useState(
    foundItems ? foundItems.slice(0, maxDisplayedItemsAmount) : null
  );
  const [chosenItem, setChosenItem] = useState(undefined);
  const [nextApiPage, setNextApiPage] = useState(1);
  const [nextSearchPage, setNextSearchPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showFoundItems, setShowFoundItems] = useState(false);

  const showItemsToggle = (bool) => {
    if (bool === true) {
      setMaxDisplayedItemsAmount(
        (previousValue) => previousValue + displayedItemsAmount
      );
    }
    if (bool === false && maxDisplayedItemsAmount >= displayedItemsAmount * 2) {
      setMaxDisplayedItemsAmount(
        (previousValue) => previousValue - displayedItemsAmount
      );
    }
  };

  const fetchModalInfo = (id) => {
    try {
      globalContext.setIsLoading(true);
      fetch(`https://zelda.fanapis.com/api/${category}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setChosenItem(res.data);
        })
        .then(() => {
          globalContext.setIsLoading(false);
          setShowModal(true);
          document.querySelector("body").classList.add("noScroll");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreItems = async (bool) => {
    if (maxDisplayedItemsAmount >= fetchedItems.length) {
      globalContext.setIsLoading(true);
      try {
        fetch(
          `https://zelda.fanapis.com/api/${category}?limit=50&page=${nextApiPage}`
        )
          .then((res) => res.json())
          .then((res) => {
            setFetchedItems([...fetchedItems, ...res.data]);
            return res;
          })
          .then(() => globalContext.setIsLoading(false));
        setNextApiPage((previousValue) => ++previousValue);
      } catch (err) {
        console.log(err);
      }
    }

    showItemsToggle(bool);
  };

  const searchMoreItems = (bool) => {
    if (maxDisplayedItemsAmount >= foundItems.length) {
      globalContext.setIsLoading(true);
      const itemName = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .toString()
        .replace(",", "%20");
      try {
        fetch(
          `https://zelda.fanapis.com/api/${category}?name=${itemName}&limit=50&page=${nextSearchPage}`
        )
          .then((res) => res.json())
          .then((res) => setFoundItems([...foundItems, ...res.data]))
          .then(() => globalContext.setIsLoading(false));
        setNextSearchPage((previousValue) => ++previousValue);
      } catch (err) {
        console.log(err);
      }
    }

    showItemsToggle(bool);
  };

  const renderModal = (id) => {
    fetchModalInfo(id);
  };

  const returnToMainMenu = () => {
    document.getElementById("searchInput").value = "";
    setFoundItems(null);
    setShowFoundItems(false);
  };

  useEffect(() => {
    setSummarizedItems(
      fetchedItems ? fetchedItems.slice(0, maxDisplayedItemsAmount) : null
    );
    setSummarizedFoundItems(
      foundItems ? foundItems.slice(0, maxDisplayedItemsAmount) : null
    );
  }, [fetchedItems, foundItems, maxDisplayedItemsAmount]);

  return (
    <MainContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeColoBg"}
    >
      {!globalContext.isLoading && showModal && chosenItem && (
        <InfoModal
          renderModal={showModal}
          renderModalSetter={setShowModal}
          item={chosenItem}
          error={chosenItem ? false : true}
        />
      )}
      {!globalContext.isLoading &&
        summarizedItems &&
        summarizedItems.length > 0 && (
          <>
            <Title
              className={`animated ${
                globalContext.lightTheme
                  ? "lightThemeFontColor"
                  : "darkThemeFontColor"
              }`}
            >
              {title}
            </Title>

            <SearchBar
              category={category}
              foundItemSetter={setFoundItems}
              showFoundItemSetter={setShowFoundItems}
              maxItemQuantitySetter={setMaxDisplayedItemsAmount}
            />
            <Menu>
              {!globalContext.isLoading &&
                showFoundItems &&
                summarizedFoundItems &&
                summarizedFoundItems.length > 0 && (
                  <SearchResults
                    generalResults={foundItems}
                    summarizedResults={summarizedFoundItems}
                    renderModalFunction={renderModal}
                    initialDisplayedItemsAmount={displayedItemsAmount}
                    maxDisplayedItemsAmount={maxDisplayedItemsAmount}
                    searchMoreItemsFunction={searchMoreItems}
                    returnToPreviousPageFunction={returnToMainMenu}
                  />
                )}
              {!globalContext.isLoading &&
                showFoundItems &&
                summarizedFoundItems &&
                summarizedFoundItems.length === 0 && (
                  <ErrorComponent
                    title="NOT FOUND"
                    message="The item you’re searching for doesn’t exists in our database. If you’re sure it exists, make sure you’ve typed it correctly."
                  />
                )}
              {!globalContext.isLoading &&
                !showFoundItems &&
                summarizedItems &&
                summarizedItems.map((item) => {
                  return (
                    <MenuItem
                      key={item.id}
                      onClick={() => renderModal(item.id)}
                      className={
                        globalContext.lightTheme
                          ? "lightThemeFontColor"
                          : "darkThemeFontColor"
                      }
                    >
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Menu>
            {!globalContext.isLoading && !showFoundItems && summarizedItems && (
              <ButtonsContainer>
                <MenuButton
                  className={`animated ${
                    globalContext.lightTheme
                      ? "lightThemeFontColor"
                      : "darkThemeFontColor"
                  }`}
                  onClick={() => {
                    fetchMoreItems(true);
                  }}
                >
                  See more
                </MenuButton>
                {maxDisplayedItemsAmount > displayedItemsAmount && (
                  <MenuButton
                    className={`animated ${
                      globalContext.lightTheme
                        ? "lightThemeFontColor"
                        : "darkThemeFontColor"
                    }`}
                    onClick={() => {
                      fetchMoreItems(false);
                    }}
                  >
                    See less
                  </MenuButton>
                )}
              </ButtonsContainer>
            )}
          </>
        )}
      {globalContext.isLoading && <Loader />}
      {error && <ErrorComponent />}
    </MainContainer>
  );
};

export default Main;
