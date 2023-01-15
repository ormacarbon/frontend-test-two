import React, { useContext, useEffect, useState, PureComponent } from "react";
import { Container, Content, Description } from "./styles";
import { PokemonContext } from "../../context/pokemonContext";
import { useRouter } from 'next/router';

import Frame from "../../components/Frame";
import Box from "../../components/Box";
import Chart from "../../components/Chart";
import Header from "../../components/Header"

function Pokemon() {
  const { referenceList, searchPokemon, fetchPokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState();

  const router = useRouter();
  const { pokemon: name } = router.query;

  useEffect(() => {
    async function fetchPokemonInfo() {
      const match = searchPokemon(name);
      if(match) {
        const request = await fetchPokemon(match.url);
        setPokemon(request)
      }
      else {
        console.log(name)
      }
    }
    referenceList.length > 0 && fetchPokemonInfo();
  }, [name])

  return (
    <Container>
      {pokemon &&
        <div>
          <Header title={pokemon.name} subtitle={<div>Nº&nbsp;{pokemon.id.toString().padStart(3, "0")}</div>}/>
          <Box>
            <Content>
              <Frame 
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name + " sprite"}
                unoptimized
                width={360}
                height={360}
                priority
              />
              <div className="description">
                <Description>{pokemon.flavor_text}</Description>
                <Chart data={pokemon.stats.map(item => {return({name:item.stat.name, value:item.base_stat})})}/>
              </div>
            </Content>   
          </Box>
        </div>
      }
    </Container>
  );
}
export default Pokemon;