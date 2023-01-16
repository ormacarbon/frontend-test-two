import { useState, useEffect } from "react";

function Card({ apiOptions, handlePokemonInfo }) {
  return (
    <ul className="card-list">
      {apiOptions.includes("search") || apiOptions.includes("not") ? (
        apiOptions.includes("not") ? (
          <li className="not-pokemon">POKEMON NÃO ENCONTRADO</li>
        ) : (
          <li className="card" onClick={() => handlePokemonInfo(apiOptions[2])}>
            <img src={apiOptions[1]} alt={apiOptions[1]} loading="lazy" />
            <p>{apiOptions[0]}</p>
          </li>
        )
      ) : (
        apiOptions.map((item, index) => {
          return index < 15 ? (
            <li
              className="card"
              key={index}
              onClick={() => handlePokemonInfo(item[2])}
            >
              <img src={item[1]} alt={item[1]} loading="lazy" />
              <p>{item[0]}</p>
            </li>
          ) : (
            ""
          );
        })
      )}
    </ul>
  );
}

export default Card;
