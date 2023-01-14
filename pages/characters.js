//? Components
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import FilterButton from "../components/FilterButton/FilterButton";
//? React Dependences
import { useEffect, useState } from "react";
//? Styled components
import { CharactersContainer } from "../styles/characterStyles";


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
  const [isFetching, setIsFetching] = useState(true)



  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`)
    .then((res) => res.json())
    .then((res) => {
      setResults(res.results)
      setInfo(res.info)
    })
    .catch((err) => console.log(err))
    .finally(() => { setIsFetching(false) })
  }, [search, pageNumber, status])


  return (
    <CharactersContainer>

      {/* SEARCH AND FILTER */}
      <Search search={search} setSearch={setSearch} setStatus={setStatus}/>
      {info?.count && (<FilterButton setStatus={setStatus}/>)}

      {/* RESULTS FOUND DISPLAY */}
      {!info?.count ? <h4>No Results found</h4> : <h4>{info?.count} results found</h4>}


      {/* CHARACTERS CARDS */}
      {isFetching && <p>Loading...</p>}
      {results && (<Card characters={results}  />)}

      {/* PAGINATION COMPONENT */}
      {info?.count && (<Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} />)}
      
    </CharactersContainer>
  );
}
