import { ThemeProvider } from "styled-components"

const themeColors = {
    white: '#fff',
    gray: '#cbcad2',
    black: '#252525',
    pink: '#fa45a9',
    purple: '#014fb0',
    primaryHover: '#c1277a',
    lightGray: '#e7e7e7',
    lightBlack: "#444444",
}

const themes = {
    light: {
        ...themeColors,
        primary: '#e22b8d',
        secondary: '#f8fafc',
        isDark: false,
        hoverMenu: "#e9e9e9"
    }, 
    dark : {
        ...themeColors,
        primary: '#e22b8d',
        secondary: '#161616',
        isDark: true,
        hoverMenu: "#393939"
    }
}

export default function Theme({ children, theme }){
    return <ThemeProvider theme={themes[theme]}> { children }</ThemeProvider>
}