import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { Station as StationType } from 'radio-browser-api/dist/types/constants';
import Station from '../../components/Station';
import FavoritesContext, { FavoritesContextType } from '../../contexts/Favorites/Favorites.context';
import { IconDeviceAirpods } from '@tabler/icons';

function FavoritesPage() {
  const { favorites } = useContext<FavoritesContextType>(FavoritesContext);

  function renderEmpty() {
    return <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
      <IconDeviceAirpods className="h-20 w-20 text-fuchsia-800 dark:text-fuchsia-500" strokeWidth={.5}/>
      <div>
        <Typography variant="h5" className="w-full text-fuchsia-700 dark:text-fuchsia-500">Just Empty</Typography>
        <p className="dark:text-gray-300">Hit the heart button to save a station here</p>
      </div>
    </div>;
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