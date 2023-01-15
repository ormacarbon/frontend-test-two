import React, { useContext } from "react";
import { Container, Content } from "./styles";
import { PokemonContext } from "../../context/pokemonContext";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Header from "../../components/Header";

function Pokedex() {
  const { pokemonList, updatePokemonList } = useContext(PokemonContext);

  return (
    <Container>
      <Header title="pokédex" showInput />
      <Content>
        {pokemonList.length > 0 &&
        pokemonList.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              sprite={
                pokemon.sprites.other["official-artwork"].front_default
              }
              id={pokemon.id}
              type={pokemon.types.map((tp) => tp.type.name)}
            />
          );
        })}
      </Content>
      <div className="button-container">
        <Button title={"Load more Pokémon"} size="lg" onClick={() => updatePokemonList()}/>
      </div>
    </Container>
  );
}
export default Pokedex;