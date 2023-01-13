import { PostListSkeleton } from "@/components/feedback";
import { useListPosts } from "@/hooks/api/posts/useListPosts";
import { PostCard } from "../PostCard/PostCard";
import * as S from "./posts-list.style";

export const PostsList = () => {
  const { postsList, isLoading } = useListPosts({
    reqConfig: {
      params: {
        limit: 5,
      },
    },
  });

  return (
    <S.PostsListContainer>
      {isLoading ? (
        <PostListSkeleton />
      ) : (
        postsList?.posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </S.PostsListContainer>
  );
};
