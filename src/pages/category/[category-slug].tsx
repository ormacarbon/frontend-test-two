import { AppLayout, PostCard } from "@/components/layout";
import { Heading } from "@/components/typography";
import { useGetOneCategoryPosts } from "@/hooks/api/categories/useGetOneCategoryPosts";
import { usePageSlug } from "@/hooks/helpers";
import { filterPostsByCategory } from "@/src/helpers";
import { removeDuplicates } from "@/src/helpers/removeDuplicates";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiFillAccountBook } from "react-icons/ai";
import styled from "styled-components";

export default function CategorySlug() {
  const categoryId = usePageSlug("category-slug");

  const { postsList } = useGetOneCategoryPosts({
    categoryId,
  });

  const { postsByCategory } = filterPostsByCategory({
    categoryId,
    postsList: postsList.posts,
  });

  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>

      <AppLayout>
        <PostSlugContainer>
          <CategoryTitle>
            <Heading variant="2xl">{categoryId?.toUpperCase()}</Heading>
            {postsByCategory?.length} articles
          </CategoryTitle>

          <PostsByCategoryContainer>
            {postsByCategory?.map((post) => {
              return (
                <PostCard
                  post={post}
                  variant={"with-background"}
                  key={post.id}
                />
              );
            })}
          </PostsByCategoryContainer>
        </PostSlugContainer>
      </AppLayout>
    </>
  );
}

const PostSlugContainer = styled.main`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 2rem;
`;

const CategoryTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PostsByCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  grid-column: 1;

  @media screen and (min-width: 800px) {
    margin-top: 2rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    row-gap: 3rem;
  }
`;
