import React from 'react'
import * as C from './style'


const Cards = ({forecast}) => {
  return (
    <C.ContainerCards>
      <p>Temperature: {forecast.main.temp}</p>
      {forecast.weather.map(({description, main, icon, id}) => (
        <div key={id}>
          <p>{description}</p>
          <p>{main}</p>
        </div>
      ))}

    </C.ContainerCards>
  )
}

export default Cards