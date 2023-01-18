import { Station } from 'radio-browser-api';
import {
  IconHeart,
  IconPlayerPlay,
  IconRadio, IconStar,
  IconStars,
  IconWaveSquare,
  IconWorld
} from '@tabler/icons';
import { IconButton, Typography } from '@mui/material';

function Station(props: Station) {
  const {
    name,
    homepage,
    bitrate,
    votes,
    favicon
  } = props;

  function onPlay() {
    
  }
  
  function onFavorite() {
    
  }
  
  function onVote() {
    
  }

  function renderFavIcon() {
    return <div className="basis-10 flex-shrink-0 h-10 mt-3 sm:mt-0 flex justify-center items-center">
      {
        favicon
        ? <img src={favicon} alt="favicon" aria-hidden className="w-full"/>
        : <IconRadio className="text-fuchsia-600 w-8 h-8"/>
      }
    </div>;
  }

  return <li className="flex flex-col sm:flex-row w-full sm:justify-between border-fuchsia-500 dark:border-fuchsia-900 border-b-[1px] py-6">
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
      <IconButton onClick={onPlay} aria-label="Listen">
        <IconPlayerPlay className=""/>
      </IconButton>
      <IconButton onClick={onFavorite} aria-label="Save station">
        <IconHeart/>
      </IconButton>
      <IconButton onClick={onVote} aria-label="Like this Station">
        <IconStar/>
      </IconButton>
      <a href={ homepage } target="_blank" rel="noreferrer" title="Station home page">
        <IconButton>
          <IconWorld/>
        </IconButton>
      </a>
    </div>
  </li>;
}

export default Station;