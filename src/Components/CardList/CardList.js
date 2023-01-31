import { useState, useEffect, useContext, useCallback } from "react";
//COMPONENTS
import {
  Api,
  LoadingContext,
  CompareContext,
  Card,
  Compare,
  Pagination,
  Search,
  Image,
} from "../index";

const ENV = "";
// const ENV = window.location.host.includes("localhost") ? "" : "/frontend-test-two";

function CardList() {
  const [apiOptions, setApiOptions] = useState([]);
  const [hideBySearch, setHideBySearch] = useState(null);
  const [compare, setCompare] = useState({ Pokemon1: null, Pokemon2: null });
  const { setLoading } = useContext(LoadingContext);

  const handleCardList = useCallback(async (prop) => {
    await prop.map(async (resp) => {
      await Api(resp.url).then(async (data) => {
        setApiOptions((prev) => [
          ...prev,
          [data.name, data.sprites.front_default, data.id],
        ]);
      });
    });
  }, []);

  const handleApi = useCallback(
    async (path = null) => {
      const pathList = "?offset=0&limit=16";
      const uri = `https://pokeapi.co/api/v2/pokemon${path ?? pathList}`;

      setApiOptions([]);
      setLoading(true);

      await Api(uri).then(async (data) => {
        path === null
          ? await handleCardList(data.results)
          : setApiOptions([data.name, data.sprites.front_default, data.id]);
        setLoading(false);
      });
    },
    [setLoading, handleCardList]
  );

  useEffect(() => {
    handleApi();
  }, [handleApi]);

  return (
    <CompareContext.Provider
      className="container"
      value={{ compare, setCompare }}
    >
      <Search handleApi={handleApi} />

      <h1 className={`${hideBySearch}`} style={{ textAlign: "center" }}>
        LISTA DE POKEMONS
      </h1>

      <Card apiOptions={apiOptions} />

      <Pagination hideBySearch={hideBySearch} />

      {/* ITEMS FLUTUANTES */}
      {compare.Pokemon1 !== null && <Compare />}

      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/flavio-leonardo-ads/"
            target={`_blank`}
          >
            <Image
              src={`${ENV}/images/logo-linkedin.svg`}
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
              src={`${ENV}/images/logo-github.svg`}
              width={40}
              height={40}
              alt="GitHub"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </CompareContext.Provider>
  );
}

export default CardList;
