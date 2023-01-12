import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
import Link from "next/link";

export default function Anime() {
  const router = useRouter();
  const { animeid } = router.query;

  const [anime, setAnime] = useState("");
  console.log(anime);

  async function fetchData() {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${animeid}`
    );
    setAnime([response.data.data]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AnimeContainer>
        {anime.length > 0
          ? anime.map((anime, index) => {
              return (
                <div key={index}>
                  <Title>
                    <h2>
                      {anime.title} - #{animeid}
                    </h2>
                  </Title>
                  <ContainerStatus>
                    <img
                      src={anime.images?.jpg?.large_image_url}
                      alt={anime.title}
                    />
                    <ContainerScore>
                      <h4>Score</h4>
                      <p>{anime.score}</p>
                      <p>{anime.scored_by} <span title="indicates a weighted score. Please note that 'Not yet aired' titles are excluded.">users</span></p>
                    </ContainerScore>
                    <StatusAnime>
                      <h4>Rank #{anime.rank}</h4>
                      <p>Popularity #{anime.popularity}</p>
                    </StatusAnime>
                  </ContainerStatus>
                  <ContainerSynop>
                    <p>{anime.synopsis}</p>
                    <p>Source: {anime.source}.</p>
                  </ContainerSynop>
                  <ButtonReturn>
                    <Link href="/">Back</Link>
                  </ButtonReturn>
                </div>
              );
            })
          : null}
      </AnimeContainer>
    </>
  );
}

const AnimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #221707;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
  }

  ContainerStatus {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div {
    margin-top: 10px;
    margin: 10px auto;
  }
`;

const Title = styled.div`
  h2 {
    background: ${(props) => props.theme.backgroundTitle};
    padding: 10px;
    color: ${(props) => props.theme.colorTitle};
  }
`;

const ContainerStatus = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 auto;
  min-width: 600px;
  position: relative;
  color: ${(props) => props.theme.backgroundContainers};
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0px;
  }

  img {
    margin: 10px auto;
    margin-left: 10px;
    max-width: 200px;
    max-height: 350px;
    position: relative;

    @media (max-width: 600px) {
      flex-direction: column;
      margin: 0 auto;
      padding: 10px;
    }
  }
`;

const ContainerScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-height: 100px;
  gap: 10px;
  position: relative;
  margin: 0 auto;
  font-weight: bold;

  h4 {
    border-radius: 8px;
    padding: 5px 8px;
    background: ${(props) => props.theme.backgroundTitle};
    color: ${(props) => props.theme.colorTitle};
  }
`;

const StatusAnime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  padding: 40px;
  max-height: 80px;

  h4 {
    border-radius: 8px;
    padding: 5px 8px;
    background: ${(props) => props.theme.backgroundTitle};
    color: ${(props) => props.theme.colorTitle};
  }

  p {
    border-radius: 8px;
    font-weight: bold;
    padding: 5px 8px;
    background: ${(props) => props.theme.backgroundTitle};
    color: ${(props) => props.theme.colorTitle};
  }
`;

const ContainerSynop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  border: 2px solid black;
  max-width: 800px;
  position: relative;
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  p {
    padding: 10px;
    color: ${(props) => props.theme.colorText};
  }
`;

const ButtonReturn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    background-color: ${(props) => props.theme.backgroundTitle};
    border-radius: 8px;
    padding: 5px 8px;
    max-width: 100px;
    color: ${(props) => props.theme.colorBack};
    background: ${(props) => props.theme.buttonSearchBackgroundColor};
    text-decoration: none;

    &:hover {
      background: ${(props) => props.theme.buttonSearchHoverColor};
    }
  }
`;
