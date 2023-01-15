import { useState, useEffect } from "react";

function Card({ apiOptions }) {
  return (
    <ul className="card-list">
      {apiOptions.map((item, index) => {
        return index < 15 ? (
          <li className="card" key={index}>
            <img src={item[1]} alt={item[1]} loading="lazy" />
            <p>{item[0]}</p>
          </li>
        ) : (
          ""
        );
      })}
    </ul>
  );
}

export default Card;
