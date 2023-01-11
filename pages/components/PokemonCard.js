import styles from "../../styles/pokemonCard.module.scss";

export default function PokemonCard({ pokemon }) {
  return (
    <div className={styles.pokemon}>
      <h3>{pokemon.name}</h3>
    </div>
  );
}
