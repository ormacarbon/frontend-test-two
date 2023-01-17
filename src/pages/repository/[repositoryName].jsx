import axios from "axios";
import Head from "next/head";
import repo_data from "../../utils/repositoryData";
import RepositoryIssuesHeader from "../../components/shared/RepositoryIssuesHeader";

import { ActionButtons, Container, Content, LikeButton } from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/pages/Home/Header";
import {
  EyeIcon,
  HeartFillIcon,
  HeartIcon,
  RepoForkedIcon,
  StarFillIcon,
  StarIcon,
} from "@primer/octicons-react";
import Button from "../../components/shared/Button";

export default function Repository() {
  const { repositoryName } = useRouter().query;
  const [loading, setLoading] = useState(false);
  const [repository, setRepository] = useState({});

  useEffect(() => {
    if (repositoryName) {
      (async () => {
        setLoading(true);
        // axios
        //   .get(`https://api.github.com/repos/${repositoryName}`)
        //   .then((response) => {
        //     let data = {
        //       name: response.data.name,
        //       description: response.data.description,
        //       owner: {
        //         login: response.data.owner.login,
        //         avatar_url: response.data.owner.avatar_url,
        //       },
        //       watchers_count: response.data.watchers_count,
        //       forks_count: response.data.forks_count,
        //       subscribers_count: response.data.subscribers_count,
        //     };
        //     setRepository(data);
        //     setLoading(false);
        //   });
        setRepository(repo_data);
      })();
    }
  }, [repositoryName]);

  const formatValue = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3) return +(n / 1e3).toFixed(0) + "K";
  };

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
          <img className="logo" src={repository.owner?.avatar_url} />
          <div>
            <p className="name">{repository.name}</p>
            <span className="description">{repository.description}</span>
            <div className="stats">
              <span>
                <StarIcon />
                {formatValue(repository.forks_count)}
              </span>
              <span>
                <RepoForkedIcon />
                {formatValue(repository.subscribers_count)}
              </span>
              <span>
                <EyeIcon />
                {formatValue(repository.watchers_count)}
              </span>
            </div>
            <ActionButtons>
              <Button type="rounded" primary>
                Ver issues
              </Button>
              <LikeButton>
                <HeartIcon />
              </LikeButton>
            </ActionButtons>
          </div>
        </Content>
      </Container>
    </>
  );
}
