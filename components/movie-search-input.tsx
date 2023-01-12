import React, { useContext, useEffect, useState } from 'react';
import { HeaderSearchInput, SearchIcon } from '../styles/header'

import Router from 'next/router';


export default function MovieSearchInput() {
  const [searchInput, setSearchInput] = useState('')

  const movieSearch = () => {
    console.log(searchInput)
    Router.replace({ pathname: '/search', query: { searchInput } })
  }

  function handleSearch() {
    searchInput !== '' && movieSearch()
  }

  return (
    <div>
      <HeaderSearchInput
        onChange={(event) => setSearchInput(event.target.value)}
        type="text"
        onKeyDown={event => event.key === "Enter" && handleSearch()} />
      <SearchIcon onClick={() => handleSearch()}>🔎</SearchIcon>
    </div>
  );
}