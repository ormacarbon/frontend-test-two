import Image from "next/image";
import styled from "styled-components";

const About_style = styled.div`
    text-align: center;
    padding-top: 100px;
`
const Paragrafo = styled.p`
    max-width: 500px;
    margin: 0 auto 1.5em;
    line-height: 1.4em;
  
`
export default function About() {
    return (
            <About_style>
                <Paragrafo>I offer solutions both for you to take your first step on the web, and to help revert or redirect the current approach of your business on the net.</Paragrafo>
                <Image src='/images/anime.webp' layout="intrinsic" width='600' height='500' sizes="320 640 750" alt='animes'/> 
            </About_style>
        )
}   