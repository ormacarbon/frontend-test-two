import { RadioBrowserApi, Station } from 'radio-browser-api';
import { useState } from 'react';
import { APP_USER_AGENT } from '../contexts/Radio/Radio.config';

const useRadio: () => {
  stations: Station[],
  loading: boolean,
  loadStations: (page: number, amount: number) => void,
  click: (id: string) => void,
  vote: (id: string) => void
} = () => {
  const browser = new RadioBrowserApi(APP_USER_AGENT);

  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let _loading = false;

  function loadStations(page: number, amount: number) {
    if(_loading)
      return;

    setLoading(_loading = true);
    browser.getAllStations({
      offset: (page -1) * amount,
      limit: amount,
      hideBroken: true,
      removeDuplicates: true
    }).then(setStations)
      .then(() => _loading = false)
      .then(setLoading)
      .catch(console.error);
  }

  function vote(id: string) {
    browser.voteForStation(id);
  }

  function click(id: string) {
    browser.sendStationClick(id);
  }

  return {
    stations,
    loading,
    loadStations,
    click,
    vote
  };
}

export default useRadio;