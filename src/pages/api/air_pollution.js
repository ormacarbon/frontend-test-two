import axios from "axios";

export default async function handler(req, res) {
  const { latitude, longitude, ...query } = req.query;

  const response = await axios(
    `http://api.openweathermap.org/data/2.5/air_pollution`,
    {
      params: {
        lat: latitude,
        lon: longitude,
        appid: process.env.OPENWEATHERMAP_APPID,
        ...query,
      },
    }
  );

  res.status(response.status).json(response.data);
}
