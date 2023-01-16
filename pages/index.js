import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "../Components/Card/Card";
import Pagination from "../Components/Pagination/Pagination";
import PokemonInfo from "../Components/PokemonInfo/PokemonInfo";
import Search from "../Components/Search/Search";
import Loading from "../Components/Loading/Loading";

function Home() {
  const [apiOptions, setApiOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);
  const [hideBySearch, setHideBySearch] = useState(null);
  const [check, setCheck] = useState(false);
  const [theme, setTheme] = useState("light");

  const handlePokemonInfo = (prop) => {
    setModal({ id: prop, class: "active" });
  };

  async function apiRequest(uriBase) {
    const uriBaseDefault = uriBase ?? "https://pokeapi.co/api/v2/pokemon?offset=0&limit=16"; 

    setApiOptions([]);
    setLoading(true);

    await fetch(uriBaseDefault)
      .then((req) => req.json())
      .then((resp) => {
        _handleMapUrlsPagination(resp);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        throw new Error({ err });
      });

    function _handleMapUrlsPagination(resp) {
      resp.results.map(async (item) => {
        await fetch(item.url)
          .then((req) => req.json())
          .then((data) => {
            setApiOptions((prev) => {
              return [
                ...prev,
                [data.name, data.sprites.front_default, data.id],
              ];
            });
          })
          .catch((err) => {
            throw new Error({ err });
          });
      });
    }
  }

  const getSearch = (prop) => {
    setHideBySearch("d-none");
    setApiOptions(prop);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    const getListPokemon = () => {
      setHideBySearch(null);
      apiRequest();
      return;
    };

    getListPokemon();
  }, []);

  return (
    <div className="container">
      <Loading loading={loading} />

      <Search
        getSearch={getSearch}
        apiRequest={apiRequest}
        setLoading={setLoading}
      />

      <h1 className={`${hideBySearch}`} style={{ textAlign: "center" }}>
        LISTA DE POKEMONS
      </h1>

      <Card apiOptions={apiOptions} handlePokemonInfo={handlePokemonInfo} />

      <Pagination apiRequest={apiRequest} hideBySearch={hideBySearch} />

      {modal != null ? (
        <PokemonInfo modal={modal} setLoading={setLoading} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
