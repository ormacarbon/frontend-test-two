import React, { useContext } from 'react';
import { Station as StationType } from 'radio-browser-api';
import { CircularProgress } from '@mui/material';
import Station from '../components/Station';
import RadioContext, { RadioContextType } from '../contexts/Radio/Radio.context';

function Home() {
  const { loading, stations } = useContext<RadioContextType>(RadioContext);

  function renderLoading() {
    return loading
      ? (
        <div className="flex justify-center w-full">
          <CircularProgress className="text-fuchsia-600" />
        </div>
      ) : <></>;
  }

  function renderStation(station: StationType, key: number) {
    return <Station { ...station } key={key}/>
  }

  function renderStations() {
    return !loading
      ? (
        <ol className="flex flex-col w-full overflow-hidden">
          { stations.map(renderStation) }
        </ol>
      ) : <></>;
  }

  return (
    <div className="w-full sm:w-auto overflow-hidden">
      { renderLoading() }
      { renderStations() }
    </div>
  )
}

export default Home;