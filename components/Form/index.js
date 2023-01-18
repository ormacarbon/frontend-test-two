import { useState } from 'react';
import { API_KEY } from '../../services/api';
import { Card } from '../Card/index';
import { SearchIcon } from '../Icons';

import {
  Container,
  FormContainer,
  Form,
  Input,
  Button,
  ContainerResults,
  Section,
  T,
} from './styles';

export default function SearchBar() {
  const [photoData, setPhotoData] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [photoID, setPhotoId] = useState();

  // const [error, setError] = useState<boolean>(true);

  const search = async (event) => {
    event.preventDefault();

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
    setPhotoData(searchResult);
    photoData.map((response) => {
      return setPhotoId(response.id);
    });
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={search} key={photoID}>
          <Input
            type='text'
            placeholder={`Search for your favorite food`}
            onChange={(event) => setSearchKey(event.target.value)}
            tabIndex={1}
          />
          <Button>
            <SearchIcon />
          </Button>
        </Form>
      </FormContainer>
      <ContainerResults>
        <Section>
          {photoData.map((photo) => (
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
        </Section>
      </ContainerResults>
    </Container>
  );
}
