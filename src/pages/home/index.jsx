import Head from "next/head";
import Header from "../../components/pages/Home/Header";

import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { RepositoryContext } from "../../contexts/repository";
import { useContext, useEffect, useState } from "react";
import { Container, Content, Description, SearchContainer } from "./styles";

export default function Home() {
  const router = useRouter();
  const { loading, repository, getRepository } = useContext(RepositoryContext);
  const [input, setInput] = useState("");

  async function searchRepository() {
    if (input === "") {
      alert("invalido");
    } else if (!input.includes("/")) {
      alert("invalido");
    } else if (input.split("/").length > 2) {
      alert("invalido");
    } else {
      await getRepository(input);
    }
  }

  function handleKeyPress(e) {
    if (e.code === "Enter") searchRepository();
  }

  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <>
        <Header />
        <Container>
          <Content>
            <Description>
              Encontre repositórios <br /> e acompanhe suas <span>issues</span>.
            </Description>
            <SearchContainer>
              <input
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pesquisar repositório (user/repository)"
              />
              <button onClick={searchRepository}>
                <FiSearch />
              </button>
            </SearchContainer>
            {!loading && <span>OLA</span>}
            <span>{repository === null && "Nada encontrado"}</span>
          </Content>
        </Container>
      </>
    </>
  );
}
