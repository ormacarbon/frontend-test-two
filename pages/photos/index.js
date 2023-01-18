import Head from 'next/head';

import { useState } from 'react';

import { Card } from '../../components/Card';

import { API_KEY } from '../../services/api';

import { HomeContainer, DropdownContainer, MainContent } from './styles';

import Dropdown from '../../components/Dropdown';

export async function getStaticProps() {
  const response = await fetch('https://api.pexels.com/v1/curated', {
    headers: {
      Authorization: API_KEY,
    },
  });

  const data = await response.json();
  const photoList = data.photos;

  return {
    props: { photoList },
  };
}

export default function Photos({ photoList }) {
  const [photoData, setPhotoData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onClick = async (e) => {
    const searchKey = e.target.value;
    console.log(e.target.value);

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchKey}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    const data = await response.json();
    const searchResult = data.photos;
    console.log(searchResult);
    setPhotoData(searchResult);
    toggling();
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer>
        <DropdownContainer>
          <Dropdown onClick={onClick} toggling={toggling} isOpen={isOpen} />
        </DropdownContainer>
        <MainContent>
          {photoData.length > 0
            ? photoData.map((photo) => (
                <Card
                  key={photo.id}
                  photo={photo.src.large}
                  photoId={photo.id}
                  author={photo.photographer}
                  alt={photo.alt}
                  fileUrl={photo.src.original}
                  fileName={`${photo.id}.jpeg`}
                />
              ))
            : photoList.map((photo) => (
                <Card
                  key={photo.id}
                  photo={photo.src.large}
                  photoId={photo.id}
                  author={photo.photographer}
                  alt={photo.alt}
                  fileUrl={photo.src.original}
                  fileName={`${photo.id}.jpeg`}
                />
              ))}
        </MainContent>
      </HomeContainer>
    </>
  );
}
