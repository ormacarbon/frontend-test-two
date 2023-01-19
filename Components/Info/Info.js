import { useState, useEffect } from "react";
import Image from "next/image";
import Api from "../../Controllers/Api";

function Info({ id, handleCloseInfo, handleCompare }) {
  const [info, setInfo] = useState("");

  // const handleCompare = ({ _id }) => {
  //   localStorage.setItem("players", { player: `player${_id}` });
  // };

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
        <button className="btn-compareInfo" onClick={() => handleCompare(info)}>
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
