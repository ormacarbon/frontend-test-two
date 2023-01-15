import React, { useContext } from "react";
import { Container, Content, Header, Types, Description } from "./styles";
import { RouteContext } from "../../context/routeContext";

import TypeLabel from "../TypeLabel";
import Button from "../Button";
import Frame from "../Frame";

function ExpandedCard(props) {
  const { toPokemonLink } = useContext(RouteContext);

  return (
    <Container active={props.active} onClick={props.onClick}>
      {props.sprite && (
        <Frame
          src={props.sprite}
          alt={props.name + " Sprite"}
          unoptimized
          width={360}
          height={360}
          priority
        />
      )}
      <Content>
        <Header>
          <div className="title-container">
            <p>
              {props.name} <span>Nº&nbsp;{props.id.toString().padStart(3, "0")}</span>
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
          <Button title="Discover More" size="lg" onClick={() => toPokemonLink(props.name)}/>
        </div>
      </Content>
    </Container>
  );
}
export default ExpandedCard;
