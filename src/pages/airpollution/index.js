import { useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import * as C from "./style";
import useLocation from "../../hooks/useLocation";
import Loading from "../../components/Loading/Loading";
import { ThemeContext } from "../../contexts/themeContext";
import Title from "../../components/Title/Title";
import Charts from "../../components/Charts/Charts";

const AirPolluition = () => {
  const { theme } = useContext(ThemeContext);
  const { latitude, longitude } = useLocation();
  const { data, error, loading } = useFetch(
    `/api/air_pollution?latitude=${latitude}&longitude=${longitude}`
  );

  return (
    <C.ContainerAirPolluition
      style={{ background: theme.background, color: theme.text }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title text="Air pollution data" />
          {data?.list?.map((elements, index) => (
            <div key={index} className="infosPolluition">
              <Charts elements={elements.components} type="line" width="500" />
              <Charts elements={elements.components} type="area" width="500" />
              {/* <h1>CO: {elements.components.co}</h1>
              <h1>NH3: {elements.components.nh3}</h1>
              <h1>NO: {elements.components.no}</h1>
              <h1>NO2: {elements.components.no2}</h1>
              <h1>O3: {elements.components.o3}</h1>
              <h1>pm2_5: {elements.components.pm2_5}</h1>
              <h1>pm10: {elements.components.pm10}</h1>
              <h1>so2: {elements.components.so2}</h1> */}
            </div>
          ))}
        </>
      )}
    </C.ContainerAirPolluition>
  );
};

export default AirPolluition;
