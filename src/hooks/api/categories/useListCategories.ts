import { useQueryGet } from "@/hooks/react-query";
import { CategoryData } from "@/types";
import { AxiosRequestConfig } from "axios";

interface useListCategoriesProps {
  reqConfig?: AxiosRequestConfig;
  queryConfigs?: {
    onSuccess?(data: CategoryData): void;
    onError?(error: unknown): void;
  };
}

export const useListCategories = (queryOptions?: useListCategoriesProps) => {
  const { queryConfigs, reqConfig } = queryOptions || {};

  const { data, ...rest } = useQueryGet<CategoryData>({
    queryKeys: ["categories"],
    url: "/posts",
    reqConfig,
    queryConfigs: {
      refetchOnWindowFocus: false,
      ...queryConfigs,
    },
  });

  return { categoriesList: data, ...rest };
};
