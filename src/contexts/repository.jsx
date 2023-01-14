import axios from "axios";
import { createContext, useState } from "react";
import repo_data from "../utils/repositoryData";
import { useRouter } from "next/router";

export const RepositoryContext = createContext({});

export default function RepositoryProvider({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [repository, setRepository] = useState({});

  async function getRepository(repositoryName) {
    setRepository({});
    setLoading(true);
    axios
      .get(`https://api.github.com/repos/${repositoryName}`)
      .then((response) => {
        let data = {
          name: response.data.name,
          description: response.data.description,
          owner: {
            login: response.data.owner.login,
            avatar_url: response.data.owner.avatar_url,
          },
          watchers_count: response.data.watchers_count,
          forks_count: response.data.forks_count,
          subscribers_count: response.data.subscribers_count,
        };
        setRepository(data);
        router.push("/repository/" + repositoryName.replace("/", "%2F"));
      })
      .catch(() => {
        setRepository(null);
      })
      .finally(() => setLoading(false));
  }

  return (
    <RepositoryContext.Provider
      value={{ repository, setRepository, getRepository, loading }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}
