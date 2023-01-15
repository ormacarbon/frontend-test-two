import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "../Components/Card/Card.js";

function Home() {
  const [apiOptions, setApiOptions] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const urlLoading =
    "https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif";

  const handlePagination = (pagination, btnClick) => {
    btnClick == "next" ? apiRequest(pagination[0]) : apiRequest(pagination[1]);
  };

  function _handleBtnPagination(resp) {
    if (resp.previous === null) {
      setPagination([resp.next]);
      return;
    }
    setDisabled(false);
    setPagination([resp.next, resp.previous]);
    return;
  }

  function _handleMapUrlsPagination(resp) {
    resp.results.map(async (item) => {
      await fetch(item.url)
        .then((req) => req.json())
        .then((resp) => {
          setApiOptions((prev) => {
            return [...prev, [resp.name, resp.sprites.front_default]];
          });
        })
        .catch((err) => {
          throw new Error({ err });
        });
    });
  }

  async function apiRequest(uriBase) {
    setApiOptions([]);
    setLoading(true);

    await fetch(uriBase)
      .then((req) => req.json())
      .then((resp) => {
        _handleBtnPagination(resp);
        _handleMapUrlsPagination(resp);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        throw new Error({ err });
      });
  }

  const getListPokemon = () => {
    const uriBase = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15";
    apiRequest(uriBase);
    return;
  };

  useEffect(() => {
    getListPokemon();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loading">
          <img src={urlLoading} alt="loading" loading="lazy" />
        </div>
      ) : (
        ""
      )}
      <h1 style={{ textAlign: "center" }}>LISTA DE POKEMONS</h1>
      <div>
        <Card apiOptions={apiOptions} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          onClick={() => handlePagination(pagination, "prevoius")}
          disabled={disabled}
        >
          ANTERIOR
        </button>
        <button onClick={() => handlePagination(pagination, "next")}>
          PROXIMO
        </button>
      </div>
    </div>
  );
}

export default Home;
