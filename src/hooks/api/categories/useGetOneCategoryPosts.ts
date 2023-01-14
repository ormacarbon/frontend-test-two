import { useQueryGet } from "@/hooks/react-query";
import { Post, PostsData } from "@/types";
import { AxiosRequestConfig } from "axios";

interface useGetOneCategoryPostsProps {
  categoryId: string;
  reqConfig?: AxiosRequestConfig;
  queryConfigs?: {
    onSuccess?(data: PostsData): void;
    onError?(error: unknown): void;
  };
}

export const useGetOneCategoryPosts = (
  queryOptions?: useGetOneCategoryPostsProps
) => {
  const { categoryId, queryConfigs, reqConfig } = queryOptions || {};

  const { data, ...rest } = useQueryGet<PostsData>({
    queryKeys: ["category", categoryId],
    url: "/posts",
    reqConfig,
    queryConfigs: {
      enabled: !!categoryId,
      refetchOnWindowFocus: false,
      ...queryConfigs,
    },
  });

  return { postsList: data, ...rest };
};
