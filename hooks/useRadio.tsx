import { RadioBrowserApi, Station } from 'radio-browser-api';
import { useContext, useEffect, useState } from 'react';
import PaginationContext, { PaginationContextType } from '../contexts/Pagination/Pagination.context';

const APP_NAME = 'OrmaCarbonChallenge/0.1.0';

const useRadio: () => {
  stations: Station[],
  loading: boolean,
  loadStations: () => void
} = () => {
  const browser = new RadioBrowserApi(APP_NAME);
  const { page, amount } = useContext<PaginationContextType>(PaginationContext);

  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let _loading = false;

  useEffect(() => {
    if(typeof window === 'undefined')
      return;
    loadStations();
  }, []);

  useEffect(() => {
    loadStations();
  }, [page]);

  function loadStations() {
    if(_loading)
      return;

    setLoading(_loading = true);
    browser.getAllStations({
      offset: (page -1) * (amount),
      limit: (amount),
      hideBroken: true
    }).then(setStations)
      .then(() => _loading = false)
      .then(setLoading);
  }

  return {
    stations,
    loading,
    loadStations
  };
  
  function vote(id: string) {
    browser.voteForStation(id);
  }
  
  function click(id: string) {
    browser.sendStationClick(id);
  }
}

export default useRadio;