/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { darkTheme, lightTheme } from 'styles/themes/default'

type ThemeTypeDark = typeof darkTheme
type ThemeTypeLight = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType, ThemeTypeLight {}
}
