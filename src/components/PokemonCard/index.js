import { useContext, useEffect, useState } from "react";
import { CardColor, PokemonCardStyled } from "./styles";
import { getPokemonType } from "./types";
import Link from "next/link";
import axios from "axios";
import { GlobalContext } from "../../../contexts/state";

export default function PokemonCard({ pokemon, pathname }) {
  const { getPokemonColor, addToPokedex, removeFromPokedex } = useContext(GlobalContext);

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
  console.log(pathname);

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
          <Link href="/details/[id]" as={`/details/${pokemonDetail.id}`}>
            <button>Details</button>
          </Link>
          {pathname === "/" && (
            <button
              className="button-catch"
              onClick={() => addToPokedex(pokemon)}
            >
              Catch!
            </button>
          )}
          {pathname === "/pokedex" && (
            <button
            className="button-remove"
            onClick={() => removeFromPokedex(pokemon)}
          >
            Remove
          </button>
          )

          }
        </div>
      </section>
    </PokemonCardStyled>
  );
}
