import { IconButton } from '@mui/material';
import {
  IconHeartMinus,
  IconHeartPlus,
  IconListDetails,
  IconPlayerPause,
  IconPlayerPlay,
  IconStar,
  IconWorld
} from '@tabler/icons';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import FavoritesContext, { FavoritesContextType } from '../../contexts/Favorites/Favorites.context';
import { PlayerContextType } from '../../contexts/Player/Player.context';
import PlayerContext from '../../contexts/Player';
import useRadio from '../../hooks/useRadio';
import { Station } from 'radio-browser-api';

function StationControls(props: Station) {
  const { id, homepage } = props;

  const { favorites, toggleStation } = useContext<FavoritesContextType>(FavoritesContext);
  const { playing, current, play, pause } = useContext<PlayerContextType>(PlayerContext);
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

  return <div className="flex justify-between items-center w-full sm:w-fit sm:gap-x-4">
    { renderPlayPause() }
    { renderFavorite() }
    <IconButton onClick={() => vote(id)} aria-label="Like this Station">
      <IconStar/>
    </IconButton>
    <Link href={ `/station/${id}` }>
      <IconButton onClick={() => vote(id)} aria-label="See details">
        <IconListDetails/>
      </IconButton>
    </Link>
    <a href={ homepage } target="_blank" rel="noreferrer" title="Station home page">
      <IconButton>
        <IconWorld/>
      </IconButton>
    </a>
  </div>;
}

export default StationControls;