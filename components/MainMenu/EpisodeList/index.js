/* eslint-disable @next/next/no-img-element */
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { fetchEpisodes, fetchFilteredEpisodes } from "../../../api/episodes";
import {
  EpisodeListWrapper,
  Table,
  TableHead,
  TableRow,
  TableHeading,
  TableData,
} from "./styles";
import { useSnackbar } from "react-simple-snackbar";
import LocationDetail from "./EpisodeDetail";
import { MainWrapper } from "../../Wrapper";

function EpisodeList() {
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
  const { currentNavigation, setEpisodeId } = useContext(MainWrapper);

  const fetchCharData = useCallback(async () => {
    const response = await fetchEpisodes(page);

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
      if (currentNavigation === "episodes") {
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
    const response = await fetchFilteredEpisodes(filterData);
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
    setEpisodeId(id);
  };

  const returnToEpisodeList = (data) => {
    setIsCharSelected(data);
    setEpisodeId(0);
  };

  return (
    <>
      {isCharSelected ? (
        <LocationDetail onDetailsReturn={returnToEpisodeList} />
      ) : (
        <EpisodeListWrapper page={page}>
          <div className="title-search">
            <h2>Search for your favourite episode!</h2>
            <input
              ref={filtertRef}
              type="text"
              placeholder="ex: The Ricklantis Mixup"
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
                      <TableHeading>Air date</TableHeading>
                      <TableHeading>Episode</TableHeading>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {characters.map((char) => (
                      <TableRow key={char.id}>
                        <TableData>{char.name}</TableData>
                        <TableData>{char.air_date}</TableData>
                        <TableData>{char.episode}</TableData>
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
        </EpisodeListWrapper>
      )}
    </>
  );
}

export default EpisodeList;
