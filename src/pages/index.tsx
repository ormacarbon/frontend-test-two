import { AppLayout, PostCard, PostsList } from "@/components/layout";
import { Heading } from "@/components/typography";
import Head from "next/head";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>

      <AppLayout sessionTitle="My blog">
        <HomeContainer>
          <Heading variant="xl">Recently Published</Heading>

          <PostsList />
        </HomeContainer>
      </AppLayout>
    </>
  );
}

const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  overflow: auto;
`;
