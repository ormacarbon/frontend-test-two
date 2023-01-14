import { useQueryGet } from "@/hooks/react-query";
import { PostsData } from "@/types";
import { AxiosRequestConfig } from "axios";

interface useListPostsProps {
  reqConfig?: AxiosRequestConfig;
  queryConfigs?: {
    onSuccess?(data: PostsData): void;
    onError?(error: unknown): void;
  };
}

export const useListPosts = (queryOptions?: useListPostsProps) => {
  const { queryConfigs, reqConfig } = queryOptions || {};

  const { data, ...rest } = useQueryGet<PostsData>({
    queryKeys: ["posts"],
    url: "/posts",
    reqConfig,
    queryConfigs: {
      refetchOnWindowFocus: false,
      ...queryConfigs,
    },
  });

  return { postsList: data, ...rest };
};
