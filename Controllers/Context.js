import { createContext } from "react";

export const ThemeContext = createContext(null);

export const LoadingContext = createContext({
  loading: false,
  setLoading: (prop) => {},
});

export const CompareContext = createContext({
  compare: { Pokemon1: null, Pokemon2: null },
  setCompare: () => {},
});
