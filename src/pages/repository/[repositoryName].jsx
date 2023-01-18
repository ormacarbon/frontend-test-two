import axios from "axios";
import Head from "next/head";
import RepositoryIssuesHeader from "../../components/SharedComponents/RepositoryIssuesHeader";

import { FavoritesContext } from "../../contexts/StorageRepositories/favorites";
import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ActionButtons, Container, Content, LikeButton } from "./styles";
import {
  EyeIcon,
  HeartFillIcon,
  HeartIcon,
  RepoForkedIcon,
  StarFillIcon,
  StarIcon,
} from "@primer/octicons-react";
import Button from "../../components/SharedComponents/Button";
import { ThemeContext } from "../../contexts/theme";
import { ColorRing } from "react-loader-spinner";

export default function Repository() {
  const router = useRouter();
  const {
    repositories,
    toggleFavorite,
    isFavorite,
    addFavorite,
    removeFavorite,
  } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);
  const { repositoryName } = useRouter().query;
  const [loading, setLoading] = useState(false);
  const [repository, setRepository] = useState({});

  useEffect(() => {
    if (repositoryName) {
      (async () => {
        setLoading(true);
        axios
          .get(`https://api.github.com/repos/${repositoryName}`)
          .then((response) => {
            setRepository(response.data);
            setLoading(false);
          });
      })();
    }
  }, [repositoryName]);

  function formatValue(n) {
    if (n < 1e3) return n;
    if (n >= 1e3) return +(n / 1e3).toFixed(0) + "K";
  }

  function goToIssues() {
    router.push("/issues/" + repository.full_name.replace("/", "%2F"));
  }

  return (
    <>
      <Head>
        <title>
          {repository?.name ? "Repo • " + repository.name : "Loading..."}
        </title>
      </Head>
      {repository?.name && <RepositoryIssuesHeader repository={repository} />}
      <Container>
        <Content>
          {loading ? (
            <ColorRing
              visible={true}
              height="60"
              width="60"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
              colors={theme.colors.blue[200].repeat(5).match(/.{1,7}/g)}
            />
          ) : (
            <>
              <img className="logo" src={repository.owner?.avatar_url} />
              <div>
                <p className="name">{repository.name}</p>
                <span className="description">{repository.description}</span>
                <div className="stats">
                  <span>
                    <StarIcon />
                    {formatValue(repository.watchers_count)}
                  </span>
                  <span>
                    <RepoForkedIcon />
                    {formatValue(repository.forks_count)}
                  </span>
                  <span>
                    <EyeIcon />
                    {formatValue(repository.subscribers_count)}
                  </span>
                </div>
                <ActionButtons>
                  <Button onClick={goToIssues} type="rounded" primary>
                    Ver issues
                  </Button>
                  <LikeButton onClick={() => toggleFavorite(repository)}>
                    {isFavorite(repository) ? (
                      <HeartFillIcon fill={theme.colors.red} />
                    ) : (
                      <HeartIcon fill={theme.colors.secundary} />
                    )}
                  </LikeButton>
                </ActionButtons>
              </div>
            </>
          )}
        </Content>
      </Container>
    </>
  );
}
