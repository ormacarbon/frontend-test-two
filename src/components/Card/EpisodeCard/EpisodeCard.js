import React from "react";
import { ContainerCard, NameEp, TextEpisode } from "./episodeStyle";

const EpisodeCard = (props) => {
  const { episode } = props;

  return (
    <ContainerCard>
      <div>
        <NameEp>{episode.episode}</NameEp>
        <TextEpisode>Name: {episode.name}</TextEpisode>
        <TextEpisode>Air date: {episode.air_date}</TextEpisode>
      </div>
    </ContainerCard>
  );
};

export default EpisodeCard;
