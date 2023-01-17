import Head from "next/head";
import Button from "../../components/SharedComponents/Button";
import Router, { useRouter } from "next/router";
import FavoriteRepository from "../../components/PagesComponents/Favorites/Favorite";
import RepositoryIssuesHeader from "../../components/SharedComponents/RepositoryIssuesHeader";

import { useContext, useState } from "react";
import { FavoritesContext } from "../../contexts/StorageRepositories/favorites";
import { Container, Content, Empty, FavoritesContainer } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export default function Favorites() {
  const router = useRouter();
  const { repositories } = useContext(FavoritesContext);

  return (
    <>
      <Head>
        <title>Favoritos</title>
      </Head>
      <RepositoryIssuesHeader isFavorites />
      <Container>
        <Content>
          {repositories.length > 0 ? (
            <>
              <h1>{repositories.length} repositórios salvos.</h1>
              <FavoritesContainer>
                {repositories.map((r, i) => (
                  <FavoriteRepository key={i} data={r} />
                ))}
              </FavoritesContainer>
            </>
          ) : (
            <Empty>
              <img alt="Empty issues icon" src="/assets/empty-favorites.svg" />
              <span>
                Você não possui <br /> repositórios salvos.
              </span>
              <Button onClick={() => router.back()} type="rounded-square">
                <FiArrowLeft />
                Voltar
              </Button>
            </Empty>
          )}
        </Content>
      </Container>
    </>
  );
}
