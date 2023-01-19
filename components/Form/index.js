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

export default function SearchBar(props) {
  return (
    <Container>
      <FormContainer>
        <Form onSubmit={props.search} key={props.photoID}>
          <Input
            type='text'
            placeholder={`Search for free photos`}
            onChange={props.onChange}
            tabIndex={1}
          />
          <Button>
            <SearchIcon />
          </Button>
        </Form>
      </FormContainer>
      <ContainerResults>
        <Section>
          {props.photoData.map((photo) => (
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
