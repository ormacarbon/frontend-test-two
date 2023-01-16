import Image from "next/image";
import styled from "styled-components";

const About_style = styled.div`
    text-align: center;
`
const H1 = styled.h1`
    font-size: 2em;
    margin-bottom: 1em;
  
`
const Paragrafo = styled.p`
    max-width: 500px;
    margin: 0 auto 1.5em;
    line-height: 1.4em;
  
`
export default function About() {
    return (
            <About_style>
                <H1>About the project</H1>
                <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ratione hic nostrum veniam, laudantium dolore vitae nam magni in et consequatur quam debitis sapiente aliquam! Iste maxime in optio fuga!</Paragrafo>
                <Image src='/images/solgaleo.png' layout="intrinsic" width='500' height='500' sizes="320 640 750" alt='Solgaleo'/> 
            </About_style>
        )
}   