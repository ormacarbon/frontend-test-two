import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HeaderSearchInput, HeaderSearchInputContainer, SearchIcon } from '../styles/header';


export default function MovieSearchInput() {
  const route = useRouter()
  const [searchInput, setSearchInput] = useState(route.query.searchInput)

  function handleSearch() {
    searchInput !== '' && Router.replace({ pathname: '/search', query: { searchInput } })
  }

  return (
    <HeaderSearchInputContainer>
      <HeaderSearchInput
        onChange={(event) => setSearchInput(event.target.value)}
        type="text"
        value={searchInput}
        onClick={event => event.target.select()}
        onKeyDown={event => event.key === "Enter" && handleSearch()} />
      <SearchIcon onClick={() => handleSearch()}><BsSearch /></SearchIcon>
    </HeaderSearchInputContainer>
  );
}