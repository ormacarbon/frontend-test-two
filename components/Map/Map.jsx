import React, { useContext } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { Context } from "../../utility/context";

import allStates from "./allstates.json";
import useFetch from "../../utility/useFetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const MapChart = () => {
  const { data, loading, error, request } = useFetch();
  const { currentPageData } = useContext(Context);
  // console.log(currentPageData);
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {console.log(geographies)}
            {geographies.map((geo) =>
              data ? (
                loading ? (
                  <p>Loading...</p>
                ) : (
                  currentPageData.map((brewery) =>
                    geo.properties.name === brewery.state ? (
                      <Geography
                        key={geo.rsmKey}
                        stroke="red"
                        geography={geo}
                        fill="#DDD"
                      />
                    ) : (
                      <Geography
                        key={geo.rsmKey}
                        stroke="#FFF"
                        geography={geo}
                        fill="#DDD"
                      />
                    )
                  )
                )
              ) : (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  fill="#DDD"
                />
              )
            )}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>

      {/* <Marker coordinates={[41.78575824052096, -101.92046997552498]}>
        <g
          fill="none"
          stroke="#FF5533"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-12, -24)"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </g>
      </Marker> */}

      {/* {data ? (
        loading ? (
          <p>Loading...</p>
        ) : (
          currentPageData.map((brewery) => (
            <Marker
              key={brewery.id}
              coordinates={[41.78575824052096, -101.92046997552498]}
            >
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
            </Marker>
          ))
        )
      ) : null} */}
    </ComposableMap>
  );
};

export default MapChart;
