import axios from "axios";
import Head from "next/head";
import Issue from "../../components/pages/Issues/Issue";
import repo_data from "../../utils/repositoryData";
import issue_data from "../../utils/issuesData";
import IssueTypeDropdown from "../../components/pages/Issues/Dropdown";
import RepositoryIssuesHeader from "../../components/shared/RepositoryIssuesHeader";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ColorRing } from "react-loader-spinner";
import { useRouter } from "next/router";
import {
  ActionsContainer,
  Container,
  Content,
  IssuesContainer,
  PaginationButtons,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/theme";

export default function repositoryNameIssues() {
  const { repositoryName } = useRouter().query;
  const { theme } = useContext(ThemeContext);

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [state, setState] = useState("all");

  useEffect(() => {
    if (repositoryName) {
      (async () => {
        setLoading(true);
        // const [repositoryData, issuesData] = await Promise.all([
        //   axios.get(`https://api.github.com/repos/${repositoryName}`),
        //   axios.get(`https://api.github.com/repos/${repositoryName}/issues`, {
        //     params: {
        //       state,
        //       per_page: 15,
        //       page,
        //     },
        //   }),
        // ]);
        // setRepository(repositoryData.data);
        // setIssues(issuesData.data);
        // setLoading(false);

        setIssues(issue_data);
        setRepository(repo_data);
        setLoading(false);
      })();
    }
  }, [repositoryName, page, state]);

  function handleChangeIssuesPage(_page) {
    setPage(page + _page);
    console.log(page);
  }

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
          <ActionsContainer>
            <IssueTypeDropdown state={state} setState={setState} />
            <PaginationButtons>
              {page > 1 && (
                <button onClick={() => handleChangeIssuesPage(-1)}>
                  <FiArrowLeft /> Anterior
                </button>
              )}
              <button onClick={() => handleChangeIssuesPage(1)}>
                Próxima
                <FiArrowRight />
              </button>
            </PaginationButtons>
          </ActionsContainer>
          <IssuesContainer>
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
              issues.map((issue) => <Issue key={issue.id} data={issue} />)
            )}
          </IssuesContainer>
        </Content>
      </Container>
    </>
  );
}
