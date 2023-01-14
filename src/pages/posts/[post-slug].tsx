import { AppLayout, CategoriesList } from "@/components/layout";
import { CategoryListContainer } from "@/components/layout/CategoriesList/categories-list";
import { CategoryTag } from "@/components/layout/CategoryTag/CategoryTag";
import { Heading } from "@/components/typography";
import { useGetOnePost } from "@/hooks/api/posts";
import { usePageSlug } from "@/hooks/helpers";
import Head from "next/head";
import styled from "styled-components";

export default function PostSlug() {
  const postId = usePageSlug("post-slug");

  const { post } = useGetOnePost({
    postId,
  });

  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>

      <AppLayout>
        <PostSlugContainer>
          <div>
            <Heading variant="2xl">{post?.title}</Heading>

            <CategoryListContainer>
              {post?.tags?.map((category) => (
                <CategoryTag
                  href={category}
                  tagName={category}
                  key={category}
                />
              ))}
            </CategoryListContainer>
          </div>

          <ContentBody>
            <p>{post?.body}</p>
            <p>{post?.body}</p>
            <p>{post?.body}</p>
            <p>{post?.body}</p>
            <p>{post?.body}</p>
            <p>{post?.body}</p>
            <p>{post?.body}</p>
          </ContentBody>
        </PostSlugContainer>
      </AppLayout>
    </>
  );
}

const PostSlugContainer = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
  padding: 1rem;
  margin-top: 2rem;

  @media screen and (min-width: 800px) {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 2rem;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
    row-gap: 4rem;
  }
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-column: 1;
`;
