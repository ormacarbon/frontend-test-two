import React, { useContext, useEffect, useState } from 'react'
import { Footer, InputSearchDiv, SideBar, SideBarContainer, WeatherSideBarStyle } from './style'
import search from '../../assets/images/search.svg'
import { globalContext } from '../../context/globalContext';
import humidity from '../../assets/images/humidity.svg';
import logout from '../../assets/images/logout.svg';
import { useRouter } from 'next/router';

export default function Side() {
  const { weather, currentWeather, city, setCity, selectCity, weekDay, hour } = useContext(globalContext);

  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem('user');
    router.push('/signin');
  }

  useEffect(() => {
    currentWeather(city);
  }, []);

  return (
    <SideBar>
      <SideBarContainer>
        <InputSearchDiv>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => setCity(e.target.value)}
            name="search"
            value={city}
          />
          <button
            type="button"
            onClick={() => selectCity(city)}
          >
            <img src={search?.src} alt="search" />
          </button>
        </InputSearchDiv>
        <WeatherSideBarStyle>
          <img
            className='weather-icon'
            src={weather.current?.condition?.icon}
            alt={weather.current?.condition?.text}
          />
          <div>
            <h3>{weather.current?.temp_c} °C</h3>
            <p>{weekDay}, {hour}</p>
            <div>
              <img
                src={weather.current?.condition?.icon}
                alt={weather.current?.condition?.text}
              />
              <p>{ weather.current?.condition?.text }</p>
            </div>
            <div>
              <img
                src={ humidity?.src }
                alt="Humidity"
              />
              <p className='humidity'>{ weather.current?.humidity }%</p>
            </div>
          </div>
          <Footer>
            <img
              src={logout?.src}
              alt="Logout"
              onClick={() => logoutUser()}
            />
            <p>Logout</p>
          </Footer>
        </WeatherSideBarStyle>
      </SideBarContainer>
    </SideBar>
  )
}
