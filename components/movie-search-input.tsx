import Router from 'next/router';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HeaderSearchInput, HeaderSearchInputContainer, SearchIcon } from '../styles/header';


export default function MovieSearchInput() {
  const [searchInput, setSearchInput] = useState('')

  const movieSearch = () => {
    Router.replace({ pathname: '/search', query: { searchInput } })
  }

  function handleSearch() {
    searchInput !== '' && movieSearch()
  }

  return (
    <HeaderSearchInputContainer>
      <HeaderSearchInput
        onChange={(event) => setSearchInput(event.target.value)}
        type="text"
        onKeyDown={event => event.key === "Enter" && handleSearch()} />
      <SearchIcon onClick={() => handleSearch()}><BsSearch/></SearchIcon>
    </HeaderSearchInputContainer>
  );
}