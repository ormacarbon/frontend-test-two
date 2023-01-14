import repo_data from "../../utils/repositoryData";
import issue_data from "../../utils/issuesData";
import Issue from "../../components/pages/Issues/Issue";

import axios from "axios";

import { useRouter } from "next/router";
import { Container, Content, IssuesContainer } from "./styles";
import { useEffect, useState } from "react";
import issuesData from "../../utils/issuesData";
import Head from "next/head";
import RepositoryIssuesHeader from "../../components/shared/RepositoryIssuesHeader";

export default function repositoryNameIssues() {
  const { repositoryName } = useRouter().query;

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [state, setState] = useState("all");

  useEffect(() => {
    if (repositoryName) {
      (async () => {
        // const [repositoryData, issuesData] = await Promise.all([
        //   axios.get(`https://api.github.com/repos/${repositoryName}`),
        //   axios.get(`https://api.github.com/repos/${repositoryName}/issues`, {
        //     params: {
        //       state: "all",
        //       per_page: 15,
        //     },
        //   }),
        // ]);
        // setRepository(repositoryData.data);
        // setIssues(issuesData.data);
        // setLoading(false);

        setIssues(issue_data);
        setRepository(repo_data);
      })();
    }
  }, [repositoryName]);

  return (
    <>
      <Head>
        <title>
          {repository.name ? repository.name + " • issues" : "Loading..."}
        </title>
      </Head>
      {repository?.name && <RepositoryIssuesHeader repository={repository} />}
      <Container>
        <Content>
          <IssuesContainer>
            {issues.map((issue) => (
              <Issue key={issue.id} data={issue} />
            ))}
          </IssuesContainer>
        </Content>
      </Container>
    </>
  );
}
