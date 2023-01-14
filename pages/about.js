//? Next dependences
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Container, ImageDiv, ContentDiv } from "../styles/aboutStyle";

export default function About() {
  return (
    <>
      <Head>
        <title>Rick and Morty Universe - About</title>
      </Head>
      <Container>
        <ImageDiv>
          <Image
            src="/images/rick-and-morty-portal.png"
            width={500}
            height={500}
            alt="Rick and Morty Portal"
          />
        </ImageDiv>
        <ContentDiv>
          <p>
            <span>The Rick and Morty universe</span> is the best place to meet
            all the people and creatures from all planets and universes present
            in the most beloved cartoon of the crowd!
          </p>
        </ContentDiv>
        <Link href="/characters">Start your journey !</Link>
      </Container>
    </>
  );
}
