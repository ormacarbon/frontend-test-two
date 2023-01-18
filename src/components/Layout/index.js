import Link from "next/link";
import { Flex } from "../../styles/global";

import Header from "../Header";
import Head from "./Head";

import { PageContainer, TitleContainer } from "./styles";

function Layout({ title, children }) {
  return (
    <>
      <Head title={title} />
      <PageContainer>
        <Header />
        <main>
          <Flex fullWidth={true} fullHeight={true} gap="0">
            <TitleContainer>
              <h1>Contato</h1>
              <Link href="/scene/new">Adicionar</Link>
            </TitleContainer>
            {children}
          </Flex>
        </main>
      </PageContainer>
    </>
  );
}

export default Layout;
