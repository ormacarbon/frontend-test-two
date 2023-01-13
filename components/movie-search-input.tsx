import Router, { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from "styled-components";
import { applicationContext } from '../context/context';
import { HeaderSearchInput, HeaderSearchInputContainer } from '../styles/header';


export default function MovieSearchInput() {
  const route = useRouter()
  const [searchInput, setSearchInput] = useState(route.query.searchInput)
  const { innerWidth } = useContext(applicationContext);


  const movieSearch = () => {
    Router.replace({ pathname: '/search', query: { searchInput } })
  }

  function handleSearch() {
    searchInput !== '' && movieSearch()
  }

  const SearchIcon = styled.div`
    position: absolute;
    right: 14px;
    top: ${innerWidth < 600 ? '25px' : '8px'};
    cursor: pointer;
`

  return (
    <HeaderSearchInputContainer>
      <HeaderSearchInput
        onChange={(event) => setSearchInput(event.target.value)}
        type="text"
        value={searchInput}
        onKeyDown={event => event.key === "Enter" && handleSearch()} />
      <SearchIcon onClick={() => handleSearch()}><BsSearch /></SearchIcon>
    </HeaderSearchInputContainer>
  );
}