import axios from "axios"

export default async function handler(req, res) {
  const { latitude, longitude } = req.query
  const response = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_APPID}`)

  res.status(response.status).json(response.data)
}
