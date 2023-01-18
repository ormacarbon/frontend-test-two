import Head from 'next/head';
import { Card } from '../../components/Card';

import { API_KEY } from '../../services/api';

import { HomeContainer, MainContent } from './styles';

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
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer>
        <MainContent>
          {photoList.map((photo) => (
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
