import React, { useContext } from "react";
import { Container, Content } from "./styles";
import { PokemonContext } from "../../context/pokemonContext";

import Card from "../../components/Card";

function Pokedex() {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <Container>
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
    </Container>
  );
}
export default Pokedex;