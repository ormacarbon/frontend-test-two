//? Card component
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

import { CharactersContainer } from "../styles/characterStyles";

//! API CALL
export async function getServerSideProps() {
  const apiURL = "https://rickandmortyapi.com/api/character/";

  const res = await fetch(`${apiURL}`);
  const data = await res.json();

  return {
    props: {
      data: data
    },
  };
}



//! COMPONENT
export default function Characters({ data }) {
  const apiURL = "https://rickandmortyapi.com/api/character/";

  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: apiURL,
  });

  const { current } = page;

  useEffect(() => {
    if (current === apiURL) return;

    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info,
      });

      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }

      updateResults((prev) => {
        return [...prev, ...nextData.results];
      });
    }

    request();
  }, [current]);

  function handleOnSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");

    const value = fieldQuery.value || "";
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

    updatePage({
      current: endpoint,
    });
  }

  return (
    <CharactersContainer>
      <h1>Characters</h1>
      <form onSubmit={handleOnSubmitSearch}>
        <input name="query" type="search" />
        <button>Search</button>
      </form>
      {!Characters ? <p>Carregando..</p> : <Card characters={results} />}
    </CharactersContainer>
  );
}
