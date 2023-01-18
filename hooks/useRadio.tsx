import { RadioBrowserApi, Station } from 'radio-browser-api';
import { useState } from 'react';
import { APP_USER_AGENT } from '../contexts/Radio/Radio.config';
import station from '../components/Station';

const useRadio: () => {
  stations: Station[],
  station: station|null,
  loading: boolean,
  loadStations: (page: number, amount: number) => void,
  getStationDetails: (id: string) => void,
  click: (id: string) => void,
  vote: (id: string) => void
} = () => {
  const browser = new RadioBrowserApi(APP_USER_AGENT);

  const [stations, setStations] = useState<Station[]>([]);
  const [station, setStation] = useState<Station|null>(null);
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

  function getStationDetails(id: string) {
    if(_loading)
      return;

    setLoading(_loading = true);
    browser.getStationsById([id])
      .then(stations => setStation(stations[0]))
      .then(() => _loading = false)
      .then(setLoading)
      .catch(console.error);
  }

  function vote(id: string) {
    browser.voteForStation(id)
      .catch(console.error);
  }

  function click(id: string) {
    browser.sendStationClick(id)
      .catch(console.error);
  }

  return {
    stations,
    station,
    loading,
    loadStations,
    getStationDetails,
    click,
    vote
  };
}

export default useRadio;