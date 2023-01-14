import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/state";
import Navbar from "../../src/components/Navbar";
import { getPokemonType } from "../../src/components/PokemonCard/types";
import { CardColor, ContainerBar, DetailStyled } from "./styles";

export default function Details() {
  const { pokelist, getPokemonColor } = useContext(GlobalContext);
  const [pokemonDetail, setPokemonDetail] = useState({});

  const router = useRouter();
  const { id } = router.query;

  const fetchPokemonDetail = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonDetail(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  const barColor = (statNumber) => {
    if (statNumber <= 50) {
      return "#ff7c2d";
    } else {
      return "#ffdd6a";
    }
  };

  const totalStats = (stat) => {
    return (
      stat[0].base_stat +
      stat[1].base_stat +
      stat[2].base_stat +
      stat[3].base_stat +
      stat[4].base_stat +
      stat[5].base_stat
    );
  };

  return (
    <>
      <Navbar />
      <DetailStyled>
        <div className="card">
          <CardColor
            color={getPokemonColor(
              pokemonDetail.types && pokemonDetail.types[0].type.name
            )}
          >
            <h2>
              #
              {pokemonDetail.id < 10
                ? `0${pokemonDetail.id}`
                : pokemonDetail.id}
            </h2>

            <img
              className="img-pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
              alt={pokemonDetail.name}
            />
            <img className="img-pokedex" src={"/images/pokedex.png"} />
          </CardColor>
          <section className="container-details">
            <h1 className="name">{pokemonDetail.name}</h1>
            <div className="container-tipo">
              {pokemonDetail.types?.map((type, index) => {
                return <img src={getPokemonType(type.type.name)} key={index} />;
              })}
            </div>
          </section>
        </div>
        <div className="container-base-stats">
          <h2 className="title-base-stats">Base stats:</h2>
          <div className="container-stats">
            {pokemonDetail.stats?.map((stat, index) => {
              return (
                <div key={index}>
                  <div className="stat">
                    <div className="stat-name">
                      <p>{stat.stat.name}</p>
                      <p className="number-stat">{stat.base_stat}</p>
                    </div>
                    <div className="container-bar">
                      <ContainerBar
                        className="bar-color"
                        color={barColor(stat.base_stat)}
                        size={stat.base_stat}
                      ></ContainerBar>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr/>
            <div className="stat-total">
              <p>Total</p>
              <p>{pokemonDetail.stats && totalStats(pokemonDetail.stats)}</p>
              <div>
                <ContainerBar color={"none"} size={150}></ContainerBar>
              </div>
            </div>
          </div>
        </div>
        <section className="container-moves">
          <h2>Moves:</h2>

          <section className="container-move-types">
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[0].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[0].move.name?.slice(1)}
            </p>
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[1].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[1].move.name?.slice(1)}
            </p>
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[2].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[2].move.name?.slice(1)}
            </p>
            <p>
              {pokemonDetail.moves &&
                pokemonDetail.moves[3].move.name.charAt(0).toUpperCase() +
                  pokemonDetail.moves[3].move.name?.slice(1)}
            </p>
          </section>
        </section>
      </DetailStyled>
    </>
  );
}
