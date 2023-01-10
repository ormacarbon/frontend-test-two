import { PokemonCardStyled } from "./styles";

export default function PokemonCard() {
  return (
    <PokemonCardStyled>
      <section className="container-details">
        <p>#01</p>
        <h1 className="name">Bulbassaur</h1>
        {/* <div className="container-tipo"></div> */}
        <p className="details">Detalhes</p>
        <button>Capturar!</button>
      </section>

        <img
          className="img-pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`}
          alt={""}
        />

    </PokemonCardStyled>
  );
}
