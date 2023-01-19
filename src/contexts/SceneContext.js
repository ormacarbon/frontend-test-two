import React from "react";

export const SceneContext = React.createContext(null);

export const SceneContextProvider = ({ children }) => {
  const [scenes, setScene] = React.useState([]);
  return (
    <SceneContext.Provider value={{ scenes, setScene }}>
      {children}
    </SceneContext.Provider>
  );
};
