//? Next Dependences
import Image from "next/image";
import Link from "next/link";
//? Styled Components
import { Container, TextContainer } from "../styles/homeStyle";

export default function Home() {
  return (
    <Container>
      <Image
        src="/images/rick-and-morty.png"
        width={500}
        height={500}
        alt="Rick And Morty"
      />
      <TextContainer>
        <h1>
          Look Morty <br /> We have visitors !!
        </h1>
        <p>Finally someone decided to show up! This is my new invention, the <span>Universe of Rick and Morty !! </span> Feel free to explore, it took a lot of work to gather all these people together.</p>
        <Link href='/characters'>Go &#8594;</Link>
      </TextContainer>
    </Container>
  );
}
