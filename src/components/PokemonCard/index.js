import axios from "axios";
import { useEffect, useState } from "react";
import { CardColor, PokemonCardStyled } from "./styles";
import { getPokemonType } from "./types";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  const [pokemonDetail, setPokemonDetail] = useState({});

  const fetchPokemonDetail = async () => {
    try {
      const response = await axios.get(pokemon.url);
      setPokemonDetail(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  function getPokemonColor(pokemonType) {
    switch (pokemonType) {
      case "bug":
        return "#316520";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#F44900";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#70B873";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#8A8A8A";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#33A4F5";
      default:
        return "#8A8A8A";
    }
  }

  return (
    <PokemonCardStyled>
      <CardColor
        color={getPokemonColor(
          pokemonDetail.types && pokemonDetail.types[0].type.name
        )}
      >
        <p>
          #{pokemonDetail.id < 10 ? `0${pokemonDetail.id}` : pokemonDetail.id}
        </p>
        <img
          className="img-pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
          alt={pokemon.name}
        />
        <img className="img-pokedex" src={"/images/pokedex.png"} />
      </CardColor>
      <section className="container-details">
        <h1 className="name">{pokemon.name}</h1>
        <div className="container-tipo">
          {pokemonDetail.types?.map((type, index) => {
            return <img src={getPokemonType(type.type.name)} key={index} />;
          })}
        </div>
        <hr />
        <div className="container-buttons-pokemon">
          <Link href="/details/[id]" as={`/details/${pokemon.name}`}>
            <button>Details</button>
          </Link>
          <button>Catch!</button>
        </div>
      </section>
    </PokemonCardStyled>
  );
}
