import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "../Components/Card/Card";
import Pagination from "../Components/Pagination/Pagination";
import PokemonInfo from "../Components/PokemonInfo/PokemonInfo";
import Search from "../Components/Search/Search";
import Loading from "../Components/Loading/Loading";
import Api from "../Controllers/Api";

function Home() {
  const [apiOptions, setApiOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);
  const [hideBySearch, setHideBySearch] = useState(null);

  async function apiRequest(uri) {
    const _uriBase = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=16";
    const _uri = uri ?? _uriBase;

    setApiOptions([]);
    setLoading(true);

    await Api(_uri).then(async (data) => {
      await data.results.map(async (resp) => {
        await Api(resp.url).then(async (item) => {
          await setApiOptions((prev) => {
            setLoading(false);
            return [...prev, [item.name, item.sprites.front_default, item.id]];
          });
        });
      });
    });
  }

  const getSearch = (prop) => {
    setHideBySearch("d-none");
    setApiOptions(prop);
  };

  const handlePokemonInfo = (prop) => {
    setModal(prop);
  };

  useEffect(() => {
    document.title = "LISTA DE POKEMONS";
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

      {modal !== null ? (
        <PokemonInfo modal={modal} setLoading={setLoading} />
      ) : (
        ""
      )}

      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/flavio-leonardo-ads/"
            target={`_blank`}
          >
            <Image
              src="/images/logo-linkedin.svg"
              width={40}
              height={40}
              alt="LinkedIn"
              loading="lazy"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/LeonardoMachado30" target={`_blank`}>
            <Image
              src="/images/logo-github.svg"
              width={40}
              height={40}
              alt="GitHub"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
