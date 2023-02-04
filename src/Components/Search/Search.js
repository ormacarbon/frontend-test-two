import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { getAutoComplete, Api, PokemonContext } from "../index";
function Search() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [hideBySearch, setHideBySearch] = useState(null);
  const [autoComplete, setAutoComplete] = useState(null);
  const { setPokemon } = useContext(PokemonContext);
  // const goBack = () => {
  //   setHideBySearch(null);
  //   getSearch(null);
  // };

  const getName = (value) => {
    const pokemonList = localStorage.getItem("PokemonList");
    if (pokemonList.includes(value)) {
      const pokemonsSelect = JSON.parse(pokemonList).filter((e) => {
        return e.includes(value) ? e : "";
      });

      setName(pokemonsSelect);
    }
  };

  async function handleSearch(_value) {
    _value = _value !== undefined ? _value : value;

    await Api(`https://pokeapi.co/api/v2/pokemon/${_value}`).then((data) => {
      setPokemon([data?.name, data?.sprites?.front_default, data?.id]);
      return;
    });
    return;
  }

  useEffect(() => {
    document.title = "PESQUISAR";
  }, [value]);

  return (
    <div className="search">
      <Container>
        <input
          type="text"
          className="search-input"
          placeholder="Digite o nome de um pokemon"
          value={value}
          onFocus={(e) => {
            getAutoComplete();
          }}
          onKeyUp={(e) => {
            setValue(e.target.value.toLocaleLowerCase());
            getName(e.target.value);
          }}
          onChange={(e) => {
            setValue(e.target.value.toLocaleLowerCase());
          }}
        />
        {name !== "" && (
          <Content>
            <PokemonList>
              {name.map((pokemon) => {
                return (
                  <Pokemon
                    key={pokemon}
                    id={pokemon}
                    onClick={(e) => {
                      setValue(e.target.id);

                      handleSearch(e.target.id);
                    }}
                  >
                    {pokemon}
                  </Pokemon>
                );
              })}
            </PokemonList>
          </Content>
        )}
      </Container>

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

const Content = styled.div`
  margin: 0;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: #fff;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const PokemonList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 12px;
  gap: 10px;
  margin: 0;
  position: relative;
  left: 0;
  width: 94%;
  z-index: 50;
  background-color: #fff;
`;

const Pokemon = styled.li`
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;

  :hover {
    background-color: #c1c1c1;
    color: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export default Search;
