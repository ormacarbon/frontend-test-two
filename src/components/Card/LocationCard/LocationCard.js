import React from "react";
import { ContainerCard, NameLo, TextLocation } from "./locationStyle";

const LocationCard = (props) => {
  const { location } = props;

  return (
    <ContainerCard>
      <NameLo>{location.name}</NameLo>
      <div>
        <TextLocation>Type: {location.type}</TextLocation>
        <TextLocation>Location: {location.dimension}</TextLocation>
      </div>
    </ContainerCard>
  );
};

export default LocationCard;
