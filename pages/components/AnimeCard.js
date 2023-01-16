import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
padding-top: 60%;
  display: flex;
flex-direction: column;
  padding: 2rem;
  margin: 20px auto;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    display: flex;
    width: auto;
    
  }
  @media (max-width: 320px) {
    display: flex;
    width: 320px;
    
  }
  
`;
const Title = styled.h1`
  text-align: center;
  padding: 0;
  display: flex;
`
const Card = styled.div`
  width: 500px;
  height: 500px;
  padding: 0 0  1rem 0;
  box-shadow:  5px 5px 5px rgba(0,0,0,0.3);
  text-align: center;
  position: relative;
  right: 300px;


  @media (max-width: 768px) {
    left: 1px;
    
  }


  img{
    position: relative;
    width: 100%;
    height: 80%;

  }
  @media (max-width: 768px) {
    width: 100px;
    height: 200px;
    
  }
`

export default function MovieCard({ animeList, setAnimeInfo, query }) {
  return (
    <>
    <Title>Animes: <span>{query}</span></Title>
    <Container>
      {animeList
        ? animeList.map((anime, index) => 
              <Card key={index} onClick={() => setAnimeInfo(anime)}>
              
                 
              
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={400}
                  height={400}

                />
                 <h4>{anime.title}</h4>
              </Card>
        )
        : 'Not-Found'}
    </Container>
    </>
  );
}
