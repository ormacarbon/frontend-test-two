import { AppBar, IconButton, Pagination, Toolbar } from '@mui/material';
import { IconHome2, IconMoon, IconStar, IconSun } from '@tabler/icons';
import React, { useContext } from 'react';
import { ThemeContextType, ThemeContext } from '../../contexts/Theme/Theme.context';
import RadioContext, { RadioContextType } from '../../contexts/Radio/Radio.context';

function Navbar() {
  const themeContext = useContext<ThemeContextType>(ThemeContext);
  const pageContext = useContext<RadioContextType>(RadioContext);

  function renderNavDesktop() {
    return <div className="hidden top-4 sticky sm:flex flex-col">
      <div className="flex flex-col gap-y-4 bg-fuchsia-400 dark:bg-fuchsia-600 rounded-full py-4 px-2">
        <IconButton aria-label="home page">
          <IconHome2 strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
        </IconButton>
        <IconButton aria-label="my favorites page">
          <IconStar strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
        </IconButton>
        <IconButton aria-label="switch dark/light mode" onClick={themeContext.toggle}>
          { themeContext.isDark
            ? <IconSun strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
            : <IconMoon strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          }
        </IconButton>
      </div>
      <Pagination count={ 35700/15 }
                  page={ pageContext.page }
                  onChange={ pageContext.setPage }
                  className="my-6 mx-auto w-min" />
    </div>;
  }

  function renderNavMobile() {
    return <AppBar className="fixed top-auto bottom-0 sm:hidden bg-fuchsia-400 dark:bg-fuchsia-600">
      <Toolbar className="flex justify-evenly">
        <IconButton aria-label="home page">
          <IconHome2 strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
        </IconButton>
        <IconButton aria-label="my favorites page">
          <IconStar strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
        </IconButton>
        <IconButton aria-label="switch dark/light mode" onClick={themeContext.toggle}>
          { themeContext.isDark
            ? <IconSun strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
            : <IconMoon strokeWidth={1} className="text-gray-800 dark:text-fuchsia-200"/>
          }
        </IconButton>
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