import React, { useContext } from "react";
import { Container, Content } from "./styles";
import { PokemonContext } from "../../context/pokemonContext";

import Card from "../../components/Card";
import Button from "../../components/Button";

function Pokedex() {
  const { pokemonList, loadPokemonList } = useContext(PokemonContext);

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
        <div className="button-container">
          <Button title={"Load more Pokémon"} onClick={() => loadPokemonList()}/>
        </div>
    </Container>
  );
}
export default Pokedex;