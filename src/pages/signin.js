import { globalContext } from "../context/globalContext";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
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
  ImageContainer,
  LoginForm
} from "../styles/signin";

export default function SignIn() {
  const { currentWeather, weather, user, setUser, validateUserFields } = useContext(globalContext);
  const router = useRouter();

  const setUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    router.push("/dashboard");
  }

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
              onChange={ (e) => setUser({ ...user, email: e.target.value }) }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              onChange={ (e) => setUser({ ...user, password: e.target.value }) }
            />
          </label>
          <button
            type="button"
            disabled={ !validateUserFields(user.email, user.password) }
            onClick={ () => setUserToLocalStorage(user) }
          >
            Sign in
          </button>
        </LoginForm>
      </LoginContainer>
    </Container>
  )
}


