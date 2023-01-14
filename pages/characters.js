//? Components
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";

import { useEffect, useState } from "react";

import { CharactersContainer } from "../styles/characterStyles";
import Pagination from "../components/Pagination/Pagination";
import FilterButton from "../components/FilterButton/FilterButton";

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

  
  const [info, setinfo] = useState(0)
  const [results, setResults] = useState([])
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState('')
  const [pageNumber, setPageNumber] = useState(1)


  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`)
    .then((res) => res.json())
    .then((res) => {
      setResults(res.results)
      setinfo(res.info)
    })
    .catch((err) => console.log(err))
  }, [search, pageNumber, status])

  
  return (
    <CharactersContainer>
      <Search search={search} setSearch={setSearch}/>
      <FilterButton setStatus={setStatus}/>

      {!results ? (
        <p>No results found...</p>
      ) : (
        <Card characters={results}  />
      )}
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} />
    </CharactersContainer>
  );
}
