import { Station } from 'radio-browser-api';
import { createContext } from 'react';

export type PlayerContextType = {
  current: Station|null,
  play: (station: Station) => void,
  playing: boolean,
  pause: () => void,
  loading: boolean
}

const PlayerContext = createContext<PlayerContextType>({
  current: null,
  play: () => null,
  pause: () => null,
  playing: false,
  loading: true
});

export default PlayerContext;