import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import * as C from './style'
import useLocation from '../../hooks/useLocation'

const AirPolluition = () => {
  const { latitude, longitude } = useLocation();
  const { data, error, loading } = useFetch(`/api/air_pollution?latitude=${latitude}&longitude=${longitude}`)


  return (
    <C.ContainerAirPolluition>
      {data?.list?.map(elements => (
        <>
          <h1>CO: {elements.components.co}</h1>
          <h1>NH3: {elements.components.nh3}</h1>
          <h1>NO: {elements.components.no}</h1>
          <h1>NO2: {elements.components.no2}</h1>
          <h1>O3: {elements.components.o3}</h1>
          <h1>pm2_5: {elements.components.pm2_5}</h1>
          <h1>pm10: {elements.components.pm10}</h1>
          <h1>so2: {elements.components.so2}</h1>
        </>
      ))}
    </C.ContainerAirPolluition>
  )
}

export default AirPolluition