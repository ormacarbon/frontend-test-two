/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { fetchEpisodeById } from "../../../../api/episodes";
import { DetailWrapper } from "./styles";
import { FadeTransition } from "../../../../styles/globalStyled";
import { MainWrapper } from "../../../Wrapper";
import { getContentFromEndpoints } from "../../../../helpers";
import { formatDate } from "../../../../helpers";

function EpisodeDetail({ onDetailsReturn }) {
  const [character, setCharacter] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [charactersPictures, setCharactersPictures] = useState([]);
  const { setCurrentNavigation, episodeId, setCharacterId } =
    useContext(MainWrapper);

  const goToCharDetail = (id) => {
    setCharacterId(id);
    setCurrentNavigation("characters");
    onDetailsReturn(false);
  };

  useEffect(() => {
    const fetchDataById = async () => {
      setIsLoading(true);
      const data = await fetchEpisodeById(episodeId);
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

      const characterUrls = data?.characters;
      const characterPics = await getContentFromEndpoints(
        characterUrls,
        "image"
      );
      setCharactersPictures(characterPics);
    };
    fetchDataById();
  }, [episodeId]);

  return (
    <DetailWrapper>
      <div className="return-btn">
        <button
          onClick={() => {
            onDetailsReturn(false);
          }}
        >
          Return
        </button>
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
                <div className="character-description">
                  <p>
                    Air Date: <span>{character?.air_date ?? ""}</span>
                  </p>
                  <p>
                    Episode: <span>{character?.episode ?? ""}</span>
                  </p>
                  <p>
                    Created: <span>{formatDate(character?.created) ?? ""}</span>
                  </p>
                </div>
                <div className="episodes">
                  <h2>Characters in this episode</h2>
                  <div className="characters-list-box">
                    {charactersPictures &&
                      charactersPictures.map((character, i) => (
                        <div key={i} className="character-pictures">
                          <img
                            src={character?.content}
                            data-testid={`character-picture-${character?.id}`}
                            alt="character"
                            onClick={() => {
                              goToCharDetail(character?.id);
                            }}
                          />
                        </div>
                      ))}
                    {charactersPictures.length === 0 && (
                      <p>
                        There are no registered charactersPictures in this
                        location.
                      </p>
                    )}
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

export default EpisodeDetail;
