import { PropsWithChildren, useEffect, useState } from 'react';
import FavoritesContext from './Favorites.context';
import { Station } from 'radio-browser-api';
import { FAVORITES_STORAGE_KEY } from './Favorites.config';

function FavoritesContextComponent(props: PropsWithChildren) {
  const [favorites, setFavorites] = useState<Station[]>([]);

  useEffect(() => {
    if(typeof window === 'undefined')
      return;

    const saved = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if(!saved)
      return;

    setFavorites(JSON.parse(saved) as Station[]);
  }, []);

  function addStation(station: Station) {
    if(favorites.includes(station))
      return;
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...favorites, station]));
    setFavorites([...favorites, station]);
  }

  function removeStation(id: string) {
    const update = favorites.filter(favorite => favorite.id !== id);
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(update));
    setFavorites(update);
  }

  function toggleStation(station: Station) {
    if(favorites.includes(station))
      removeStation(station.id);
    else
      addStation(station);
  }

  return <FavoritesContext.Provider value={{
    favorites,
    addStation,
    removeStation,
    toggleStation
  }}>
    { props.children }
  </FavoritesContext.Provider>;
}

export default FavoritesContextComponent;