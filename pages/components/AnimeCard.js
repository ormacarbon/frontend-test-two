import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 50%;
  display: block;
  flex-direction: column;
  padding: 2rem;
  margin: auto;
  justify-content: center;
  align-items: center;

  h3 {
    position: absolute;
    display: flex;
    margin-left: -40px;
    margin-top: -41px;

    img {
      display: grid;
      position: absolute;
    }
    
  }

  @media (max-width: 320px) {
    display: flex;
    width: 300px;
  }
`;
const Title = styled.h1`
  text-align: center;
  padding: 0;
  display: inline-flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
@media (max-width: 768px){
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

`;
const P = styled.p`
position: absolute;
margin-top:310px;
font-weight: bold;

@media (max-width: 768px) {
  font-size: .6em;
  margin-top: 110px;
  margin-left: -47px;
}
`
const Card = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  padding: 3rem;
  margin-bottom: 2em;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  right: 200px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media (max-width: 768px) {
    display: grid;
    width: 120px;
    height: 180px;

    img {
      display: grid;
      position: relative;
      width: 100px;
      height: 100px;
      top: 0;
      left: -40px;
    }

    h3 {
      flex-direction: column;
      white-space: normal;
      font-size: 0.7em;
      padding: 0;
    }
    
  }
`;

export default function AnimeCard({ animeList, setAnimeInfo }) {
  return (
    <>
      <Title>Animes:</Title>
      <Container>
        {animeList
          ? animeList.map((anime, index) => (
              <Card key={index} onClick={() => setAnimeInfo(anime)}>
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={200}
                  height={300}
                />
                <h3>{anime.title}</h3>
                <br />
                <br />
                <br />
                <P>Click here to learn more!</P>
              </Card>
            ))
          : 'Oops, we found nothing! Try searching for something else.'}
      </Container>
    </>
  );
}
