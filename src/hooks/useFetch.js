import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch(url, params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api
      .get(url, { params: params })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}
