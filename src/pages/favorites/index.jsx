import Head from "next/head";
import RepositoryIssuesHeader from "../../components/shared/RepositoryIssuesHeader";
import Router, { useRouter } from "next/router";

import { FavoriteRepository as Favorite } from "../../components/pages/Favorites/Favorite";

import { useContext, useState } from "react";
import { FavoritesContext } from "../../contexts/StorageRepositories/favorites";
import { Container, Content, Empty, FavoritesContainer } from "./styles";
import Button from "../../components/shared/Button";
import { FiArrowLeft } from "react-icons/fi";

export default function Repository() {
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
                  <Favorite key={i} data={r} />
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
