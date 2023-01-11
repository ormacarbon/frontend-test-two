import { ThemeSwitcher } from "../ThemeSwitcher";


export function Header({onChangeTheme}) {
  return (
    <>
      <ThemeSwitcher onChangeTheme={onChangeTheme}/>
    </>
  )
}