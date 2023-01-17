import { createContext, useState } from "react";

export const movieIdContext = createContext(0);

export function MovieIdProvider({ children }) {
  const [movieId, setMovieId] = useState(0);

  return (
    <movieIdContext.Provider value={[movieId, setMovieId]}>
      {children}
    </movieIdContext.Provider>
  );
}
