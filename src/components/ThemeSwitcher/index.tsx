import { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';


export function ThemeSwitcher({onChangeTheme}) {
  const { title, colors } = useContext(ThemeContext)


  return (
    <Switch
    onChange={onChangeTheme}
    checked={title === 'light'}
    height={16}
    width={40}
    checkedIcon={false}
    uncheckedIcon={false}
    handleDiameter={22}
    offColor={colors.offColor}
    onColor={colors.offColor}

 />
  )
}