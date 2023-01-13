import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.text};
  p {
    font-size: 16px;
    font-weight: 600;
    padding-right: 20px;
  }
  select {
    width: 100px;
    height: 30px;
    font-size: 20px;
    background: ${ props => props.theme.background2 };
    color: ${ props => props.theme.text};
    padding-left: 30px;
    border-color: ${ props => props.theme.border };
    border-radius: 6px;
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
`
const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .loading {
    padding: 180px;
    background: ${ props => props.theme.background };
    color: ${ props => props.theme.text};
  }
`
const BeerCard = styled.div`
  margin: 20px;
  padding: 10px 30px;
  width: 30%;
  min-height: 40%;
  border: 1px solid ${ props => props.theme.border };
  border-radius: 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${ props => props.theme.background2 };
  color: ${ props => props.theme.text};
`
const CardImage = styled.div`
  padding: 10px 30px;
  background-color: ${props => props.theme.background};
  border: 3px ${props => props.theme.border} solid;
  border-radius: 6px;
  margin-right: 40px;
  height: min-content;
`
const CardInfo = styled.div`
  width: 70%;
  .card_name {
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .description {
    height: 125px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
`
const PageCounterContainer = styled.div`
  width: 100%;
  padding: 60px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${ props => props.theme.background };
  color: ${ props => props.theme.text};
  .page_number {
    margin: 0px 40px;
    font-size: 26px;
  }
  button {
    width: 100px;
    height: 30px;
    font-size: 20px;
    background: ${ props => props.theme.background2 };
    color: ${ props => props.theme.text};
    border-radius: 6px;
    border: solid 1px ${ props => props.theme.border };
  }
`
export default function BeersPage() {
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const router = useRouter()
                 
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [itemsPerPage, page])
  
  return (
    <main>
      <PageTitle>
        <h1>&quot;The best beers in the World&quot;</h1>
        <h1>Pick One:</h1>
      </PageTitle>
      <FilterContainer>
        <p>Items by page:</p>
        <select onChange={(e) => setItemsPerPage(e.target.value)} value={itemsPerPage}>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </FilterContainer>
      <Content>
        <CardsContainer>
          {!loading ? 
            data.map((item) => {
              return (
                <BeerCard key={item.id} onClick={() => router.push('/beer/' + item.id)}>
                  <CardImage>
                    <Image src={item.image_url} alt='beer' width={80} height={240} />
                  </CardImage>
                  <CardInfo >
                    <p className="card_name">{item.name}</p>
                    <p>{item.tagline}</p>
                    <p className="description">{item.description}</p>
                    <p>{item.first_brewed}</p>
                  </CardInfo>
                </BeerCard>
              )
            })
          : <p className="loading">Loading...</p>
          }
        </CardsContainer>
        <PageCounterContainer>
            <button onClick={() => {
              if (page === 1 ) {
                return false
              } else {
                setPage(page - 1)
              }
            }}>Prev</button>
            <p className="page_number">{page}</p>
            <button onClick={() => {
              setPage(page + 1)
            }}>Next</button>
        </PageCounterContainer>
      </Content>
    </main>
  )
}