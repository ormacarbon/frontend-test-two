import styled from "styled-components";
import wave from "../assets/images/wave.svg";

export const Container = styled.div`
  align-items: center;
  background-image: url(${wave?.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LoginContainer = styled.div`
  background: #F5F5F5;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  height: 80%;
  margin: auto;
  width: 80%;
`;

export const InitialWeatherContainer = styled.div`
  align-items: center;
  display: flex;
  color: #2b4ead;
  justify-content: center;
  padding-top: 6rem;
`;

export const InitialWeather = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InitialWeatherLocation = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`

export const TempWeather = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  img {
    height: 100px;
    width: 100px;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      color: #727272;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

export const Login = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-top: 6rem;
    width: 80%;

    h1 {
      color: #2b4ead;
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 2rem 0;
      text-align: start;
    }
  
    span {
      color: #2b4ead;
      font-size: 2.5rem;
      font-weight: 400;
    }
  
    button {
      align-items: center;
      border: none;
      border-radius: 10px;
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
      display: flex;
      height: 3rem;
      justify-content: space-between;
      padding: 0 1rem;

      p {
        color: #727272;
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        width: 100%;
      }
    }
  }
`;

export const SpanOr = styled.span`
  color: #727272 !important;
  font-size: 1.5rem !important;
  margin-top: 3rem;
  text-align: center;
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    height: 90%;
    transform: scaleX(-1);
    width: 90%;
  }
`;

export const LoginForm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 600;
    width: 80%;

    input {
      border: none;
      border-radius: 10px;
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
      height: 3rem;
      margin: 1rem 0;
      outline: none;
      padding: 0 1rem;
    }
  }

  label:first-child {
    margin: 3rem 0 1rem 0;
  }

  button {
    align-items: center;
    background: #2b4ead;
    border: none;
    border-radius: 10px;
    color: #F5F5F5;
    display: flex;
    height: 3rem;
    justify-content: center;
    margin-top: 1.5rem;
    position: relative;
    left: 0;
    width: 80%;
  }
`