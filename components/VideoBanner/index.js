import { Container, Content } from "./styles";
import React, { useContext } from "react";
import Button from "../Button";
import { RouteContext } from '../../context/routeContext';

function VideoBanner() {
  const { router } = useContext(RouteContext);

  return (
    <Container>
      <Content>
        <h4>Pokémon Universe</h4>
        <p>Your definitive guide to the universe of Pokémons</p>
        <Button 
          title="Explore" 
          color="dark" 
          textColor="white"
          hoverColor="primary200" 
          size="lg" 
          onClick={() => router.push("/pokedex")}
        />
      </Content>

      <video autoPlay loop muted>
        <source src="/pokemon-in-the-wild.mp4" type="video/mp4" />
      </video>
    </Container>
  );
}
export default VideoBanner;
