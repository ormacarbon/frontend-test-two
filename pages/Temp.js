import React from 'react'
import styled from 'styled-components';
import { WiDirectionUp } from "react-icons/wi";
import Head from 'next/head'

export default function Temp() {
  const [saoPaulo, setsaoPaulo] = React.useState(null);
  const [rioJaneiro, setrioJaneiro] = React.useState(null)
  const [minasGerais, setminasGerais] = React.useState(null)
  const [santos, setSantos] = React.useState(null)
  const [salvador, setSalvador] = React.useState(null)
  const [brasilia, setBrasilia] = React.useState(null)
  const [manaus, setManaus] = React.useState(null)
  const [curitiba, setCuritiba] = React.useState(null)
  const [fortaleza, setFortaleza] = React.useState(null)
  const [beloHorizonte, setBeloHorizonte] = React.useState(null)
  const [recife, setRecife] = React.useState(null)
  const [portoAlegre, setPortoAlegre] = React.useState(null)
  const [natal, setNatal] = React.useState(null)
  const [teresina, setTeresina] = React.useState(null)
  const [macapa, setMacapa] = React.useState(null)


  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'São Paulo';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setsaoPaulo(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Rio de Janeiro';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setrioJaneiro(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Minas Gerais';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setminasGerais(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Santos';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setSantos(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Salvador';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setSalvador(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Brasilia';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setBrasilia(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Manaus';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setManaus(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Curitiba';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setCuritiba(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Fortaleza';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setFortaleza(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Belo Horizonte';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setBeloHorizonte(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Recife';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setRecife(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Porto Alegre';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setPortoAlegre(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Natal';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setNatal(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Teresina';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setTeresina(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      const API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712';
      const city = 'Macapá';
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb26af413ea1554190bddd1b629f0712`
      );
      const data = await response.json();
      setMacapa(data);
    }
    fetchWeather();
    const interval = setInterval(() => {
        fetchWeather();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

  const ContainerItem = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  max-height: 200px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 20vw;
  @media (max-width: 768px) {
    width: 90%;
  }
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    background: rgb(100, 100, 100);
    color: white;
    padding: 10px;
    border-radius: 3px;
  }
  sup {
    font-size: 0.6rem;
    position: relative;
    left: -3px;
    top: 2px;
  }
  h4 {
    color: white;
    background: rgb(150, 150, 150);
    border-radius: 3px;
    height: 100px;
    margin-top: -19px;
  }
  p {
    color: white;
    padding-left: 20px;
    font-size: 1.258rem;
  }
  `
const Icon = styled(WiDirectionUp)`
color: blue;
width: 30px;
height: 30px;
position: relative;
  top: 8px;
  left: 9px;
  transform: rotate(180deg);
`;
const Icon2 = styled(WiDirectionUp)`
  color: red;
  width: 30px;
  height: 30px;
  position: relative;
  top: 10px;
  left: 9px;
`


  return (
    <>
    <Head>
    <title>Clima Tempo</title>
    <meta name="description" content="Página responsavel por ver o clima das cidades."></meta>
    </Head>
      <Container>
      {saoPaulo && (
        <ContainerItem>
          <h3>{saoPaulo.name}<span> {saoPaulo.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {saoPaulo.main.temp_min.toFixed(0)} °  <Icon2 /> {saoPaulo.main.temp_max.toFixed(0)} °<p>Sensação de {saoPaulo.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {rioJaneiro && (
        <ContainerItem>
          <h3>{rioJaneiro.name}<span> {rioJaneiro.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {rioJaneiro.main.temp_min.toFixed(0)} °  <Icon2 /> {rioJaneiro.main.temp_max.toFixed(0)} °<p>Sensação de {rioJaneiro.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {minasGerais && (
        <ContainerItem>
          <h3>{minasGerais.name}<span> {minasGerais.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {minasGerais.main.temp_min.toFixed(0)} °  <Icon2 /> {minasGerais.main.temp_max.toFixed(0)} °<p>Sensação de {minasGerais.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {santos && (
        <ContainerItem>
          <h3>{santos.name}<span> {santos.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {santos.main.temp_min.toFixed(0)} °  <Icon2 /> {santos.main.temp_max.toFixed(0)} °<p>Sensação de {santos.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {salvador && (
        <ContainerItem>
          <h3>{salvador.name}<span> {salvador.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {salvador.main.temp_min.toFixed(0)} °  <Icon2 /> {salvador.main.temp_max.toFixed(0)} °<p>Sensação de {salvador.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {brasilia && (
        <ContainerItem>
          <h3>{brasilia.name}<span> {brasilia.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {brasilia.main.temp_min.toFixed(0)} °  <Icon2 /> {brasilia.main.temp_max.toFixed(0)} °<p>Sensação de {brasilia.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {manaus && (
        <ContainerItem>
          <h3>{manaus.name}<span> {manaus.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {manaus.main.temp_min.toFixed(0)} °  <Icon2 /> {manaus.main.temp_max.toFixed(0)} °<p>Sensação de {manaus.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {curitiba && (
        <ContainerItem>
          <h3>{curitiba.name}<span> {curitiba.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {curitiba.main.temp_min.toFixed(0)} °  <Icon2 /> {curitiba.main.temp_max.toFixed(0)} °<p>Sensação de {curitiba.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {fortaleza && (
        <ContainerItem>
          <h3>{fortaleza.name}<span> {fortaleza.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {fortaleza.main.temp_min.toFixed(0)} °  <Icon2 /> {fortaleza.main.temp_max.toFixed(0)} °<p>Sensação de {fortaleza.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {beloHorizonte && (
        <ContainerItem>
          <h3>{beloHorizonte.name}<span> {beloHorizonte.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {beloHorizonte.main.temp_min.toFixed(0)} °  <Icon2 /> {beloHorizonte.main.temp_max.toFixed(0)} °<p>Sensação de {beloHorizonte.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {recife && (
        <ContainerItem>
          <h3>{recife.name}<span> {recife.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {recife.main.temp_min.toFixed(0)} °  <Icon2 /> {recife.main.temp_max.toFixed(0)} °<p>Sensação de {recife.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {portoAlegre && (
        <ContainerItem>
          <h3>{portoAlegre.name}<span> {portoAlegre.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {portoAlegre.main.temp_min.toFixed(0)} °  <Icon2 /> {portoAlegre.main.temp_max.toFixed(0)} °<p>Sensação de {portoAlegre.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      
      {natal && (
        <ContainerItem>
          <h3>{natal.name}<span> {natal.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {natal.main.temp_min.toFixed(0)} °  <Icon2 /> {natal.main.temp_max.toFixed(0)} °<p>Sensação de {natal.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      {teresina && (
        <ContainerItem>
          <h3>{teresina.name}<span> {teresina.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {teresina.main.temp_min.toFixed(0)} °  <Icon2 /> {teresina.main.temp_max.toFixed(0)} °<p>Sensação de {teresina.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      {macapa && (
        <ContainerItem>
          <h3>{macapa.name}<span> {macapa.main.temp.toFixed(0)} <sup>°C</sup></span></h3>
          <h4><Icon /> {macapa.main.temp_min.toFixed(0)} °  <Icon2 /> {macapa.main.temp_max.toFixed(0)} °<p>Sensação de {macapa.main.feels_like.toFixed(0)} °C</p></h4>
        </ContainerItem>
      )}
      </Container>
    </>
  );
}
