import { createContext } from "react";

const dataContext = createContext({
  board: [],
  setBoard: () => {},
});

export default dataContext;
