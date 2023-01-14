import React, { useContext, useEffect } from 'react'
import { Button, WeatherMainContainer, WeatherMainStyle } from './style'
import WeatherCard from '../WeatherCard/weatherCard';
import { globalContext } from '../../context/globalContext';
import { CardRender } from './style';
import TodayHighlights from '../TodayHighlights/TodayHighlights';

export default function WeatherMain() {
  const { forecast, selectCity } = useContext(globalContext);
  
  useEffect(() => {
    selectCity('São Paulo');
  }, []);

  return (
    <WeatherMainStyle>
      <WeatherMainContainer>
        <div>
          <Button
          >
            Today
          </Button>
          <Button
          >
            Week
          </Button>
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
