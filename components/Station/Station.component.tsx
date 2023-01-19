import { Station } from 'radio-browser-api';
import {
  IconRadio,
  IconStars,
  IconWaveSquare
} from '@tabler/icons';
import { LinearProgress, Typography } from '@mui/material';
import { useContext } from 'react';
import PlayerContext from '../../contexts/Player';
import { PlayerContextType } from '../../contexts/Player/Player.context';
import StationControls from '../StationControls';

function Station(props: Station) {
  const {
    name,
    bitrate,
    votes,
    favicon,
    id
  } = props;

  const { loading, current } = useContext<PlayerContextType>(PlayerContext);

  function renderFavIcon() {
    return <div className="basis-10 flex-shrink-0 h-10 mt-3 sm:mt-0 flex justify-center items-center">
      {
        favicon
          // The images sources are not consistent for this to work
          // eslint-disable-next-line @next/next/no-img-element
        ? <img src={favicon} alt="favicon" aria-hidden className="w-full"/>
        : <IconRadio className="text-fuchsia-600 w-8 h-8"/>
      }
    </div>;
  }

  function renderLoading() {
    if(current && current.id !== id || !loading)
      return <div className="h-1"/>;
    return <div className="h-1">
      <LinearProgress className="bg-fuchsia-600 w-full h-1"/>
    </div>;
  }

  return <li className="flex flex-col w-full border-fuchsia-500 dark:border-fuchsia-900 border-b-[1px]">
    <div className="flex flex-col sm:flex-row w-full sm:justify-between py-6">
      <div className="w-full flex gap-4 truncate sm:items-center justify-self-stretch mb-2 sm:mb-0">
        { renderFavIcon() }
        <div className="truncate">
          <Typography variant="h6" className="text-fuchsia-600 dark:text-fuchsia-300 truncate max-w-full">{ name.trim().length > 1 ? name.trim() : 'Unnamed' }</Typography>
          <div className="flex gap-3">
            <div className="flex gap-1 text-gray-800 dark:text-gray-300">
              <IconStars className="w-5"/> { votes }
            </div>
            {
              bitrate > 0
              ? <div className="flex gap-1 text-gray-800 dark:text-gray-300">
                  <IconWaveSquare className="w-5"/> { bitrate }
                </div>
              : <></>
            }
          </div>
        </div>
      </div>
      <StationControls { ...props }/>
    </div>
    { renderLoading() }
  </li>;
}

export default Station;