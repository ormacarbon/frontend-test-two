import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const RepositoryContext = createContext({});

export default function RepositoryProvider({ children }) {
  const router = useRouter();
  const [repository, setRepository] = useState({});

  return (
    <RepositoryContext.Provider value={{ repository, setRepository }}>
      {children}
    </RepositoryContext.Provider>
  );
}
