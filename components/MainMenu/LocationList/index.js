/* eslint-disable @next/next/no-img-element */
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { fetchLocations, fetchFilteredLocations } from "../../../api/locations";
import {
  LocationListWrapper,
  Table,
  TableHead,
  TableRow,
  TableHeading,
  TableData,
} from "./styles";
import { MainWrapper } from "../../Wrapper";
import LocationDetail from "./LocationDetail";
import useCustomSnackbar from "../../../helpers/useCustomSnackbar";
import { pagination } from "../../../helpers";
import CustomButton from "../../CustomButton";
import { FadeTransition } from "../../../styles/globalStyled";

function LocationList() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const filtertRef = useRef();
  const { openCustomSnackbar } = useCustomSnackbar();
  const [isError, setIsError] = useState(false);
  const [isCharSelected, setIsCharSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Could not load locations, please try again or reload"
  );
  const { setLocationId } = useContext(MainWrapper);

  const fetchCharData = useCallback(async () => {
    const response = await fetchLocations(page);

    if (response.error) {
      setIsError(true);
      setErrorMessage(
        `Looks like the server is down, please try again later. (${response.response})`
      );
      return;
    }
    if (!response?.results) {
      setIsError(true);
      return;
    }

    setCharacters(response?.results);
  }, [page]);

  const handlePagination = (target) => {
    const pageUpdate = pagination(target, page);
    setPage(pageUpdate);
  };

  const filterCharacters = async () => {
    setIsError(false);
    const filterData = filtertRef.current.value;
    if (!filterData) {
      openCustomSnackbar("Fill the search form to filter");
      return;
    }
    const response = await fetchFilteredLocations(filterData);
    if (response.error) {
      setIsError(true);
      setErrorMessage(
        "Could not find your location, please try again or reload"
      );
      return;
    }
    if (!response?.results) {
      setIsError(true);
      return;
    }
    setCharacters(response?.results);
    setIsFiltering(true);
  };

  const clearFilters = () => {
    filtertRef.current.value = "";
    setIsFiltering(false);
    setIsError(false);
    fetchCharData();
  };

  const selectChar = (id) => {
    setIsCharSelected(true);
    setLocationId(id);
  };

  const returnToLocationList = (data) => {
    setIsCharSelected(data);
    setLocationId(0);
  };

  useEffect(() => {
    fetchCharData();
  }, [fetchCharData, page]);

  return (
    <>
      {isCharSelected ? (
        <FadeTransition>
          <LocationDetail onDetailsReturn={returnToLocationList} />
        </FadeTransition>
      ) : (
        <FadeTransition>
          <LocationListWrapper page={page}>
            <div className="title-search">
              <h2 data-testid="locations-page-title">
                Search for an iconic location!
              </h2>
              <input
                ref={filtertRef}
                type="text"
                placeholder="ex: Citadel of ricks"
                data-testid="location-search-input"
              />
              <div className="search-btns">
                <CustomButton size="small" action={filterCharacters}>
                  Search
                </CustomButton>
                {isFiltering && (
                  <CustomButton size="small" action={clearFilters}>
                    Clear filters
                  </CustomButton>
                )}
              </div>
            </div>
            <div className="main-box">
              {isError ? (
                <div className="error-box">
                  <h2>{errorMessage}</h2>
                  <CustomButton action={clearFilters}>Reload</CustomButton>
                </div>
              ) : (
                <div className="table">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Type</TableHeading>
                        <TableHeading>Dimension</TableHeading>
                      </TableRow>
                    </TableHead>
                    <tbody>
                      {characters.map((char) => (
                        <TableRow key={char.id}>
                          <TableData data-testid="table-locations-name">
                            {char.name}
                          </TableData>
                          <TableData>{char.type}</TableData>
                          <TableData>{char.dimension}</TableData>
                          <TableData>
                            <button onClick={() => selectChar(char.id)}>
                              More info
                            </button>
                          </TableData>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table>
                  {!isFiltering && !isError && (
                    <div className="table-btns">
                      <CustomButton
                        size="small"
                        action={() => handlePagination("prev")}
                        disabled={page === 1}
                      >
                        Prev
                      </CustomButton>
                      <CustomButton
                        size="small"
                        action={() => handlePagination("next")}
                        disabled={page === 7}
                      >
                        Next
                      </CustomButton>
                    </div>
                  )}
                </div>
              )}
            </div>
          </LocationListWrapper>
        </FadeTransition>
      )}
    </>
  );
}

export default LocationList;
