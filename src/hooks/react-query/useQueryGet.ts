import { api } from "@/services/axios";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

interface useReactQueryProps {
  queryKeys: string[];
  url: string;
  params?: AxiosRequestConfig;
  queryConfigs?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
  };
}

export function useQueryGet<ResponseDataType>({
  queryKeys,
  url,
  params,
  queryConfigs,
}: useReactQueryProps) {
  const queryResponse = useQuery(
    queryKeys,
    async () => {
      const { data } = await api.get<ResponseDataType>(url, params);
      return data;
    },
    { retry: false, ...queryConfigs }
  );

  return queryResponse;
}
