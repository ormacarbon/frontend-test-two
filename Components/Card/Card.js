import { useState, useEffect } from "react";
import Image from "next/image";
import Info from "../Info/Info";

function Card({ apiOptions }) {
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

  const handleCardMap = () =>
    apiOptions.map((item, index) => {
      const validId = id !== null && id === item[2];
      
      return (
        index < 15 && (
          <li className="card" key={index}>
            <Image
              src={item[1]}
              alt={item[1]}
              width={200}
              height={200}
              loading="lazy"
            />
            <p>{item[0]}</p>

            <button
              className={`height-card ${!validId ? "btn-card" : "opacity-0"}`}
              onClick={() => {
                handleCloseInfo({ _id: item[2] });
              }}
            >
              Info
            </button>

            {validId && (
              <Info
                id={id}
                handleCloseInfo={handleCloseInfo}
              />
            )}
          </li>
        )
      );
    });

  return <ul className="card-list">{handleCardMap()}</ul>;
}

export default Card;
