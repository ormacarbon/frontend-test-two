/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

import { darkMode } from './theme'

export type Theme = typeof darkMode

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
