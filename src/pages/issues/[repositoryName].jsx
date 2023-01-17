import axios from "axios";
import Head from "next/head";
import Issue from "../../components/pages/Issues/Issue";
import Button from "../../components/shared/Button";
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
  Empty,
  IssuesContainer,
  PaginationButtons,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/theme";

export default function repositoryNameIssues() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { repositoryName } = useRouter().query;

  const [page, setPage] = useState(1);
  const [state, setState] = useState("all");
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [requested, setRequested] = useState();
  const [repository, setRepository] = useState({});
  const [maxPages, setMaxPages] = useState(0);

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
        setLoading(false);
        setRequested(true);
        setIssues(issue_data);
        setRepository(repo_data);
      })();
    }
  }, [repositoryName, page, state]);

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    const calc = (value) => {
      let pages = (value / 15).toFixed(0);
      let rest = value % 15;
      return rest > 0 ? pages + 1 : pages;
    };

    if (repository?.name) {
      const all = issues[0]?.number;
      const opened = repository.open_issues_count;
      const closed = all - opened;
      setMaxPages(
        calc(state === "open" ? opened : state === "closed" ? closed : all)
      );
    }
  }, [repository, state]);

  function handleChangeIssuesPage(_page) {
    setPage(page + _page);
  }

  return (
    <>
      <Head>
        <title>
          {repository.name ? "Issues • " + repository.name : "Loading..."}
        </title>
      </Head>
      {repository?.name && (
        <RepositoryIssuesHeader
          isEmpty={issues.length === 0}
          isIssues
          repository={repository}
        />
      )}
      <Container>
        <Content>
          {!requested || issues.length > 0 ? (
            <>
              <ActionsContainer>
                <IssueTypeDropdown state={state} setState={setState} />
                <PaginationButtons>
                  {page > 1 && (
                    <button onClick={() => handleChangeIssuesPage(-1)}>
                      <FiArrowLeft /> Anterior
                    </button>
                  )}
                  {page <= maxPages && (
                    <button onClick={() => handleChangeIssuesPage(1)}>
                      Próxima
                      <FiArrowRight />
                    </button>
                  )}
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
            </>
          ) : (
            <Empty>
              <img alt="Empty issues icon" src="/assets/empty-issues.svg" />
              <span>
                Não há issues por <br /> aqui ainda.
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
