import styled from 'styled-components';
import Link from 'next/link'
import Image from 'next/image'
import foto from './Assets/kelly-sikkema-_whs7FPfkwQ-unsplash.jpg'
import foto2 from './Assets/jonas-jaeken-6FCNkB_zM-o-unsplash (1).jpg'
import foto3 from './Assets/mikael-kristenson-EXuKQaf3Ei8-unsplash.jpg'
import Head from 'next/head'

const CenterDiv = styled.div`
  align-self: center;
  justify-self: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CardItem1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 25px;
  padding: 7px;
  border-radius: 10px;
  width: 15vw;
  height: 300px;
  font-size: 1.5rem;
  font-weight: bold;
  background-image: url('./Assets/kelly-sikkema-_whs7FPfkwQ-unsplash.jpg');
  position: relative;
  background-size: 100% 100%;
  transition: 0.425s;
  cursor: pointer;
  img {
    border-radius: 25px;
    max-width: 25vw;
    height: 300px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }

  &:hover::before {
    content: "Fatos Históricos";
    color: White;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    line-height: 2.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    width: 77%;
    height: 100%;
    img {
      max-width: 100%;
    }
  }
`;

const CardItem2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 25px;
  padding: 7px;
  border-radius: 10px;
  width: 15vw;
  height: 300px;
  font-size: 1.5rem;
  font-weight: bold;
  background-image: url('./Assets/jonas-jaeken-6FCNkB_zM-o-unsplash (1).jpg');
  position: relative;
  background-size: 100% 100%;
  transition: 0.425s;
  cursor: pointer;
  img {
    border-radius: 25px;
    max-width: 25vw;
    height: 300px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }

  &:hover::before {
    content: "Tempo";
    color: White;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    line-height: 2.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    width: 77%;
    height: 100%;
    img {
      max-width: 100%;
    }
  }
`;
const CardItem3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 25px;
  padding: 7px;
  border-radius: 10px;
  width: 15vw;
  height: 300px;
  font-size: 1.5rem;
  font-weight: bold;
  background-image: url('./Assets/mikael-kristenson-EXuKQaf3Ei8-unsplash.jpg');
  position: relative;
  background-size: 100% 100%;
  transition: 0.425s;
  cursor: pointer;
  img {
    border-radius: 25px;
    max-width: 25vw;
    height: 300px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }

  &:hover::before {
    content: "Piada";
    color: White;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    line-height: 2.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    width: 77%;
    height: 100%;
    img {
      max-width: 100%;
    }
  }
`;


export default function Card() {
  function handleClick() {
    window.location.href = "/Temp";
  }

  function handleClick2() {
    window.location.href = "/News";
  }

  function handleClick3() {
    window.location.href = "/Joke"
  }

return (
  <>
    <Head>
      <title>Página Principal</title>
    <meta name="description" content="Pagina Principal com o conteudo"></meta>
    </Head>
    <CardContainer>
    <CenterDiv>
      <CardItem1 onClick={handleClick2}>
      
          <Link href="/News"></Link>
      
      <Image src={foto} alt='teste' width='200' height='20' />
      </CardItem1>
    </CenterDiv>
    <CenterDiv>
      <CardItem2 onClick={handleClick}>
      
          <Link href="/Temp"></Link>
      
      <Image src={foto2} alt='teste' width='200' height='20' />
      </CardItem2>
    </CenterDiv>
    <CenterDiv>
      <CardItem3 onClick={handleClick3}>
      
          <Link href="/Joke"></Link>
      
      <Image src={foto3} alt='teste' width='200' height='20' />
      </CardItem3>
    </CenterDiv>
  </CardContainer>
  </>
)

}