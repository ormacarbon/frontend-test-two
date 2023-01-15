/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  fetchCharacters,
  fetchFilteredCharacters,
} from "../../../api/characters";
import { useContext } from "react";
import {
  CharListWrapper,
  Table,
  TableHead,
  TableRow,
  TableHeading,
  TableData,
} from "./styles";
import { MainWrapper } from "../../Wrapper";
import { useSnackbar } from "react-simple-snackbar";
import CharDetail from "./CharDetail";

function CharList() {
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
  const { currentNavigation, setCharacterId } =
    useContext(MainWrapper);

  const fetchCharData = useCallback(async () => {
    const response = await fetchCharacters(page);

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

  useEffect(() => {
    const detectNavigation = () => {
      if (currentNavigation === "characters") {
        setIsCharSelected(true);
      }
    };
    detectNavigation();
  }, [currentNavigation]);

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
    const response = await fetchFilteredCharacters(filterData);
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
    setCharacterId(id);
  };

  const returnToCharList = (data) => {
    setIsCharSelected(data);
    setCharacterId(0)
  };

  return (
    <>
      {isCharSelected ? (
        <CharDetail
          onDetailsReturn={returnToCharList}
        />
      ) : (
        <CharListWrapper page={page}>
          <div className="title-search">
            <h2>Search for your favourite character!</h2>
            <input
              ref={filtertRef}
              type="text"
              placeholder="ex: Rick sanchez"
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
                      <TableHeading>Photo</TableHeading>
                      <TableHeading>Name</TableHeading>
                      <TableHeading>Species</TableHeading>
                      <TableHeading>Status</TableHeading>
                      <TableHeading>Gender</TableHeading>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {characters.map((char) => (
                      <TableRow key={char.id}>
                        <TableData>
                          <div className="picture">
                            <img src={char.image} alt={char.name} />
                          </div>
                        </TableData>
                        <TableData>{char.name}</TableData>
                        <TableData>{char.species}</TableData>
                        <TableData>{char.status}</TableData>
                        <TableData>{char.gender}</TableData>
                        <TableData>
                          <button
                            onClick={() => {
                              selectChar(char.id);
                          }}
                          >
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
        </CharListWrapper>
      )}
    </>
  );
}

export default CharList;
