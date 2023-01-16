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
import LocationDetail from "./EpisodeDetail";
import { MainWrapper } from "../../Wrapper";
import useCustomSnackbar from "../../../helpers/useCustomSnackbar";
import { pagination } from "../../../helpers";
import CustomButton from "../../CustomButton";

function EpisodeList() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const filtertRef = useRef();
  const { openCustomSnackbar } = useCustomSnackbar();
  const [isError, setIsError] = useState(false);
  const [isCharSelected, setIsCharSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Could not load episodes, please try again or reload"
  );
  const { currentNavigation, setEpisodeId } = useContext(MainWrapper);

  const fetchCharData = useCallback(async () => {
    const response = await fetchEpisodes(page);

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
    const response = await fetchFilteredEpisodes(filterData);
    if (response.error) {
      setIsError(true);
      setErrorMessage(
        "Could not find your episode, please try again or reload"
      );
      console.log(response.error);
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

  return (
    <>
      {isCharSelected ? (
        <LocationDetail onDetailsReturn={returnToEpisodeList} />
      ) : (
        <EpisodeListWrapper page={page}>
          <div className="title-search">
            <h2 data-testid="episodes-page-title">
              Search for your favourite episode!
            </h2>
            <input
              ref={filtertRef}
              type="text"
              placeholder="ex: The Ricklantis Mixup"
              data-testid="episode-search-input"
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
                      <TableHeading>Air date</TableHeading>
                      <TableHeading>Episode</TableHeading>
                    </TableRow>
                  </TableHead>
                  <tbody>
                    {characters.map((char) => (
                      <TableRow key={char.id}>
                        <TableData data-testid="table-episodes-name">
                          {char.name}
                        </TableData>
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
                      disabled={page === 3}
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
        </EpisodeListWrapper>
      )}
    </>
  );
}

export default EpisodeList;
