import React, { useEffect, useState } from 'react'
import { Container, Content, Area, Label, Bar } from './styles'

function Chart(props) {
  const [valueList,setValueList] = useState([]);
  const [maxValue, setMaxValue] = useState(100);

  useEffect(()=> {
    setValueList(props.data.map((item) => {return(item.value)}));
    const max = valueList.reduce(function(a, b) {return Math.max(a, b)}, -Infinity);
    setMaxValue(Math.max(max, 100));
  },[props.data])

  function calcSize(n) {
    return Math.round(n/maxValue*100);
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