import { MenuItem, ButtonsContainer, MenuButton } from "../Main/styles";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../storage/global";

export const SearchResults = ({
  generalResults,
  summarizedResults,
  renderModalFunction,
  initialDisplayedItemsAmount,
  maxDisplayedItemsAmount,
  searchMoreItemsFunction,
  returnToPreviousPageFunction,
}) => {
  const globalContext = useContext(GlobalContext);

  return (
    <>
      {summarizedResults.map((result) => {
        return (
          <MenuItem
            key={result.id}
            onClick={() => renderModalFunction(result.id)}
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
          >
            {result.name}
          </MenuItem>
        );
      })}

      <ButtonsContainer>
        {generalResults && generalResults.length > maxDisplayedItemsAmount && (
          <MenuButton
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
            onClick={() => searchMoreItemsFunction(true)}
          >
            See more
          </MenuButton>
        )}
        {maxDisplayedItemsAmount > initialDisplayedItemsAmount && (
          <MenuButton
            className={
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }
            onClick={() => {
              searchMoreItemsFunction(false);
            }}
          >
            See less
          </MenuButton>
        )}
        <MenuButton
          className={[
            globalContext.lightTheme
              ? "lightThemeFontColor"
              : "darkThemeFontColor",
            "returnButton",
          ]}
          onClick={returnToPreviousPageFunction}
        >
          Return
        </MenuButton>
      </ButtonsContainer>
    </>
  );
};

export default SearchResults;
