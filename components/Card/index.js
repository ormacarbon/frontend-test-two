import React, { useContext } from "react";
import { Container, Content, Header, Types } from "./styles";
import { RouteContext } from "../../context/routeContext";

import TypeLabel from "../TypeLabel";
import Frame from "../Frame";

function Card(props) {
  const { toPokemonLink } = useContext(RouteContext);

  return (
    <Container active={props.active} onClick={() => toPokemonLink(props.name)}>
      {props.sprite && (
        <Frame
          src={props.sprite}
          alt={props.name + " Sprite"}
          width={360}
          height={360}
          priority
        />
      )}
      <Content>
        <Header>
          <div>Nº&nbsp;{props.id.toString().padStart(3, "0")}</div>
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
