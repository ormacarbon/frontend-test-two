import { useEffect, useState } from "react";
import { api, SIMPLE_CACHE_MAP } from "../../services";

export function useFetch(url, options = {}, requestKey = undefined) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const actualPage = page.toString();
      const key = requestKey + actualPage ?? url + actualPage;
      console.log("key", key);

      if (SIMPLE_CACHE_MAP.has(key)) {
        setData(SIMPLE_CACHE_MAP.get(key));
        return;
      }

      const paramsWithPage = {
        ...options,
        params: {
          ...options.params,
          page,
        },
      };

      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api(url, paramsWithPage);

        setData(data);
        SIMPLE_CACHE_MAP.set(key, data);
      } catch (err) {
        setError(err);
        setData(null);
        SIMPLE_CACHE_MAP.clear();
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [options, page]);

  return { data, isLoading, error, setPage, page };
}
