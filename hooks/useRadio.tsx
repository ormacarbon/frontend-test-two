import { RadioBrowserApi, Station } from 'radio-browser-api';
import { useEffect, useState } from 'react';

const APP_NAME = 'OrmaCarbonChallenge/0.1.0';
const AMOUNT = 15;

const useRadio: () => {
  stations: Station[],
  loading: boolean,
  loadStations: (page: number, amount?: number) => void
} = () => {
  const browser = new RadioBrowserApi(APP_NAME);

  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let _loading = false;

  useEffect(() => {
    if(typeof window === 'undefined')
      return;
    loadStations(1);
  }, []);

  function loadStations(page: number, amount?: number) {
    if(_loading)
      return;

    setLoading(_loading = true);
    console.log(page);
    browser.getAllStations({
      offset: (page -1) * (amount || AMOUNT),
      limit: (amount || AMOUNT),
      hideBroken: true
    }).then(s => { console.debug(s); return s; })
      .then(s => setStations([...stations, ...s]))
      .then(() => _loading = false)
      .then(setLoading);
  }

  return {
    stations,
    loading,
    loadStations
  };
}

export default useRadio;