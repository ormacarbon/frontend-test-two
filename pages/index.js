import Link from 'next/link';

import {
  Container,
  TitleContainer,
  Title,
  Description,
  ButtonContainer,
  Button,
} from './styles';

export default function Home() {
  return (
    <Container>
      <TitleContainer>
        <Title>The best stock photos for yout to download.</Title>
        <Description>Royalty free images shared by creators.</Description>
      </TitleContainer>
      <ButtonContainer>
        <Link href={'/photos'}>
          <Button>Discover photos</Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
}
