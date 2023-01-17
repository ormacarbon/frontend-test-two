import React, { createContext, useContext, useState } from 'react';

const pageActiveContext = createContext();

export const usePageActiveContext = () => {
  return useContext(pageActiveContext);
};

export const PageActiveProvider = ({ children }) => {
  const [pageActive, setPageActive] = useState('/');

  const changePageActive = (page) => {
    setPageActive(page);
  };

  return (
    <pageActiveContext.Provider value={{ pageActive, changePageActive }}>
      {children}
    </pageActiveContext.Provider>
  );
};
