import React from "react";
import * as C from "./style";

const Cards = ({ forecast }) => {
  return (
    <C.ContainerCards>
      <p>Temperature: {forecast.main.temp}</p>
      {forecast.weather.map(({ description, main, icon, id }) => (
        <div key={id}>
          <p>{description}</p>
          <p>{main}</p>
          <p>Feels Like: {forecast.main.feels_like}</p>
          <p>grnd level: {forecast.main.grnd_level}</p>
          <p>Humidity: {forecast.main.humidity}</p>
          <p>Pressure: {forecast.main.pressure}</p>
          <p>Sea level: {forecast.main.sea_level}</p>
          <p>Temp: {forecast.main.temp}</p>
          <p>Temp kf: {forecast.main.temp_kf}</p>
          <p>Temp MAX: {forecast.main.temp_max}</p>
          <p>Temp MIN: {forecast.main.temp_min}</p>
        </div>
      ))}
    </C.ContainerCards>
  );
};

export default Cards;
