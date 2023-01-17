import { createContext, useEffect, useState } from "react";

import { useFetch } from "../hooks/useFetch";

export const apiConfigContext = createContext(null);

export function ConfigProvider({ children }) {
  const { data, loading, error } = useFetch("configuration", null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig(data);
  }, [data]);

  return (
    <apiConfigContext.Provider value={config}>
      {children}
    </apiConfigContext.Provider>
  );
}
