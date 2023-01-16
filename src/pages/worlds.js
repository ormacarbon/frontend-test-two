import React, { useContext } from "react";
import LocationCard from "../components/Card/LocationCard/LocationCard";
import Filter from "../components/Filter/Filter";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { BASE_URL_LO } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";
import { Container, ContainerCards } from "../styles/indexStyle";

const worlds = () => {
  const context = useContext(GlobalContext);
  const {
    locations,
    nextPageUrlLo,
    prevPageUrlLo,
    setCurrentPageUrlLocation,
    pagesLocation,
  } = context;

  function nextPage() {
    setCurrentPageUrlLocation(nextPageUrlLo);
  }

  function prevPage() {
    setCurrentPageUrlLocation(prevPageUrlLo);
  }

  function goToPage(num) {
    setCurrentPageUrlLocation(`${BASE_URL_LO}?page=${num}`);
  }

  return (
    <Container>
      <Header />
      <Filter />
      <ContainerCards>
        {locations.map((location) => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </ContainerCards>
      <Pagination
        nextPage={nextPageUrlLo ? nextPage : null}
        prevPage={prevPageUrlLo ? prevPage : null}
        goToPage={goToPage}
        pagesLocation={pagesLocation}
      />
      <Footer />
    </Container>
  );
};

export default worlds;
