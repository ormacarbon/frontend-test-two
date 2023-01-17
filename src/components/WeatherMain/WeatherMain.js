import React, { useContext, useEffect, useState } from 'react'
import { User, WeatherMainContainer, WeatherMainStyle } from './style'
import WeatherCard from '../WeatherCard/weatherCard';
import { globalContext } from '../../context/globalContext';
import { CardRender } from './style';
import TodayHighlights from '../TodayHighlights/TodayHighlights';

export default function WeatherMain() {
  const { forecast, selectCity } = useContext(globalContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    selectCity('São Paulo');
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <WeatherMainStyle>
      <WeatherMainContainer>
        <div>
          <User
          >
            { user.email }
          </User>
      </div>
      <CardRender>
        { forecast.forecast?.forecastday[0]?.hour?.map(({ time, temp_c, condition }) => (
          <WeatherCard
            key={ time }
            hour={ time }
            icon={ condition.icon }
            text={ condition.text }
            temperature={ temp_c }
          />
        )) }
      </CardRender>
      <TodayHighlights />
      </WeatherMainContainer>
    </WeatherMainStyle>
  )
}
