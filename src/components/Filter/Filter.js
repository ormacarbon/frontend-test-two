import { useRouter } from "next/router";
import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ButtonSearch, ContainerFilter, InputSearch } from "./filterStyle";

const Filter = () => {
  const context = useContext(GlobalContext);
  const {
    setCurrentPageUrl,
    setCurrentPageUrlLocation,
    setCurrentPageUrlEpisode,
  } = context;
  const router = useRouter();

  function handleCharacterName(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "search");

    const value = fieldQuery.value || "";
    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${value}`;

    setCurrentPageUrl(searchUrl);
  }

  function handleCharacterStatus(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "search");

    const value = fieldQuery.value || "";
    const searchUrl = `https://rickandmortyapi.com/api/character/?status=${value}`;

    setCurrentPageUrl(searchUrl);
  }

  function handleLocationName(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "search");

    const value = fieldQuery.value || "";
    const searchUrl = `https://rickandmortyapi.com/api/location/?name=${value}`;

    setCurrentPageUrlLocation(searchUrl);
  }

  function handleLocationType(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "search");

    const value = fieldQuery.value || "";
    const searchUrl = `https://rickandmortyapi.com/api/location/?type=${value}`;

    setCurrentPageUrlLocation(searchUrl);
  }

  function handleEpisodeName(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "search");

    const value = fieldQuery.value || "";
    const searchUrl = `https://rickandmortyapi.com/api/episode/?name=${value}`;

    setCurrentPageUrlEpisode(searchUrl);
  }

  function handleEpisode(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "search");

    const value = fieldQuery.value || "";
    const searchUrl = `https://rickandmortyapi.com/api/episode/?episode=${value}`;

    setCurrentPageUrlEpisode(searchUrl);
  }

  const renderFilter = () => {
    switch (router.pathname) {
      case "/":
        return (
          <>
            <form onSubmit={handleCharacterName}>
              <InputSearch
                name="search"
                type="search"
                placeholder="Character name"
              />
              <ButtonSearch>Search</ButtonSearch>
            </form>
            <form onSubmit={handleCharacterStatus}>
              <InputSearch
                name="search"
                type="search"
                placeholder="Status (alive, dead)"
              />
              <ButtonSearch>Search</ButtonSearch>
            </form>
          </>
        );
      case "/worlds":
        return (
          <>
            <form onSubmit={handleLocationName}>
              <InputSearch
                name="search"
                type="search"
                placeholder="Location name"
              />
              <ButtonSearch>Search</ButtonSearch>
            </form>
            <form onSubmit={handleLocationType}>
              <InputSearch
                name="search"
                type="search"
                placeholder="Type (planet, cluster)"
              />
              <ButtonSearch>Search</ButtonSearch>
            </form>
          </>
        );
      case "/episodes":
        return (
          <>
            <form onSubmit={handleEpisodeName}>
              <InputSearch
                name="search"
                type="search"
                placeholder="Episode name"
              />
              <ButtonSearch>Search</ButtonSearch>
            </form>
            <form onSubmit={handleEpisode}>
              <InputSearch
                name="search"
                type="search"
                placeholder="Episode code"
              />
              <ButtonSearch>Search</ButtonSearch>
            </form>
          </>
        );
    }
  };

  return <ContainerFilter>{renderFilter()}</ContainerFilter>;
};

export default Filter;
