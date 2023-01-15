import React from 'react'
import TypeLabel from '../TypeLabel';
import { Container, Content, Types } from './styles'

function AttributeBox(props) {
  return(
    <Container>
      <header><h3>Attributes</h3></header>
      <Content>
        <ul>
          <li><b>Height:</b> {props.height / 10} m</li>
          <li><b>Weight:</b> {props.weight / 10} kg</li>
        </ul>
        <Types>
          {
            props.types.map((item) => (
                <TypeLabel key={item.type.name} type={item.type.name} />
            ))
          }
        </Types>
      </Content>
    </Container>
  )
}
export default AttributeBox;