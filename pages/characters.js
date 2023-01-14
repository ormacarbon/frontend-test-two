//? Components
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import FilterButton from "../components/FilterButton/FilterButton";
//? React Dependences
import { useEffect, useState } from "react";
//? Styled components
import { CharactersContainer } from "../styles/characterStyles";

import { useQuery } from "react-query";

import axios from "axios";

//! API CALL
// export async function getServerSideProps() {
//   const apiURL = "https://rickandmortyapi.com/api/character/";

//   const res = await fetch(`${apiURL}`);
//   const data = await res.json();

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

//! COMPONENT
export default function Characters() {

  const [info, setInfo] = useState(0)
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState('')
  const [pageNumber, setPageNumber] = useState(1)


  // const { data } = useQuery('characters', async () => {
  //   const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`)
  //   return res.results
  // })


  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`)
    .then((res) => res.json())
    .then((res) => {
      setResults(res.results)
      setUnfo(res.info)
    })
    .catch((err) => console.log(err))
  }, [search, pageNumber, status])


  return (
    <CharactersContainer>

      {/* SEARCH AND FILTER */}
      <Search search={search} setSearch={setSearch}/>
      <FilterButton setStatus={setStatus}/>

      {/* CHARACTERS CARDS */}
      {!results ? (
        <p>No results found...</p>
      ) : (
        <Card characters={results}  />
      )}

      {/* PAGINATION COMPONENT */}
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} />
    </CharactersContainer>
  );
}
