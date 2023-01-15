import React, { useEffect, useState } from 'react'
import { Container, Content, Area, Label, Bar } from './styles'

function Chart(props) {
  const [maxValue, setMaxValue] = useState(0);

  useEffect(()=> {
    if(props.data.length > 0) {
      const valueList = props.data.map((item) => {return(item.value)})
      const max = Math.max(valueList[0],valueList[1],valueList[2],valueList[3],valueList[4],valueList[5], 100);
      setMaxValue(max);
    }
  },[props])

  function calcSize(value) {
    return Math.min(value/maxValue*100, 100);
  }

  return(
    <Container width={props.width} height={props.height}>
      <header><h3>Stats</h3></header>
      <Content>
        <Label>
          <span>{maxValue}</span>
          <span>{Math.round(maxValue/2)}</span>
          <span>0</span>
        </Label>
        <Area>
          {
            props.data &&
            props.data.map((item) => {
              return (
                <Bar key={item.name} size={calcSize(item.value)} value={item.value} label={item.name}/>
              )
            })
          }
        </Area>
      </Content>
    </Container>
  )
}
export default Chart;