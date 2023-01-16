import React, { useContext } from "react";
import EpisodeCard from "../components/Card/EpisodeCard/EpisodeCard";
import Filter from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { BASE_URL_EP } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";
import { Container, ContainerCards } from "../styles/indexStyle";

const Episodes = () => {
  const context = useContext(GlobalContext);
  const {
    episodes,
    nextPageUrlEp,
    prevPageUrlEp,
    setCurrentPageUrlEpisode,
    pagesEpisode,
  } = context;

  function nextPage() {
    setCurrentPageUrlEpisode(nextPageUrlEp);
  }

  function prevPage() {
    setCurrentPageUrlEpisode(prevPageUrlEp);
  }

  function goToPage(num) {
    setCurrentPageUrlEpisode(`${BASE_URL_EP}?page=${num}`);
  }

  return (
    <Container>
      <Header />
      <Filter />
      <ContainerCards>
        {episodes.map((episode) => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </ContainerCards>
      <Pagination
        nextPage={nextPageUrlEp ? nextPage : null}
        prevPage={prevPageUrlEp ? prevPage : null}
        goToPage={goToPage}
        pagesEpisode={pagesEpisode}
      />
      <Footer />
    </Container>
  );
};

export default Episodes;
