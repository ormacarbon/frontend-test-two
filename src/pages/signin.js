import styled from "styled-components";
import { globalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
import login from "../assets/images/login.svg";
import google from "../assets/images/google.svg";
import { 
  Container,
  LoginContainer,
  InitialWeatherContainer,
  InitialWeather,
  InitialWeatherLocation,
  TempWeather,
  Login,
  SpanOr,
  ImageContainer,
  LoginForm
} from "../styles/signin";

export default function SignIn() {
  const { currentWeather, weather } = useContext(globalContext);

  useEffect(() => {
    currentWeather('São Paulo');
  }, []);

  return (
    <Container>
      <LoginContainer>
        <InitialWeatherContainer>
          <InitialWeather>
            <InitialWeatherLocation>{weather.location?.name}, {weather.location?.country}</InitialWeatherLocation>
            <TempWeather>
              <img
                src={weather.current?.condition?.icon}
                alt={weather.current?.condition?.text}
              />
              <div>
                <h3>{weather.current?.temp_c}°C</h3>
                <p>{weather.current?.condition?.text}</p>
              </div>
            </TempWeather>
          </InitialWeather>
        </InitialWeatherContainer>
        <Login>
          <div>
            <h1>Sign <span>in</span></h1>
            <button>
              <img
                src={google?.src}
                alt="Google"
                width={25}
                height={25}
              />
              <p>Login with google account</p>
            </button>
            <SpanOr>or</SpanOr>
          </div>
        </Login>
        <ImageContainer>
          <img
            src={login?.src}
            alt="Login"
          />
        </ImageContainer>
        <LoginForm>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
            />
          </label>
          <button>
            Sign in
          </button>
        </LoginForm>
      </LoginContainer>
    </Container>
  )
}


