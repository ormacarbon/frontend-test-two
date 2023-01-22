import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Api from "../../Controllers/Api";
import { CompareContext } from "../../Controllers/Context";

function Info({ id, handleCloseInfo }) {
  const [info, setInfo] = useState("");
  const { compare, setCompare } = useContext(CompareContext);

  useEffect(() => {
    document.title = "VISUALIZAÇÂO DE POKEMONS";

    async function requestPokemon() {
      const urlBase = `https://pokeapi.co/api/v2/pokemon/${id}`;
      await Api(urlBase).then((data) => {
        setInfo({
          id: data.id,
          name: data.name,
          speed: data.stats[0].base_stat,
          spDef: data.stats[1].base_stat,
          spAtk: data.stats[2].base_stat,
          def: data.stats[3].base_stat,
          atk: data.stats[4].base_stat,
          hp: data.stats[5].base_stat,
        });
      });
    }

    requestPokemon();
  }, [id]);

  return (
    <ul className={`info-container ${info === "" ? "" : "info-transition"}`}>
      <li>
        <strong>HP: </strong>
        <p>{info.hp}</p>
      </li>
      |
      <li>
        <strong>ATA: </strong>
        <p>{info.atk}</p>
      </li>
      |
      <li>
        <strong>DEF: </strong>
        <p>{info.def}</p>
      </li>
      |
      <li>
        <strong>VEL: </strong>
        <p>{info.speed}</p>
      </li>
      <li>
        <button
          className="btn-closeInfo"
          onClick={() => handleCloseInfo({ _id: null })}
        >
          X
        </button>
      </li>
      <li>
        <button
          className="btn-compareInfo"
          onClick={() => {
            const validplayer1 = compare.Pokemon1 !== null ? true : false;
            validplayer1
              ? setCompare((prev) => ({ ...prev, Pokemon2: info }))
              : setCompare({ Pokemon1: info });
          }}
        >
          <Image
            src={`/images/icon-compare.svg`}
            width={18}
            height={18}
            alt={`compare`}
          />
        </button>
      </li>
    </ul>
  );
}

export default Info;
