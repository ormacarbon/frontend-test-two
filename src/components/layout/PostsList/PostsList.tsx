import { useListPosts } from "@/hooks/api/posts/useListPosts";
import { PostCard } from "../PostCard/PostCard";
import * as S from "./posts-list.style";

export const PostsList = () => {
  const { postsList } = useListPosts();

  return (
    <S.PostsListContainer>
      {postsList?.posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.body} />
      ))}
    </S.PostsListContainer>
  );
};
