import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'

import Image from 'next/image'
import {GlobalFooter} from '../styles/PagesStyles'

export function Footer() {

    const context = useContext(Globalcontext)
    const { darkMode } = context

    return (
        <>
            <GlobalFooter darkMode={darkMode} >
                <a href='https://github.com/LucasCalabria7' target="_blank" rel="noopener noreferrer" ><Image src='/images/github.svg' width='40' height='40' alt='footer-logo' /></a>
                <a href='https://www.instagram.com/lucas_calabria/' target="_blank" rel="noopener noreferrer" ><Image src='/images/instagram.svg' width='40' height='40' alt='footer-logo' /></a>
                <a href='https://www.linkedin.com/in/lucascalabria7/' target="_blank" rel="noopener noreferrer" ><Image src='/images/linkedin.svg' width='40' height='40' alt='footer-logo' /></a>
            </GlobalFooter>
        </>
    )
}