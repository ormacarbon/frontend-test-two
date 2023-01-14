import { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';

export function SwitchTheme({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
      className='react-switch'
      onChange={ toggleTheme }
      checked={ title === 'dark' }
      checkedIcon={false}
      uncheckedIcon={false}
      height={15}
      width={50}
      handleDiameter={25}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.secondary}
    />
  )
}
