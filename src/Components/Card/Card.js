import { useCallback, useState, useEffect, useContext } from "react";
import { Image } from "../index";
import Info from "../Info/Info";
import { PokemonContext } from "../index";

function Card() {
  const { pokemon } = useContext(PokemonContext);

  return (
    <ul className="card-list">
      <CardMap pokemon={pokemon} />
    </ul>
  );
}

function CardMap({ pokemon }) {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  const handleCloseInfo = ({ _id }) => {
    if (_id !== null) {
      setId(_id);
      return;
    } else {
      setId(null);
      return;
    }
  };
  useEffect(() => {
    const value = pokemon == null || pokemon;
    if (value) {
      setData([]);
      // console.log(pokemon);
      const objectMap = pokemon.reduce((map, object) => {
        map.set(object[2], object);

        return map;
      }, new Map());

      const uniqList = Array.from(objectMap, ([_, value]) => value);

      setData(uniqList);
    }
  }, [pokemon]);
  console.log(data);
  return data.map((item, index) => {
    // console.log(item);
    const validId = id !== null && id === item[2];
    return (
      <li className="card" key={index}>
        {/* <Image
          src={item[1]}
          alt={item[0]}
          width={200}
          height={200}
          loading="lazy"
        /> */}
        <p>{item[0]}</p>
        {/* 
        <button
          className={`height-card ${!validId ? "btn-card" : "opacity-0"}`}
          onClick={() => {
            handleCloseInfo({ _id: item[2] });
          }}
        >
          Info
        </button>

        {validId && <Info id={id} handleCloseInfo={handleCloseInfo} />} */}
      </li>
    );
  });
}
export default Card;
