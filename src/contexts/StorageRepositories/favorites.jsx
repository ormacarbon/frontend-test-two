import { createContext, useCallback, useEffect, useState } from "react";
import { SucessToast, ErrorToast } from "../../components/shared/Toast";
import { HeartFillIcon, XIcon } from "@primer/octicons-react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const repositories = localStorage.getItem("@favorites");
    if (repositories) setRepositories(JSON.parse(repositories));
  }, []);

  function isFavorite(repository) {
    return repositories.some((r) => r.id === repository.id);
  }

  function removeFavorite(repository) {
    const _favorites = repositories.filter((r) => r.id !== repository.id);
    setRepositories(_favorites);
    localStorage.setItem("@favorites", JSON.stringify(_favorites));
    ErrorToast({
      message: "Removido dos favoritos.",
      icon: <XIcon />,
      duration: 1000,
    });
  }

  function addFavorite(repository) {
    const _favorites = [repository, ...repositories];
    setRepositories(_favorites);
    localStorage.setItem("@favorites", JSON.stringify(_favorites));
    SucessToast({
      message: "Adicionado aos favoritos.",
      icon: <HeartFillIcon />,
      duration: 1000,
    });
  }

  function toggleFavorite(repository) {
    if (isFavorite(repository)) removeFavorite(repository);
    else addFavorite(repository);
  }

  return (
    <FavoritesContext.Provider
      value={{
        repositories,
        isFavorite,
        removeFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
