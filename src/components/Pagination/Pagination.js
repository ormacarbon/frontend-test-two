import { useRouter } from "next/router";
import {
  ButtonChangePages,
  ButtonPages,
  ContainerButtons,
  ContainerPageNumbers,
} from "./paginationStyle";

export const Pagination = (props) => {
  const { nextPage, prevPage, goToPage, pages, pagesLocation, pagesEpisode } =
    props;
  const router = useRouter();

  let pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <ButtonPages key={i} onClick={() => goToPage(i)}>
        {i}
      </ButtonPages>
    );
  }

  let pageButtonsLocation = [];
  for (let i = 1; i <= pagesLocation; i++) {
    pageButtonsLocation.push(
      <ButtonPages key={i} onClick={() => goToPage(i)}>
        {i}
      </ButtonPages>
    );
  }

  let pageButtonsEpisode = [];
  for (let i = 1; i <= pagesEpisode; i++) {
    pageButtonsEpisode.push(
      <ButtonPages key={i} onClick={() => goToPage(i)}>
        {i}
      </ButtonPages>
    );
  }

  const renderPagination = () => {
    switch (router.pathname) {
      case "/":
        return (
          <>
            {prevPage && (
              <ButtonChangePages onClick={prevPage}>Previous</ButtonChangePages>
            )}
            <ContainerPageNumbers>{pageButtons}</ContainerPageNumbers>
            {nextPage && (
              <ButtonChangePages onClick={nextPage}>Next</ButtonChangePages>
            )}
          </>
        );
      case "/locations":
        return (
          <>
            {prevPage && (
              <ButtonChangePages onClick={prevPage}>Previous</ButtonChangePages>
            )}
            <ContainerPageNumbers>{pageButtonsLocation}</ContainerPageNumbers>
            {nextPage && (
              <ButtonChangePages onClick={nextPage}>Next</ButtonChangePages>
            )}
          </>
        );
      case "/episodes":
        return (
          <>
            {prevPage && (
              <ButtonChangePages onClick={prevPage}>Previous</ButtonChangePages>
            )}
            <ContainerPageNumbers>{pageButtonsEpisode}</ContainerPageNumbers>
            {nextPage && (
              <ButtonChangePages onClick={nextPage}>Next</ButtonChangePages>
            )}
          </>
        );
    }
  };

  return <ContainerButtons>{renderPagination()}</ContainerButtons>;
};
