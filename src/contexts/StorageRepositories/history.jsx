import { createContext, useEffect, useState } from "react";

export const RepoHistoryContext = createContext();

export default function RepoHistoryProvider({ children }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repositories = localStorage.getItem("@repoHistory");
    if (repositories) setRepositories(JSON.parse(repositories));
  }, []);

  function saveRepositories(repositories) {
    if (repositories.length > 5) repositories.pop();
    setRepositories(repositories);
    localStorage.setItem("@repoHistory", JSON.stringify(repositories));
  }

  return (
    <RepoHistoryContext.Provider
      value={{
        repositories,
        saveRepositories,
      }}
    >
      {children}
    </RepoHistoryContext.Provider>
  );
}
