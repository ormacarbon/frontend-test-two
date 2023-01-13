import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components';

const PageTitle = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.text};
  h1 {
    width: 100%;
    text-align: center;
    margin: 10px;
  }
`
const Content = styled.div`
  padding: 40px 0px;
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.text};
  h1 {
    margin: 0;
  }
  button {
    width: 140px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    background: ${ props => props.theme.background2 };
    color: ${ props => props.theme.text};
    border-radius: 6px;
    border: solid 1px ${ props => props.theme.border };
  }
`
const BeerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  padding: 60px;
  padding-top: 0;
  background: ${ props => props.theme.background2 };
  color: ${ props => props.theme.text};
  border: 1px solid ${ props => props.theme.border };
  border-radius: 6px;
`
const BeerName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${ props => props.theme.text};
  font-size: 32px;
  font-weight: 600;
`
const ImageContainer = styled.div`
  width: max-content;
  height: min-content;
  display: flex;
  padding: 10px 30px;
  background-color: ${props => props.theme.background};
  border: 3px ${props => props.theme.border} solid;
`
const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 60px;
  font-size: 20px;
`
const SingleInfoContainer = styled.div`
  width: 100%;
  .label {
    font-size: 18px;
    text-decoration: underline;
  }
  .info {
    font-weight: 500;
    margin-left: 20px;
  }
`
const MoreInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 0px 100px;
  .more_info {
    width: fit-content;
  }
  .short_info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 140px;
  }
`
const Loading = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 180px;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.text};
`

export default function BeerPage()  {
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [id])

  console.log(data)

  if (loading) return <Loading>loading</Loading>

  return (
    <div>
      <PageTitle>
        <h1>Beer Info:</h1>
      </PageTitle>
      <Content>
        <BeerCard>
          {data[0] ?
          <>
            <BeerName><p>{data[0].name}</p></BeerName>
          <ImageContainer>
            {data[0].image_url && <Image src={data[0].image_url} alt='beer' width={160} height={480} />}
          </ImageContainer>
          <InfoContainer>
            <SingleInfoContainer>
              <p className='label'>Tag Line:</p>
              <p className='info'>{data[0].tagline}</p>
            </SingleInfoContainer>
            <SingleInfoContainer>
              <p className='label'>Food Pairing:</p>
              <p className='info'><ul>{data[0].food_pairing.map((item, index) => {return (<li key={index}>{item}</li>)})}</ul></p>
            </SingleInfoContainer>
            <SingleInfoContainer>
              <p className='label'>Description:</p>
              <p className='info'>{data[0].description}</p>
            </SingleInfoContainer>
          </InfoContainer>
          <MoreInfoContainer>
            <SingleInfoContainer >
              <p className='label'>Breewer Tips:</p>
              <p className='info'>{data[0].brewers_tips}</p>
            </SingleInfoContainer>
            <div className='short_info'>
              <SingleInfoContainer className='more_info'>
                <p className='label'>ABV:</p>
                <p className='info'>{data[0].abv}</p>
              </SingleInfoContainer>
              <SingleInfoContainer className='more_info'>
                <p className='label'>EBC:</p>
                <p className='info'>{data[0].ebc}</p>
              </SingleInfoContainer>
              <SingleInfoContainer className='more_info'>
                <p className='label'>PH:</p>
                <p className='info'>{data[0].ph}</p>
              </SingleInfoContainer>
            </div>
          </MoreInfoContainer>
          </> : null} 
        </BeerCard>
      </Content>
    </div>
  )
}
