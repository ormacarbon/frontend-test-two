import { useState, useEffect, useContext } from "react";
import { Api, CompareContext, Image } from "../index";
import icon_compare from "/public/images/icon_compare.svg";
function Info({ id, handleCloseInfo }) {
  const [info, setInfo] = useState("");
  const [disabled, setDisabled] = useState(false);
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
          sprite_front: data.sprites.front_default,
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
          className="btn-secondary"
          onClick={() => handleCloseInfo({ _id: null })}
        >
          X
        </button>
      </li>
      <li>
        <button
          className="btn-primary"
          disabled={disabled}
          onClick={(e) => {
            e.target.disabled = true;

            const validplayer1 = compare?.Pokemon1 !== null ? true : false;
            if (validplayer1) {
              setCompare((prev) => ({ ...prev, Pokemon2: info }));
              if (
                compare?.Pokemon1?.name === info.name ||
                compare?.Pokemon2?.name === info.name
              ) {
                setDisabled(true);
                return;
              }
            } else {
              setCompare({ Pokemon1: info });
            }
          }}
        >
          <Image src={icon_compare} width={18} height={20} alt={`compare`} />
        </button>
      </li>
    </ul>
  );
}

export default Info;
