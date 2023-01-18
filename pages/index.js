import Link from 'next/link';
import { Container, Title, Description, Button } from './styles';

export default function Home() {
  return (
    <Container>
      <Title>The best free stock photos for yout to download.</Title>
      <Description>Start searching</Description>
      <Link href={'/search'}>
        <Button>Jump into it</Button>
      </Link>
    </Container>
  );
}
