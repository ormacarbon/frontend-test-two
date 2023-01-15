import { createContext, useState } from "react";

export const menuContext = createContext(false);

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(false);

  return (
    <menuContext.Provider value={[menu, setMenu]}>
      {children}
    </menuContext.Provider>
  );
}
