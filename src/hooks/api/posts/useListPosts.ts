import { useQueryGet } from "@/hooks/react-query";
import { PostsData } from "@/types";

interface useListPostsProps {
  params?: { [key: string]: string | number | undefined };
  queryConfigs?: {
    onSuccess?(data: PostsData): void;
    onError?(error: unknown): void;
  };
}

export const useListPosts = (queryOptions?: useListPostsProps) => {
  const { queryConfigs, params } = queryOptions || {};

  const { data, ...rest } = useQueryGet<PostsData>({
    queryKeys: ["posts"],
    url: "/posts",
    params,
    queryConfigs: {
      refetchOnWindowFocus: false,
      ...queryConfigs,
    },
  });

  return { postsList: data, ...rest };
};
