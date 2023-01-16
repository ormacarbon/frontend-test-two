import Head from "next/head";
import { useContext } from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { GlobalContext } from "../contexts/GlobalContext";
import { DivCards, DivMain } from "../styles/stylesIndex";

export default function Home() {
  const context = useContext(GlobalContext);
  const { characters, search } = context;

  return (
    <DivMain>
      <Head>
        <title>Marvel Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Nav />
      <DivCards>
        {characters.filter((character) => {
          return search ? character.name.toLowerCase().includes(search.toLowerCase()) : character
        }).map((character) => {
            return <Card key={character.id} character={character} />;
        })}
      </DivCards>
      <Footer />
    </DivMain>
  );
}
