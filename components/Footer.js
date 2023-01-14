import Image from 'next/image'
import {GlobalFooter} from '../styles/PagesStyles'

export function Footer() {
    return (
        <>
            <GlobalFooter>
                <a href='https://github.com/LucasCalabria7' target="_blank" ><Image src='/images/github.svg' width='40' height='40' /></a>
                <a href='https://www.instagram.com/lucas_calabria/' target="_blank" ><Image src='/images/instagram.svg' width='40' height='40' /></a>
                <a href='https://www.linkedin.com/in/lucascalabria7/' target="_blank" ><Image src='/images/linkedin.svg' width='40' height='40' /></a>
            </GlobalFooter>
        </>
    )
}