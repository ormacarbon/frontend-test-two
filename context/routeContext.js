import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const RouteContext = createContext(undefined)

export function RouteContextProvider({ children }) {
  const [currentRoute, setCurrentRoute] = useState("");
  const [lastRoute, setLastRoute] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLastRoute(currentRoute);
    setCurrentRoute(router.route)
  }, [router.route])

  const toPokemonLink = (name) => {
    router.push({
      pathname: '/pokemon',
      query: { pokemon: name },
    }, `/pokemon/${name}`)
  };

  return (
    <RouteContext.Provider value={{currentRoute, lastRoute, router, toPokemonLink}}>
      {children}
    </RouteContext.Provider>
  );
}