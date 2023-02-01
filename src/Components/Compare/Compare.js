import { useCallback, useContext, useEffect, useState } from "react";
import { CompareContext, Image } from "../index";
import CompareInfo from "./CompareInfo";
import icon_compare from "/public/images/icon_compare.svg";
function Compare() {
  const [disabled, setDisabled] = useState(true);
  const [comparison, setComparison] = useState({});
  const [closeCompare, setCloseCompare] = useState("");
  const { compare } = useContext(CompareContext);
  const { Pokemon1, Pokemon2 } = compare;
  const allowPokemon1 = Pokemon1 !== undefined && Pokemon1;
  const allowPokemon2 = Pokemon1 !== undefined && Pokemon2;
  const allowPokemons =
    Pokemon1 !== undefined && Pokemon2 !== undefined ? true : false;
  console.log(compare);
  function handleCompare(prop) {
    console.log(prop.player2);
  }

  const comparePokemons = useCallback(
    (pokemon1, pokemon2) => {
      const prop = {
        Pokemon1: {
          ...Pokemon1,
          comparison: {
            atk: pokemon1.atk - pokemon2.atk,
            def: pokemon1.def - pokemon2.def,
            hp: pokemon1.hp - pokemon2.hp,
            speed: pokemon1.speed - pokemon2.speed,
            media:
              Pokemon1.hp + Pokemon1.atk + Pokemon1.def + Pokemon1.speed * 4,
            atkClass:
              pokemon1.atk > pokemon2.atk ? "compared-up" : "compared-down",
            defClass:
              pokemon1.def > pokemon2.def ? "compared-up" : "compared-down",
            hpClass:
              pokemon1.hp > pokemon2.hp ? "compared-up" : "compared-down",
            speedClass:
              pokemon1.speed > pokemon2.speed ? "compared-up" : "compared-down",
          },
        },
        Pokemon2: {
          ...Pokemon2,
          comparison: {
            atk: pokemon2.atk - pokemon1.atk,
            def: pokemon2.def - pokemon1.def,
            hp: pokemon2.hp - pokemon1.hp,
            speed: pokemon2.speed - pokemon1.speed,
            media:
              pokemon2.hp + pokemon2.atk + pokemon2.def + pokemon2.speed * 4,
            atkClass:
              pokemon2.atk > pokemon1.atk ? "compared-up" : "compared-down",
            defClass:
              pokemon2.def > pokemon1.def ? "compared-up" : "compared-down",
            hpClass:
              pokemon2.hp > pokemon1.hp ? "compared-up" : "compared-down",
            speedClass:
              pokemon2.speed > pokemon1.speed ? "compared-up" : "compared-down",
          },
        },
      };

      setComparison(prop);
    },
    [Pokemon1, Pokemon2]
  );

  useEffect(() => {
    if (allowPokemons) {
      setDisabled(false);
      return comparePokemons(Pokemon1, Pokemon2);
    }
  }, [Pokemon1, Pokemon2, allowPokemons, comparePokemons]);

  return (
    <section className="compare-container">
      {allowPokemons && (
        <div className={`card-comapre-body ${closeCompare}`}>
          <button
            className="btn-secondary"
            onClick={() => {
              setCloseCompare("d-none");
            }}
          >
            X
          </button>
          <Image
            src={Pokemon1?.sprite_front}
            alt={Pokemon1?.name}
            width={60}
            height={60}
          />

          {allowPokemon1 && <CompareInfo prop={comparison.Pokemon1} />}

          {allowPokemon2 && <CompareInfo prop={comparison.Pokemon2} />}

          <Image
            src={Pokemon2?.sprite_front}
            alt={Pokemon2?.name}
            width={60}
            height={60}
          />
        </div>
      )}

      <div className="card-comapre">
        <div>{allowPokemon1 && Pokemon1.name}</div>

        <button
          className="btn-compare"
          disabled={disabled}
          onClick={() => {
            setCloseCompare("");
          }}
        >
          <Image src={icon_compare} width={18} height={18} alt={`compare`} />
        </button>

        <div>{allowPokemon2 && Pokemon2.name}</div>
      </div>
    </section>
  );
}

export default Compare;
