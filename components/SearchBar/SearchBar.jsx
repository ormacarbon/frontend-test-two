import { useContext, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { GlobalContext } from "../../storage/global";
import { SearchBarContainer } from "./styles";

const SearchBar = ({
  category,
  foundItemSetter,
  showFoundItemSetter,
  maxItemQuantitySetter,
}) => {
  const globalContext = useContext(GlobalContext);
  const input = useRef(null);
  const initialItemQuantity = globalContext.isMobile ? 6 : 8;

  const searchInput = useCallback(() => {
    globalContext.setIsLoading(true);
    maxItemQuantitySetter(initialItemQuantity);
    const inputContent = input.current.value
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .toString()
      .replace(",", "%20");

    fetch(
      `https://zelda.fanapis.com/api/${category}?name=${inputContent}&limit=50`
    )
      .then((res) => res.json())
      .then((res) => {
        foundItemSetter(res.data);
      })
      .then(() => {
        showFoundItemSetter(true);
        globalContext.setIsLoading(false);
      });
  }, [
    category,
    showFoundItemSetter,
    initialItemQuantity,
    foundItemSetter,
    maxItemQuantitySetter,
    globalContext,
  ]);

  const handleEnterClick = (event, category) => {
    if (event.key === "Enter") {
      searchInput(category);
    }
  };

  const clickSearch = (event) => {
    const searchButton = document.getElementById("searchButton");

    if (event.key === "Enter") {
      searchButton.click();
    }
  };

  useEffect(() => {
    input.current.addEventListener(onkeyup, clickSearch);
  }, []);

  return (
    <SearchBarContainer className="animated">
      <input
        type="text"
        name="search"
        id="searchInput"
        autoComplete="off"
        placeholder={`Search for ${category}`}
        className={
          globalContext.lightTheme
            ? "lightThemeFontColor"
            : "darkThemeFontColor"
        }
        ref={input}
        onKeyUp={(event) => handleEnterClick(event, "characters")}
      />
      <Image
        src={
          globalContext.lightTheme
            ? "/icons/light-theme/light-theme-search-icon.svg"
            : "/icons/dark-theme/dark-theme-search-icon.svg"
        }
        alt="search icon"
        width={20}
        height={20}
        style={{
          position: "absolute",
          right: "30px",
          top: "20px",
          cursor: "pointer",
        }}
        onClick={() => searchInput(category)}
        id="searchButton"
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
