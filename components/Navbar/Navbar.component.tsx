import { AppBar, IconButton, Pagination, Toolbar } from '@mui/material';
import { IconHome2, IconMoon, IconPlayerPause, IconPlayerPlay, IconStar, IconSun } from '@tabler/icons';
import React, { useContext } from 'react';
import { ThemeContextType, ThemeContext } from '../../contexts/Theme/Theme.context';
import RadioContext, { RadioContextType } from '../../contexts/Radio/Radio.context';
import Link from 'next/link';
import PlayerContext, { PlayerContextType } from '../../contexts/Player/Player.context';

function Navbar() {
  const themeContext = useContext<ThemeContextType>(ThemeContext);
  const pageContext = useContext<RadioContextType>(RadioContext);
  const playerContext = useContext<PlayerContextType>(PlayerContext);

  function renderPlayButton() {
    const { current, playing, play, pause } = playerContext;

    return <IconButton aria-label={ playing ? 'Pause station' : 'Resume station' }
                       className={ `transition-all h-10 w-10 bg-fuchsia-600 ${ current ? '' : 'hidden' }` }
    onClick={ () => playing ? pause() : (current ? play(current) : null) }>
      {
        playing
        ? <IconPlayerPause strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
        : <IconPlayerPlay strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
      }
    </IconButton>;
  }

  function renderNavDesktop() {
    return <div className="hidden top-4 sticky sm:flex flex-col items-center gap-4">
      <div className="flex flex-col gap-y-4 bg-fuchsia-400 dark:bg-fuchsia-600 rounded-full py-4 px-2">
        <Link href="/">
          <IconButton aria-label="home page">
            <IconHome2 strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          </IconButton>
        </Link>
        <Link href="/favorites">
          <IconButton aria-label="my favorites page">
            <IconStar strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          </IconButton>
        </Link>
        <IconButton aria-label="switch dark/light mode" onClick={themeContext.toggle}>
          { themeContext.isDark
            ? <IconSun strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
            : <IconMoon strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          }
        </IconButton>
      </div>
      { renderPlayButton() }
      <Pagination count={ 35700/15 }
                  page={ pageContext.page }
                  onChange={ pageContext.setPage }
                  className="mx-auto w-min" />
    </div>;
  }

  function renderNavMobile() {
    return <AppBar className="fixed top-auto bottom-0 sm:hidden bg-fuchsia-400 dark:bg-fuchsia-600">
      <Toolbar className="flex justify-evenly">
        <Link href="/">
          <IconButton aria-label="home page">
            <IconHome2 strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          </IconButton>
        </Link>
        <Link href="/favorites">
          <IconButton aria-label="my favorites page">
            <IconStar strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          </IconButton>
        </Link>
        <IconButton aria-label="switch dark/light mode" onClick={themeContext.toggle}>
          { themeContext.isDark
            ? <IconSun strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
            : <IconMoon strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          }
        </IconButton>
        { renderPlayButton() }
      </Toolbar>
      <Pagination count={ 35700/15 }
                  page={ pageContext.page }
                  onChange={ pageContext.setPage }
                  className="mb-2 mx-auto" />
    </AppBar>;
  }

  return <div className="self-stretch relative">
    { renderNavDesktop() }
    { renderNavMobile() }
  </div>;
}

export default Navbar;