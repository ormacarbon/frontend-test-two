import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"
import { useRouter } from 'next/router'

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
  padding-top: 20px;
  margin: 0;
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
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${props => props.margin ? "30px" : ""};
`
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .loading {
    padding: 180px;
    color: ${ props => props.theme.text};
  }
`
const BeerCard = styled.div`
  margin: 40px;
  width: 50%;
  min-height: 400px;
  background: ${ props => props.theme.background2 };
  color: ${ props => props.theme.text};
  border-radius: 6px;
  border: solid 1px ${ props => props.theme.border };
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const CardTitle = styled.div`
  text-align: center;
  color: ${ props => props.theme.text};
  margin: 20px;
  margin-top: 40px;
  font-size: 32px;
  font-weight: 700;
`
const CardTagline = styled.div`
  text-align: center;
  color: ${ props => props.theme.text};
  margin: 20px;
  font-size: 20px;
  font-weight: 500;
`
const CardCombineWith = styled.div`
  text-align: center;
  color: ${ props => props.theme.text};
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  div {
    padding: 10px 30px;
    background-color: ${props => props.theme.background};
    border: 3px ${props => props.theme.border} solid;
  }
`
const CardPairingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px 0px;
  p {
    font-size: 22px;
  }
  li {
    padding: 6px 0px;
  }
`
export default function Home() {
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  function fetchRandom() {
    setLoading(true)
    fetch(`https://api.punkapi.com/v2/beers/random`)
      .then((res) => res.json())
      .then((data) => {
        if(data === null) {
          return setData(false)
        }
        setData(data)
        setLoading(false)
      })
  }
  console.log(data)
  return (
    <div>
      <PageTitle>
        <h1>No Ideas?</h1>
        <h1>Surprise yourself with a random beer:</h1>
      </PageTitle>
      <Content>
        <ButtonContainer>
          <button onClick={fetchRandom}>Random</button>
        </ButtonContainer>
        <CardContainer>
          <BeerCard>
            {data ? 
              <div>
                <CardTitle>{data[0].name}</CardTitle>
                <ImageContainer>
                  <div>
                    {data[0].image_url && <Image src={data[0].image_url} alt='beer' width={80} height={240} />}
                  </div>
                </ImageContainer>
                <CardTagline>{data[0].tagline}</CardTagline>
                <CardCombineWith>Combine With:</CardCombineWith>
                <CardPairingContainer>
                  <ul>{data[0].food_pairing.map((item, index) => {return (<li key={index}>{item}</li>)})}</ul>
                </CardPairingContainer>
                <ButtonContainer margin>
                  <button onClick={() => router.push('/beer/' + data[0].id)}>See More</button>
                </ButtonContainer>
              </div> 
            : <p className="loading">Click Random to pick a new flavor:</p>}
          </BeerCard>
        </CardContainer>

      </Content>
    </div>
  )
}
