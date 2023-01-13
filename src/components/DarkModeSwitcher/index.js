import * as C from './styled';

import { useDarkModeContext } from '../../contexts/DarkMode';

import { SwitcherMoon } from '../Svgs/SwitcherMoon';
import { SwitcherSum } from '../Svgs/SwitcherSum';

export const DarkModeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <C.Container onClick={toggleDarkMode}>
      <C.Switcher marginLeft={darkMode ? `${45}px` : 0}></C.Switcher>
      <SwitcherMoon color="#F1C40F" />
      <SwitcherSum color="#F39C12" />
    </C.Container>
  );
};
