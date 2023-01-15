/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef, useCallback, useContext } from "react";
import {
  fetchLocations,
  fetchFilteredLocations,
} from "../../../api/locations";
import {
  LocationListWrapper,
  Table,
  TableHead,
  TableRow,
  TableHeading,
  TableData,
} from "./styles";
import { MainWrapper } from "../../Wrapper";
import { useSnackbar } from "react-simple-snackbar";
import LocationDetail from "./LocationDetail";

function LocationList() {
  const options = {
    position: "top-center",
    style: {
      backgroundColor: "midnightblue",
      border: "2px solid lightgreen",
      color: "lightblue",
      fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center",
    },
    closeStyle: {
      color: "lightcoral",
      fontSize: "16px",
    },
  };

  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const filtertRef = useRef();
  const [openSnackbar] = useSnackbar(options);
  const [isError, setIsError] = useState(false);
  const [isCharSelected, setIsCharSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Could not find your character, please try again or reload"
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

  useEffect(() => {
    fetchCharData();
  }, [fetchCharData, page]);

  const pagination = (e) => {
    if (e === "prev" && page === 1) return;
    if (e === "next") setPage(page + 1);
    if (e === "prev") setPage(page - 1);
  };

  const filterCharacters = async () => {
    setIsError(false);
    const filterData = filtertRef.current.value;
    if (!filterData) {
      openSnackbar("Fill the search form to filter");
      return;
    }
    const response = await fetchFilteredLocations(filterData);
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

  return (
    <>
      {isCharSelected ? (
        <LocationDetail onDetailsReturn={returnToLocationList} />
      ) : (
        <LocationListWrapper page={page}>
          <div className="title-search">
            <h2>Search for an iconic location!</h2>
            <input
              ref={filtertRef}
              type="text"
              placeholder="ex: Citadel of ricks"
            />
            <div className="search-btns">
              <button onClick={filterCharacters}>Search</button>
              {isFiltering && (
                <button onClick={clearFilters}>Clear filters</button>
              )}
            </div>
          </div>
          <div className="main-box">
            {isError ? (
              <div className="error-box">
                <h2>{errorMessage}</h2>
                <button onClick={clearFilters}>Reload</button>
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
                        <TableData>{char.name}</TableData>
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
                    <button onClick={() => pagination("prev")} className="prev">
                      Prev
                    </button>
                    <button onClick={() => pagination("next")}>Next</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </LocationListWrapper>
      )}
    </>
  );
}

export default LocationList;
