import React from 'react';
import { Container } from './style';

export default function WeatherCard({ hour, icon, text, temperature }) {
  return (
    <Container>
      <p>{ hour.slice(11) }</p>
      <img
        src={ icon }
        alt={ text }
      />
      <p>{ temperature }°C</p>
    </Container>
  )
}
