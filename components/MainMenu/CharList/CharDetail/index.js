/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import { fetchCharacterById } from "../../../../api/characters";
import { DetailWrapper } from "./styles";
import { FadeTransition } from "../../../../styles/globalStyled";
import { MainWrapper } from "../../../Wrapper";
import axios from "axios";

function CharDetail({ onDetailsReturn }) {
  const [character, setCharacter] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const {
    characterId,
    setEpisodeId,
    setCurrentNavigation
  } = useContext(MainWrapper);

  const retrieveEpisodes = async (endpoints) => {
    setIsLoading(true);
    const requests = endpoints.map((endpoint) =>
      axios.get(endpoint).catch(() => "")
    );
    let imageUrls = [];
    try {
      const responses = await Promise.all(requests);
      responses.forEach((response) => {
        if (response !== "") {
          const imagesList = {
            id: response?.data?.id,
            name: response?.data?.episode,
          };

          imageUrls.push(imagesList);
        }
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    return imageUrls;
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
      setIsLoading(false);
      const episodes = data.episode;
      const episodesWithImages = await retrieveEpisodes(episodes);
      setEpisodes(episodesWithImages);
    };
    fetchDataById();
  }, [characterId]);

  const formatDate = (target) => {
    const date = new Date(target);
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const goToEpisodeDetail = (id) => {
    setEpisodeId(id);
    setCurrentNavigation("episodes");
    onDetailsReturn(false);
  };

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
                          {episode?.name}
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
