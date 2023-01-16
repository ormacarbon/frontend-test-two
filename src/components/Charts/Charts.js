import React, { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";

const Charts = ({ elements, type }) => {
  const [options] = useState({
    xaxis: {
      categories: Object.keys(elements),
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    markers: {
      size: 6,
    },
  });

  const [series] = useState([
    {
      name: Object.keys(elements),
      data: [
        elements.co,
        elements.nh3,
        elements.no,
        elements.no2,
        elements.o3,
        elements.pm2_5,
        elements.pm10,
        elements.so2,
      ],
    },
  ]);

  return (
    <div className="chart">
      <Chart options={options} series={series} type={type} width="550" />
    </div>
  );
};

export default Charts;
