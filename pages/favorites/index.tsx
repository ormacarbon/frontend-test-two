import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { Station as StationType } from 'radio-browser-api/dist/types/constants';
import Station from '../../components/Station';
import FavoritesContext, { FavoritesContextType } from '../../contexts/Favorites/Favorites.context';
import Empty from '../../components/Empty';

function FavoritesPage() {
  const { favorites } = useContext<FavoritesContextType>(FavoritesContext);

  function renderEmpty() {
    return <Empty title="Just Empty" caption="Hit the heart button to save a station here"/>;
  }

  function renderStation(station: StationType, key: number) {
    return <Station { ...station } key={key}/>
  }

  function renderStations() {
    return <ol className="flex flex-col w-full overflow-hidden">
      { favorites.map(renderStation) }
    </ol>;
  }

  return (
    <div className="w-full overflow-hidden">
      <Typography variant="h4" className="mt-6 mb-8 text-fuchsia-600">Favorites</Typography>
      { favorites.length ? renderStations() : renderEmpty() }
    </div>
  )
}

export default FavoritesPage;