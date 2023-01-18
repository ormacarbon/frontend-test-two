import { Station } from 'radio-browser-api';
import {
  IconHeartMinus,
  IconHeartPlus, IconPlayerPause,
  IconPlayerPlay,
  IconRadio, IconStar,
  IconStars,
  IconWaveSquare,
  IconWorld
} from '@tabler/icons';
import { IconButton, LinearProgress, Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import FavoritesContext, { FavoritesContextType } from '../../contexts/Favorites/Favorites.context';
import useRadio from '../../hooks/useRadio';
import PlayerContext from '../../contexts/Player';
import { PlayerContextType } from '../../contexts/Player/Player.context';

function Station(props: Station) {
  const {
    name,
    homepage,
    bitrate,
    votes,
    favicon,
    id
  } = props;

  const { favorites, toggleStation } = useContext<FavoritesContextType>(FavoritesContext);
  const { loading, playing, current, play, pause } = useContext<PlayerContextType>(PlayerContext);
  const { vote, click } = useRadio();

  const isFavorite = useMemo(() => {
    if(!favorites.length)
      return false;
    return !!favorites.find(favorite => favorite.id === id);
  }, [favorites]);

  function onPlayPause() {
    if(current && current.id === id && playing)
      return pause();
    click(id);
    play(props);
  }

  function renderPlayPause() {
    const isPlaying = current && current.id === id && playing;

    return <IconButton onClick={onPlayPause} aria-label={ !isPlaying ? 'Play station' : 'Pause'}>
      {
        isPlaying
        ? <IconPlayerPause/>
        : <IconPlayerPlay/>
      }
    </IconButton>
  }

  function renderFavorite() {
    return <IconButton onClick={() => toggleStation(props)} aria-label="Save station">
      {
        isFavorite
          ? <IconHeartMinus/>
          : <IconHeartPlus/>
      }
    </IconButton>;
  }

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
      <div className="w-full flex gap-4 truncate sm:items-center justify-self-stretch">
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
      <div className="flex justify-between items-center w-full mt-2 sm:w-fit sm:gap-x-4">
        { renderPlayPause() }
        { renderFavorite() }
        <IconButton onClick={() => vote(id)} aria-label="Like this Station">
          <IconStar/>
        </IconButton>
        <a href={ homepage } target="_blank" rel="noreferrer" title="Station home page">
          <IconButton>
            <IconWorld/>
          </IconButton>
        </a>
      </div>
    </div>
    { renderLoading() }
  </li>;
}

export default Station;