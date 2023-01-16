/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { fetchLocationById } from "../../../../api/locations";
import { DetailWrapper } from "./styles";
import { FadeTransition } from "../../../../styles/globalStyled";
import { MainWrapper } from "../../../Wrapper";
import { getContentFromEndpoints } from "../../../../helpers";
import { formatDate } from "../../../../helpers";

function LocationDetail({ onDetailsReturn }) {
  const [character, setCharacter] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [residents, setResidents] = useState([]);
  const { locationId, setCharacterId, setCurrentNavigation } =
    useContext(MainWrapper);

  const goToCharDetail = (id) => {
    onDetailsReturn(false);
    setCurrentNavigation("characters");
    setCharacterId(id);
  };

  useEffect(() => {
    const fetchDataById = async () => {
      setIsLoading(true);
      const data = await fetchLocationById(locationId);
      if (data.error) {
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(
          `Looks like the server is down, please try again later. (${data.response})`
        );
        return;
      }
      setCharacter(data);

      const residentsUrl = data?.residents;
      const residentsData = await getContentFromEndpoints(
        residentsUrl,
        "image"
      );
      setResidents(residentsData);
      setIsLoading(false);
    };
    fetchDataById();
  }, [locationId]);

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
                    Type: <span>{character?.type ?? ""}</span>
                  </p>
                  <p>
                    Dimension: <span>{character?.dimension ?? ""}</span>
                  </p>
                  <p>
                    Created: <span>{formatDate(character?.created) ?? ""}</span>
                  </p>
                </div>
                <div className="episodes">
                  <h2>Residents</h2>
                  <div className="residents-list-box">
                    {residents &&
                      residents.map((resident, i) => (
                        <div key={i} className="resident-pictures">
                          <img
                            src={resident?.content}
                            alt="resident"
                            onClick={() => {
                              goToCharDetail(resident?.id);
                            }}
                          />
                        </div>
                      ))}
                    {residents.length === 0 && (
                      <p>There are no registered residents in this location.</p>
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

export default LocationDetail;
