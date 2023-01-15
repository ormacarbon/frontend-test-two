import { createContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import {combineTheme, light, dark} from '../styles/theme';

interface GlobalTheme {
  setTheme: () => void;
}

export const MyThemeContext = createContext<GlobalTheme>({setTheme: () => {}});

