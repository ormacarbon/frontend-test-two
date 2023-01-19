import Head from 'next/head';

import { useState } from 'react';

import { Card } from '../../components/Card';

import { API_KEY } from '../../services/api';

import {
  PhotoContainer,
  DropdownContainer,
  MainContent,
  PageSelector,
  PageCounter,
  SelectPage,
} from './styles';

import Dropdown from '../../components/Dropdown';

export async function getStaticProps() {
  const response = await fetch(
    'https://api.pexels.com/v1/curated?page=1&per_page=15',
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await response.json();

  return {
    props: { data },
  };
}

export default function Photos({ data }) {
  const [photoData, setPhotoData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onClick = async (e) => {
    const searchKey = e.target.value;
    console.log(e.target.value);

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchKey}?page=${photoData.page}per_page=15`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    const data = await response.json();
    setPhotoData(data);
    console.log(data);

    toggling();
  };

  const handleNextPage = async () => {
    const response = await fetch(`${photoData.next_page}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    setPhotoData(data);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = async () => {
    const response = await fetch(`${photoData.prev_page}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    setPhotoData(data);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
        <title>Photos</title>
      </Head>
      <PhotoContainer>
        <DropdownContainer>
          <Dropdown onClick={onClick} toggling={toggling} isOpen={isOpen} />
        </DropdownContainer>
        <MainContent>
          {photoData.photos.map((photo) => (
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

        <PageSelector>
          {photoData.page === 1 ? (
            <SelectPage onClick={handlePrevPage} disabled={true}>
              {'<'}
            </SelectPage>
          ) : (
            <SelectPage onClick={handlePrevPage} disabled={false}>
              {'<'}
            </SelectPage>
          )}
          <PageCounter>
            <span>{`You are on the page:  ${photoData.page}`}</span>
          </PageCounter>

          <SelectPage onClick={handleNextPage}>{'>'}</SelectPage>
        </PageSelector>
      </PhotoContainer>
    </>
  );
}
