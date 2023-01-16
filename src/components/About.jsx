import { X } from 'phosphor-react';
import { HeadingLine } from './HeadingLine';
import styled from 'styled-components';
import Image from 'next/image';

const AboutStyles = styled.div`
  
  background-color: ${({ theme }) => theme.aboutBg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: absolute;
  top: 14%;
  left: 25%;
  height: 45rem;
  width: 40rem;
  padding-top: 1rem;
  text-align: center;
  z-index: 999;

  img {
    border-radius: 50%;
    margin: 0.5rem;
  }

  p {
    
  }

  .about-text {
    margin: 2rem;
    padding-bottom: 0.5rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    
    height: 60rem;
    width: 75vw;
    left: 10%;
    
  }

`
const CloseToggleBtnStyles = styled.button`

left: 10px;
background: transparent;
border: none;
color: ${({ theme }) => theme.text};
display: flex;
font-size: 2rem;
margin-left: 1rem;
padding: .25rem;
place-items: center;

cursor: pointer; 
`

export function About({ handleAboutToggle }) {
  return(
    <AboutStyles>
      <CloseToggleBtnStyles onClick={handleAboutToggle}>
        <X size={25}/>
      </CloseToggleBtnStyles>
      <h1>About me</h1>
      <HeadingLine />
      <div className="about-text">
        <p>Hi, my name is André. I am 38, and I live in Porto Alegre, Brazil.
          I&apos;ve done many things in life. From 2002 to 2011 I worked as a Biologist 
          and as an English Teacher.
        </p>
        <br />
        <p> My biggest passions are programming and guitar playing. I am currently dedicated
          to learning Javascript, React and MongoDB. I have a band called Ficta, you can find 
          us in Spotify. 😀
        </p>
        <br />
        <p>I joined Second Life in 2011.
          From 2012 to 2016, i learned scripting and in-world prims creation. 
          I&apos;ve been a bit away from the metaverse until 2020 Pandemics.
          In my return, I met my fiancée in-game and now we share a life together.
        </p> 
      </div>
      <Image 
        src="/assets/img/andre.jpg" 
        alt="My real-life photo"
        height={100}
        width={100}
      />
      <Image 
        src="/assets/img/andrek.jpg" 
        alt="My real-life photo"
        height={100}
        width={100}
      />
       <p>This is me in both worlds!</p>
    </AboutStyles>
    
  )
}
