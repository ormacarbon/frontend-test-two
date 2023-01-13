import React, { useState, useEffect, useContext } from "react";
import { Container, Content } from "./styles";
import { PokemonContext } from "../../context/pokemonContext";

import ExpandedCard from "../../components/ExpandedCard";
import VideoBanner from "../../components/VideoBanner";
import SmallCard from "../../components/SmallCard";
import Box from "../../components/Box";

function Overview() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const { pokemonTeam } = useContext(PokemonContext);

  return (
    <Container>
      <VideoBanner />
      <Content>
        <Box title="Team of the day">
          {pokemonTeam.length > 0 &&
            pokemonTeam.map((pokemon, id) => {
              return (
                <SmallCard
                  key={id}
                  name={pokemon.name}
                  active={selectedPokemon == id}
                  sprite={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                  id={pokemon.id}
                  type={pokemon.types.map((tp) => tp.type.name)}
                  onClick={() => setSelectedPokemon(id)}
                />
              );
            })}
        </Box>
        <Box title="Pokémon quick view">
          {pokemonTeam.length > 0 && (
            <ExpandedCard
              name={pokemonTeam[selectedPokemon].name}
              sprite={
                pokemonTeam[selectedPokemon].sprites.other["official-artwork"]
                  .front_default
              }
              id={pokemonTeam[selectedPokemon].id}
              type={pokemonTeam[selectedPokemon].types.map(
                (tp) => tp.type.name
              )}
              description={pokemonTeam[selectedPokemon].flavor_text}
            />
          )}
        </Box>
      </Content>
    </Container>
  );
}
export default Overview;
