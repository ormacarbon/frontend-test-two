import { useContext } from "react";
import CharacterCard from "../components/Card/CharacterCard/CharacterCard";
import Filter from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { BASE_URL_CH } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";
import { ContainerCards, Container } from "../styles/indexStyle";

export default function Home() {
  const context = useContext(GlobalContext);
  const { characters, nextPageUrl, prevPageUrl, pages, setCurrentPageUrl } =
    context;

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function goToPage(num) {
    setCurrentPageUrl(`${BASE_URL_CH}?page=${num}`);
  }

  return (
    <Container>
      <Header />
      <Filter />
      <ContainerCards>
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ContainerCards>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
        goToPage={goToPage}
        pages={pages}
      />
      <Footer />
    </Container>
  );
}
