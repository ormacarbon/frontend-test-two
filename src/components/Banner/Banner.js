import * as C from './style'
import Image from 'next/image'

const Banner = ({ data }) => {
  const date = new Date()

  return (
    <C.ContainerBanner>
  
      <C.InfosBanner>
        <div className='container-infos'>
          {data?.weather.map(weather => (
            <div key={weather.id} className='weather-infos'>
              <h1>{data?.name}</h1>
              <h1>{weather.description}</h1>
              <p>{date.toDateString()}</p>
            </div>
            ))}
          </div> 
          <div className='wind'>
            <p>Temperature: {data?.main?.temp}</p>
            <p>Min: {data?.main?.temp_min}</p>
            <p>Max: {data?.main?.temp_max}</p>
          </div>
      </C.InfosBanner>
      <C.InfosTemp>
          <h3>Wind Speed: {data?.wind?.speed}</h3>
          <h3>Wind Deg: {data?.wind?.deg}</h3>
          <h3>Wind Gust: {data?.wind?.gust}</h3>
          
      </C.InfosTemp>
      
    </C.ContainerBanner>
  )
}

export default Banner