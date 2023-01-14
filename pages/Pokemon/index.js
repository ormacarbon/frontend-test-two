import React, { useContext } from "react";
import { Container, Content } from "./styles";
import { PokemonContext } from "../../context/pokemonContext";

import Card from "../../components/Card";
import Header from "../../components/Header";

function Pokemon() {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <Container>
      <Header title="pokémon" />
      <Content>
        <Card
          key={pokemonList[0].id}
          name={pokemonList[0].name}
          sprite={
            pokemonList[0].sprites.other["official-artwork"].front_default
          }
          id={pokemonList[0].id}
          type={pokemonList[0].types.map((tp) => tp.type.name)}
        />
      </Content>
    </Container>
  );
}
export default Pokemon;