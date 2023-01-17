import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  position: fixed;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 60px;
  border: 1px solid black;
  margin: 20px;
  margin-top: 100px;
  width: 320px;
  right: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media (max-width: 768px) {
    width: 120px;
    height: 230px;
    font-size: 0.5em;
    left: 0;
    padding: 0 10px;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;
export default function AnimeCardInfo(props) {
  const {
    title,
    images: {
      jpg: { large_image_url },
    },
    source,
    rank,
    score,
    popularity,
    members,
    status,
    rating,
    duration,
  } = props.animeInfo;
  return (
    <>
      <Container>
        <h3>{title}</h3>
        <Image src={large_image_url} width={100} height={100} alt={title} />
        <div>
          <h3>#Rank: {rank}</h3>
          <h3>#Score: {score}</h3>
          <h3>
            #Popularity: {popularity} <hr /> <br />
          </h3>
          <h4>Members: {members}</h4>
          <h4>Source: {source}</h4>
          <h4>Duration: {duration}</h4>
          <h4>Status: {status}</h4>
          <h4>Rating: {rating}</h4>
        </div>
      </Container>
    </>
  );
}

AnimeCardInfo;
