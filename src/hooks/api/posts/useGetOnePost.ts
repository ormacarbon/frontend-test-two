import { useQueryGet } from "@/hooks/react-query";
import { Post } from "@/types";
import { AxiosRequestConfig } from "axios";

interface useGetOnePostProps {
  postId: string;
  reqConfig?: AxiosRequestConfig;
  queryConfigs?: {
    onSuccess?(data: Post): void;
    onError?(error: unknown): void;
  };
}

export const useGetOnePost = (queryOptions?: useGetOnePostProps) => {
  const { postId, queryConfigs, reqConfig } = queryOptions || {};

  const { data, ...rest } = useQueryGet<Post>({
    queryKeys: ["post", postId],
    url: `posts/${postId}`,
    reqConfig,
    queryConfigs: {
      enabled: !!postId,
      ...queryConfigs,
    },
  });

  return { post: data, ...rest };
};
