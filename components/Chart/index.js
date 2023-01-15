import React from 'react'
import { Container, Area, Label, Bar } from './styles'

function Chart(props) {
  return(
    <Container width={props.width} height={props.height}>
      <Label>
        <span>100</span>
        <span>50</span>
        <span>0</span>
      </Label>
      <Area>
        {
          props.data &&
          props.data.map((item) => {
            return (
              <Bar key={item.name} size={item.value} label={item.name}/>
            )
          })
        }
      </Area>
    </Container>
  )
}
export default Chart;