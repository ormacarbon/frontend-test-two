import React from 'react'
import { Container, Ring, Content, Header, Types } from './styles'

import TypeLabel from '../TypeLabel'
import Image from 'next/image';

function SmallCard(props) {
  return(
    <Container active={props.active} onClick={props.onClick}>
      <Ring>
        {
          props.sprite && <Image src={props.sprite} alt={props.name + " Sprite"} width={360} height={360}/>
        }
      </Ring>
      <Content>
        <Header>
          <span>{props.name}</span>
          <div>Nº&nbsp;{props.id.toString().padStart(3, "0")}</div>
        </Header>
        <Types>
          {props.type && props.type.map((type, id) => <TypeLabel key={type} type={props.type[id]}/>)}
        </Types>
      </Content>
    </Container>
  )
}
export default SmallCard;