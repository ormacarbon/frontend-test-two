import { useEffect, useState } from "react";
import Api from "../../Controllers/Api";

function Search({ handleApi }) {
  const [name, setName] = useState("");
  const [hideBySearch, setHideBySearch] = useState(null);

  // const goBack = () => {
  //   setHideBySearch(null);
  //   getSearch(null);
  // };

  async function handleSearch() {
    await handleApi("/" + name);
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
        value={name}
        onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
      />
      <div className="flex-row gap-2">
        {/* <button
          className={`btn-back ${hideBySearch === null ? "d-none" : ""}`}
          onClick={() => goBack()}
        >
          VOLTAR
        </button> */}
        <button className="search-btn" onClick={() => handleSearch()}>
          PESQUISAR
        </button>
      </div>
    </div>
  );
}

export default Search;
