import * as C from './style'
import bannerImage from '../../assets/banner-img.png'
import Image from 'next/image'


const Banner = ({ data }) => {
  const date = new Date()
  return (
    <C.ContainerBanner>
      <Image className='bannerImage' src={bannerImage} />
      <C.InfosBanner>
        <div className='container-infos'>
          {data?.weather.map(weather => (
            <div key={weather.id} className='weather-infos'>
              <h1>{weather.main}</h1>
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
    </C.ContainerBanner>
  )
}

export default Banner