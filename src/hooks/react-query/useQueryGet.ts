import { api } from "@/services/axios";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

interface useReactQueryProps {
  queryKeys: string[];
  url: string;
  reqConfig?: AxiosRequestConfig;
  queryConfigs?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
  };
}

export function useQueryGet<ResponseDataType>({
  queryKeys,
  url,
  reqConfig,
  queryConfigs,
}: useReactQueryProps) {
  const queryResponse = useQuery(
    queryKeys,
    async () => {
      const { data } = await api.get<ResponseDataType>(url, reqConfig);
      return data;
    },
    { retry: false, ...queryConfigs }
  );

  return queryResponse;
}
