import Link from "next/link";
import { Flex } from "../../styles/global";

import { GrAddCircle } from "react-icons/gr";

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
              <h1>{title}</h1>
              <Link href="/scene/new">+</Link>
            </TitleContainer>
            {children}
          </Flex>
        </main>
      </PageContainer>
    </>
  );
}

export default Layout;
