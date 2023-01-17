import data from "../../utils/repositoryData";
import Head from "next/head";
import axios from "axios";
import Header from "../../components/pages/Home/Header";

import { useRouter } from "next/router";
import { HistoryRepository } from "../../components/pages/Home/HistoryRepository";
import { FiAlertCircle, FiSearch } from "react-icons/fi";
import { SucessToast, ErrorToast } from "../../components/shared/Toast";
import { useContext, useRef, useState } from "react";
import {
  Container,
  Content,
  Description,
  HistoryContainer,
  SearchContainer,
} from "./styles";
import { ColorRing } from "react-loader-spinner";
import { ThemeContext } from "../../contexts/theme";
import { RepoHistoryContext } from "../../contexts/StorageRepositories/history";
import { toast } from "react-hot-toast";
import { HistoryIcon } from "@primer/octicons-react";

export default function Home() {
  const router = useRouter();
  const inputRef = useRef();
  const { theme } = useContext(ThemeContext);
  const { repositories, saveRepositories } = useContext(RepoHistoryContext);

  const [loading, setLoading] = useState(false);

  async function getRepository(repositoryName) {
    setLoading(true);
    axios
      .get(`https://api.github.com/repos/${repositoryName}`)
      .then((response) => {
        saveRepositories([response.data, ...repositories]);
        router.push("/repository/" + repositoryName.replace("/", "%2F"));
      })
      .catch((e) => {
        console.log(e);
        ErrorToast({
          message: "Repositório não encontrado :(",
          icon: <FiAlertCircle size={18} />,
        });
      })
      .finally(() => setLoading(false));
  }

  async function searchRepository(input) {
    if (input === " " || !input.includes("/") || input.split("/").length > 2) {
      ErrorToast({
        message: "Digite um nome de repositório válido!",
        icon: <FiAlertCircle size={18} />,
      });
    } else {
      await getRepository(input);
    }
  }

  function handleKeyPress(e) {
    if (e.code === "Enter") searchRepository(e.target.value);
  }

  function handleClearHistory() {
    SucessToast({
      message: "Histórico apagado!",
    });
  }

  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <>
        <Header />
        <Container>
          <Content emptyHistory={repositories.length === 0}>
            <Description>
              Encontre repositórios <br /> e acompanhe suas <span>issues</span>.
            </Description>
            <SearchContainer>
              <input
                ref={inputRef}
                onKeyPress={(e) => handleKeyPress(e)}
                placeholder="Pesquisar repositório (user/repository)"
              />
              <button onClick={() => searchRepository(inputRef.current.value)}>
                {loading ? (
                  <ColorRing
                    wrapperStyle={{ width: 24, height: 24 }}
                    visible={true}
                    height="60"
                    width="60"
                    ariaLabel="blocks-loading"
                    wrapperClass="blocks-wrapper"
                    colors={"#FFFFFF".repeat(5).match(/.{1,7}/g)}
                  />
                ) : (
                  <FiSearch color="#FFF" size={20} />
                )}
              </button>
            </SearchContainer>
            {repositories.length > 0 && (
              <HistoryContainer>
                <div className="header">
                  <p>
                    <HistoryIcon size={16} />
                    Histórico
                  </p>
                  <button onClick={() => saveRepositories([])}>Limpar</button>
                </div>
                <div className="content">
                  {repositories.map((r, i) => (
                    <HistoryRepository key={i} data={r} />
                  ))}
                </div>
              </HistoryContainer>
            )}
          </Content>
        </Container>
      </>
    </>
  );
}
