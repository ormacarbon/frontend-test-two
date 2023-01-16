import React, { useContext, useEffect, useState } from "react";
import { Container, Content, Description, Evolutions, CardContainer, Indicator } from "./styles";
import Head from 'next/head';
import { PokemonContext } from "../../context/pokemonContext";
import { useRouter } from 'next/router';

import Frame from "../../components/Frame";
import Box from "../../components/Box";
import Chart from "../../components/Chart";
import Header from "../../components/Header";
import AttributeBox from "../../components/AttributeBox";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { CaretRight } from "phosphor-react";

function Pokemon() {
  const { referenceList, searchPokemon, fetchPokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState();
  const [evolutions, setEvolutions] = useState([]);

  const router = useRouter();
  const { pokemon: name } = router.query;

  useEffect(() => {
    async function fetchPokemonInfo() {
      const match = searchPokemon(name);
      if (match) {
          const request = await fetchPokemon(match.url);

          const evolutionPromises = request.evolutions.map(evolution => {
              return fetchPokemon(searchPokemon(evolution).url);
          });

          const evolutions = await Promise.all(evolutionPromises);
          setEvolutions(evolutions);
          setPokemon(request);
      }
    }
    referenceList.length > 0 && fetchPokemonInfo();
  }, [name])

  return (
    <Container>
      <Head>
        <title>Pokémon</title>
      </Head>

      {pokemon &&
        <>
          <Header 
            title={<div className="header">{pokemon.name} <span>#{pokemon.id.toString().padStart(3, "0")}</span></div>}
          />
          <Box>
            <Content>
              <Frame 
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name + " sprite"}
                unoptimized
                width={360}
                height={360}
                priority
                className="frame"
              />
              <div className="description">
                <header><h3>Description</h3></header>
                <Description>{pokemon.flavor_text}</Description>
              </div>
              <AttributeBox 
                className="attributes" 
                height={pokemon.height} 
                weight={pokemon.weight} 
                types={pokemon.types}
              />
              <Chart 
                className="stats" 
                data={pokemon.stats.map(item => {return({name:item.stat.name, value:item.base_stat})})}
              />
            </Content>   
          </Box>
          <Box title="Evolutions">
            <Evolutions>
              {
                evolutions.map((pokemon, id) => {return(
                  <CardContainer key={pokemon.id}>
                    <Card
                      name={pokemon.name}
                      sprite={
                        pokemon.sprites.other["official-artwork"].front_default
                      }
                      id={pokemon.id}
                      type={pokemon.types.map((tp) => tp.type.name)}
                    />
                    <Indicator>
                      {(id+1)%3 !== 0 && <Button rounded textColor="light" hoverColor="primary200" icon={<CaretRight size={32} weight="bold" />}/>}
                    </Indicator>
                  </CardContainer>
                )})
              }
            </Evolutions>
          </Box>
        </>
      }
    </Container>
  );
}
export default Pokemon;