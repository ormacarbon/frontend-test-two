import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonCardStyled } from "./styles";
import { getPokemonType } from "./types"

export default function PokemonCard({pokemon}) {
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


  return (
    <PokemonCardStyled>
      <section className="container-details">
        <p>#{pokemonDetail.id < 10 ? `0${pokemonDetail.id}` : pokemonDetail.id}</p>
        <h1 className="name">{pokemon.name}</h1>
        <div className="container-tipo">
        {pokemonDetail.types?.map((type, index) => {
            return <img src={getPokemonType(type.type.name)} key={index} />;
          })}
        </div>
        <p className="details">Detalhes</p>
        <button>Capturar!</button>
      </section>

        <img
          className="img-pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
          alt={""}
        />

    </PokemonCardStyled>
  );
}
