import { useContext, useEffect, useRef } from 'react';
import * as Styled from './styles';

import SunIcon from '../../Assets/sun.svg';
import MoonIcon from '../../Assets/moon.svg';
import { MyThemeContext } from '../../context/MyThemeContext';

export default function ChangeTheme() {
  const { setTheme } = useContext(MyThemeContext);
  const inputTheme = useRef(null);

  useEffect(() => {
    const typeTheme = localStorage.getItem('theme');
    inputTheme.current.checked = typeTheme !== 'light';
  },[])

  return (
    <Styled.Container>
      <input ref={inputTheme} onChange={() => setTheme()} type="checkbox" className="checkbox" id="chk"/>
      <label className="label" htmlFor="chk">
        <SunIcon className="fas fa-sun"/>
        <MoonIcon className="fas fa-moon"/>
        <div className="ball"></div>
      </label>
    </Styled.Container>
  )
}
