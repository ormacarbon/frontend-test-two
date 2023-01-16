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
import CharDetail from "./CharDetail";
import useCustomSnackbar from "../../../helpers/useCustomSnackbar";
import { pagination } from "../../../helpers";
import CustomButton from "../../CustomButton";

function CharList() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const filtertRef = useRef();
  const { openCustomSnackbar } = useCustomSnackbar();
  const [isError, setIsError] = useState(false);
  const [isCharSelected, setIsCharSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Could not find your character, please try again or reload"
  );
  const { currentNavigation, setCharacterId } = useContext(MainWrapper);

  const fetchCharData = useCallback(async () => {
    const response = await fetchCharacters(page);

    if (response.error) {
      setIsError(true);
      console.log(response?.error);
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
    const response = await fetchFilteredCharacters(filterData);
    if (response.error) {
      setIsError(true);
      setErrorMessage(
        "Could not find your character, please try again or reload"
      );
      console.log(response?.error);
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
    setCharacterId(0);
  };

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

  return (
    <>
      {isCharSelected ? (
        <CharDetail onDetailsReturn={returnToCharList} />
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
                    <CustomButton
                      size="small"
                      disabled={page === 1}
                      action={() => handlePagination("prev")}
                      className="prev"
                    >
                      Prev
                    </CustomButton>
                    <CustomButton
                      size="small"
                      disabled={page === 42}
                      action={() => handlePagination("next")}
                      className="next"
                    >
                      Next
                    </CustomButton>
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
