import React from "react";
import {
  Container,
  Frame,
  Content,
  Header,
  Types,
  Description,
} from "./styles";

import TypeLabel from "../TypeLabel";
import Image from "next/image";
import Button from "../Button";

function ExpandedCard(props) {
  return (
    <Container active={props.active} onClick={props.onClick}>
      <Frame>
        {props.sprite && (
          <Image
            src={props.sprite}
            alt={props.name + " Sprite"}
            unoptimized
            width={360}
            height={360}
            priority
          />
        )}
      </Frame>
      <Content>
        <Header>
          <div className="title-container">
            <p>
              {props.name} <span>Nº&nbsp;{props.id}</span>
            </p>
          </div>
          <Types>
            {props.type &&
              props.type.map((type, id) => (
                <TypeLabel key={type} type={props.type[id]} />
              ))}
          </Types>
        </Header>
        <Description>{props.description}</Description>
        <div className="button-container">
          <Button title="Discover More" />
        </div>
      </Content>
    </Container>
  );
}
export default ExpandedCard;
