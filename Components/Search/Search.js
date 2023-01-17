import { useEffect, useState } from "react";
import Api from "../../Controllers/Api";

function Search({ getSearch, apiRequest, setLoading }) {
  const [state, setState] = useState("");
  const [hideBySearch, setHideBySearch] = useState(null);

  const goBack = () => {
    setHideBySearch(null);
    setState("");
    apiRequest();
  };

  async function handleSearch() {
    const urlBase = `https://pokeapi.co/api/v2/pokemon/${state}`;
    setHideBySearch("");
    setLoading(true);

    await Api(urlBase).then((data) => {
      getSearch([
        data.forms[0].name,
        data.sprites.front_default,
        data.id,
        "search",
      ]);
      setLoading(false);
      return;
    });
    // .catch(() => {
    //   getSearch(["not"]);
    //   setLoading(false);
    //   return;
    // });

    return;
  }

  useEffect(() => {
    document.title = "PESQUISAR";
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Digite o nome de um pokemon"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <div className="flex-row gap-2">
        <button
          className={`btn-back ${hideBySearch === null ? "d-none" : ""}`}
          onClick={() => goBack()}
        >
          VOLTAR
        </button>
        <button className="search-btn" onClick={() => handleSearch()}>
          PESQUISAR
        </button>
      </div>
    </div>
  );
}

export default Search;
