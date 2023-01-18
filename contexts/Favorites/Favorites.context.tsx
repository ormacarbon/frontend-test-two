import { createContext } from 'react';
import { Station } from 'radio-browser-api';

export type FavoritesContextType = {
  favorites: Station[],
  addStation: (station: Station) => void,
  removeStation: (id: string) => void
  toggleStation: (station: Station) => void
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addStation: () => null,
  removeStation: () => null,
  toggleStation: () => null
});

export default FavoritesContext;