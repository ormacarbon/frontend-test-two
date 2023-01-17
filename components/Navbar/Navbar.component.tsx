import { AppBar, IconButton, Toolbar } from '@mui/material';
import { IconHome2, IconMoon, IconStar, IconSun } from '@tabler/icons';
import { useContext } from 'react';
import { ThemeContextType, ThemeContext } from '../../contexts/Theme/Theme.context';

function Navbar() {
  const themeContext = useContext<ThemeContextType>(ThemeContext);
  function renderNavDesktop() {
    return <div className={`hidden sm:flex flex-col gap-y-4 bg-fuchsia-600 dark:bg-fuchsia-200 rounded-full py-4 px-2`}>
      <IconButton aria-label="home page">
        <IconHome2 strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
      </IconButton>
      <IconButton aria-label="my favorites page">
        <IconStar strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
      </IconButton>
      <IconButton aria-label="switch dark/light mode" onClick={themeContext.toggle}>
        { themeContext.isDark
          ? <IconSun strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
          : <IconMoon strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
        }
      </IconButton>
    </div>;
  }

  function renderNavMobile() {
    return <AppBar className="fixed top-auto bottom-0 sm:hidden bg-fuchsia-600 dark:bg-fuchsia-200">
      <Toolbar className="flex justify-evenly">
        <IconButton aria-label="home page">
          <IconHome2 strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
        </IconButton>
        <IconButton aria-label="my favorites page">
          <IconStar strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
        </IconButton>
        <IconButton aria-label="switch dark/light mode" onClick={themeContext.toggle}>
          { themeContext.isDark
            ? <IconSun strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
            : <IconMoon strokeWidth={1} className="text-fuchsia-300 dark:text-fuchsia-800"/>
          }
        </IconButton>
      </Toolbar>
    </AppBar>;
  }

  return <div>
    { renderNavDesktop() }
    { renderNavMobile() }
  </div>;
}

export default Navbar;