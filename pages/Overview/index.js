import React, { useState, useContext } from "react";
import Box from "../../components/Box";
import VideoBanner from "../../components/VideoBanner";
import { Container, Content } from "./styles";

import { PokemonContext } from "../../context/pokemonContext";
import SmallCard from "../../components/SmallCard";
import ExpandedCard from "../../components/ExpandedCard";

function Overview() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const { pokemonTeam } = useContext(PokemonContext);

  return (
    <Container>
      <header>
        <h2>Hi Pokémon trainer,</h2>
        <h1>Overview</h1>
      </header>
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
