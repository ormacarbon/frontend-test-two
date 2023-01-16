/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import { fetchCharacterById } from "../../../../api/characters";
import { DetailWrapper } from "./styles";
import { FadeTransition } from "../../../../styles/globalStyled";
import { MainWrapper } from "../../../Wrapper";
import { getContentFromEndpoints } from "../../../../helpers";
import { formatDate } from "../../../../helpers";

function CharDetail({ onDetailsReturn }) {
  const [character, setCharacter] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const { characterId, setEpisodeId, setCurrentNavigation } =
    useContext(MainWrapper);

  const goToEpisodeDetail = (id) => {
    setEpisodeId(id);
    setCurrentNavigation("episodes");
    onDetailsReturn(false);
  };

  useEffect(() => {
    const fetchDataById = async () => {
      setIsLoading(true);
      const data = await fetchCharacterById(characterId);
      if (data.error) {
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(
          `Looks like the server is down, please try again later. (${data.response})`
        );
        return;
      }
      setCharacter(data);
      const episodes = data.episode;
      const episodesUrl = await getContentFromEndpoints(
        episodes,
        "episode"
      );
      setEpisodes(episodesUrl);
      setIsLoading(false);
    };
    fetchDataById();
  }, [characterId]);

  return (
    <DetailWrapper>
      <div className="return-btn">
        <button onClick={() => onDetailsReturn(false)}>Return</button>
      </div>
      {isError ? (
        <div className="before-content">
          <h3>{errorMessage}</h3>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="before-content">
              <h3>Loading...</h3>
            </div>
          ) : (
            <FadeTransition>
              <div className="character-card">
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <div className="character-description">
                  <p>
                    Status: <span>{character?.status ?? ""}</span>
                  </p>
                  <p>
                    Species: <span>{character?.species ?? ""}</span>
                  </p>
                  <p>
                    Type: <span>{character?.type ?? ""}</span>
                  </p>
                  <p>
                    Gender: <span>{character?.gender ?? ""}</span>
                  </p>
                  <p>
                    Created: <span>{formatDate(character?.created) ?? ""}</span>
                  </p>
                  <p>
                    Origin: <span>{character?.origin?.name ?? ""}</span>
                  </p>
                  <p>
                    Location: <span>{character?.location?.name ?? ""}</span>
                  </p>
                </div>
                <div className="episodes">
                  <h2>Featured in the following episodes</h2>
                  <div className="episodes-number-box">
                    {episodes &&
                      episodes.map((episode, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            goToEpisodeDetail(episode?.id);
                          }}
                        >
                          {episode?.content}
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </FadeTransition>
          )}
        </>
      )}
    </DetailWrapper>
  );
}

export default CharDetail;
