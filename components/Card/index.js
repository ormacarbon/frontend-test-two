import React from "react";
import { Container, Frame, Content, Header, Types } from "./styles";

import TypeLabel from "../TypeLabel";
import Image from "next/image";
import Button from "../Button";

function Card(props) {
  return (
    <Container active={props.active} onClick={props.onClick}>
      <Frame>
        {props.sprite && (
          <Image
            src={props.sprite}
            alt={props.name + " Sprite"}
            width={360}
            height={360}
          />
        )}
      </Frame>
      <Content>
        <Header>
          <div>Nº&nbsp;{props.id}</div>
          <span>{props.name}</span>
        </Header>
        <Types>
          {props.type &&
            props.type.map((type, id) => (
              <TypeLabel key={type} type={props.type[id]} />
            ))}
        </Types>
      </Content>
    </Container>
  );
}
export default Card;
