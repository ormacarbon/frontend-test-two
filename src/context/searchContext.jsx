import { createContext, useState } from "react";

export const searchContext = createContext("");

export function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <searchContext.Provider value={[searchValue, setSearchValue]}>
      {children}
    </searchContext.Provider>
  );
}
