import { AppLayout, CategoriesList, PostsList } from "@/components/layout";
import { SectionHeading } from "@/components/typography";
import Head from "next/head";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>

      <AppLayout>
        <HomeContainer>
          <RecentlyPublished>
            <SectionHeading>Recently Published</SectionHeading>
            <PostsList />
          </RecentlyPublished>

          <TopCategories>
            <SectionHeading>Top Categories</SectionHeading>
            <CategoriesList />
          </TopCategories>
        </HomeContainer>
      </AppLayout>
    </>
  );
}

const HomeContainer = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 5rem;
  padding: 1rem;

  @media screen and (min-width: 800px) {
    max-width: 1100px;
    margin: 0 auto;
    grid-template-columns: 2fr 1fr;
    gap: 8rem;
  }
`;

const RecentlyPublished = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 800px) {
    grid-column: 1;
  }
`;

const TopCategories = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 800px) {
    grid-column: 2;
  }
`;
