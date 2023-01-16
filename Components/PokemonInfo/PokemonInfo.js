import { useEffect, useState } from "react";

function Pokemon({ modal, setLoading }) {
  const [state, setState] = useState("");
  const [info, setInfo] = useState([]);
  const [modalClose, setModalClose] = useState();
  let arrEggGroup = [];
  if (info != []) {
    arrEggGroup = info[3];
  }

  const requestApiPokemon = () => {
    const id = modal?.id;
    const urlBase = `https://pokeapi.co/api/v2/pokemon/${id}`;
    setLoading(true);

    fetch(urlBase)
      .then((resp) => resp.json())
      .then((data) => {
        setInfo({
          name: data.forms[0].name,
          pokeImgFront: data.sprites.front_default,
          pokeImgBack: data.sprites.back_default,
          pokeImgShinyFront: data.sprites.front_shiny,
          pokeImgShinyBack: data.sprites.back_shiny,
          shiny: false,
          frontImg: true,
          speed: data.stats[0].base_stat,
          spDef: data.stats[1].base_stat,
          spAtk: data.stats[2].base_stat,
          def: data.stats[3].base_stat,
          atk: data.stats[4].base_stat,
          hp: data.stats[5].base_stat,
          id: "#" + data.id,
        });
        setLoading(false);

        return;
      })
      .catch((err) => {
        setLoading(false);
        throw new Error({ err });
      });
  };

  useEffect(() => {
    if (modal !== null) {
      requestApiPokemon();
      setModalClose(modal.class);
    }
  });

  console.log(modalClose);
  if (modal != "") {
    return (
      <div className={`modal ${modalClose}`}>
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={() => {
                setInfo([]);
                setModalClose("");
              }}
            >
              X
            </button>
          </div>
          <div className="modal-body gap-3">
            {console.log(info)}
            <h2>{info.name}</h2>
            <img src={info.pokeImgFront} />
            <div className="flex-row gap-2 info-details">
              <p>HP:</p>
              <p>{info.hp}</p>
            </div>
            <div className="flex-row gap-2 info-details">
              <p>Ataque:</p>
              <p>{info.atk}</p>
            </div>
            <div className="flex-row gap-2 info-details">
              <p>Defesa:</p>
              <p>{info.def}</p>
            </div>
            <div className="flex-row gap-2 info-details">
              <p>Velocidade:</p>
              <p>{info.speed}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
