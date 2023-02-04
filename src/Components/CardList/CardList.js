import { useState, useEffect, useContext, useCallback } from "react";

//COMPONENTS
import {
  Api,
  LoadingContext,
  PokemonContext,
  CompareContext,
  Card,
  Compare,
  Pagination,
  Search,
  Image,
} from "../index";

import logo_linkedin from "/public/images/logo_linkedin.svg";
import logo_github from "/public/images/logo_github.svg";

function CardList() {
  const [apiOptions, setApiOptions] = useState(null);
  const [hideBySearch, setHideBySearch] = useState(null);
  const [api, setApi] = useState(null);
  const [compare, setCompare] = useState({ Pokemon1: null, Pokemon2: null });
  const { setLoading } = useContext(LoadingContext);
  const { pokemon } = useContext(PokemonContext);

  const handleCardList = useCallback(async (prop) => {
    const arr = [];
    await prop.map(async (resp) => {
      await Api(resp.url).then(async (data) => {
        arr.push([data.name, data.sprites.front_default, data.id]);
      });
    });
    setApiOptions(arr);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const uri = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=15`;
      await Api(uri).then(async (data) => {
        await handleCardList(data.results);

        setLoading(false);
      });
    }, 1000);
  }, [handleCardList, setLoading]);

  return (
    <div>
      <PokemonContext.Provider
        value={{ pokemon: apiOptions, setPokemon: setApiOptions }}
      >
        <Search />

        <h1 className={`${hideBySearch}`} style={{ textAlign: "center" }}>
          LISTA DE POKEMONS
        </h1>

        <CompareContext.Provider
          className="container"
          value={{ compare, setCompare }}
        >
          {pokemon && <Card />}

          {/* ITEMS FLUTUANTES */}
          {compare.Pokemon1 !== null && <Compare />}
        </CompareContext.Provider>
      </PokemonContext.Provider>

      <Pagination hideBySearch={hideBySearch} />

      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/flavio-leonardo-ads/"
            target={`_blank`}
          >
            <Image
              src={logo_linkedin}
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
              src={logo_github}
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

export default CardList;
