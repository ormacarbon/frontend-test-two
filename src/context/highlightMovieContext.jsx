import { createContext, useState } from "react";

export const highlightMovieContext = createContext(null);

export function HighlightMovieProvider({ children }) {
  const [highlightMovie, setHighlightMovie] = useState(null);

  return (
    <highlightMovieContext.Provider value={[highlightMovie, setHighlightMovie]}>
      {children}
    </highlightMovieContext.Provider>
  );
}
