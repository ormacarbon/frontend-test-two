import React, { useContext, useEffect } from 'react'
import { globalContext } from '../../context/globalContext';
import Highlights from '../Highlights/Highlights';
import { Container, TodayHighlightsContainer } from './style'

export default function TodayHighlights() {
  const { forecast, selectCity } = useContext(globalContext);

  useEffect(() => {
    selectCity('São Paulo');
  }, []);

  const uvDescription = [
    'Low',
    'Moderate',
    'High',
    'Very High',
    'Extreme'
  ];

  const setUvDescription = (uv) => {
    if (uv <= 2) {
      return uvDescription[0];
    } else if (uv <= 5) {
      return uvDescription[1];
    } else if (uv <= 7) {
      return uvDescription[2];
    } else if (uv <= 10) {
      return uvDescription[3];
    } else {
      return uvDescription[4];
    }
  }

  const infos = [
    'UV Index',
    'Wind Status',
    'Sunrise / Sunset',
    'Humidity',
    'Visibility',
  ];

  const values = [
    forecast.current?.uv,
    forecast.current?.wind_kph,
    forecast.forecast?.forecastday[0]?.astro?.sunrise,
    forecast.current?.humidity,
    forecast.current?.vis_km,
  ];

  const setValues = (value) => {
    if (value === forecast.current?.uv) {
      return `${setUvDescription(value)}: ${value}`;
    } else if (value === forecast.current?.wind_kph) {
      return `${value} km/h`;
    } else if (value === forecast.forecast?.forecastday[0]?.astro?.sunrise) {
      return `${value} / ${forecast.forecast?.forecastday[0]?.astro?.sunset}`;
    } else if (value === forecast.current?.humidity) {
      return `${value}%`;
    } else if (value === forecast.current?.vis_km) {
      return `${value} km`;
    }
  }

  return (
    <Container>
      <h1>
        Today Highlights
      </h1>
      <TodayHighlightsContainer>
        { infos.map((info, index) => (
          <Highlights
            key={ index }
            info={ info }
            value={ setValues(values[index]) }
          />
        )) }
      </TodayHighlightsContainer>
    </Container>
  )
}
