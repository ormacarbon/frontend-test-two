import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 1.7rem;
  background: ${(props) => props.theme['purple-600']};
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: auto;
  max-height: 30rem;
  margin-top: 10px;
`

export const Title = styled.h1``

export const Details = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4.5rem;

  p {
    font-size: 1.2rem;
  }
`

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const Sinopse = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 2rem;
`

export const TextContainer = styled.div`
  height: auto;
  margin-top: 10px;
`

export const CreditsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
  gap: 10px;
`
export const CastContainer = styled.div`
  display: flex;
  height: 30rem;
  flex-direction: column;
  padding: 1.7rem;

  h2 {
    color: ${(props) => props.theme['gray-900']};
  }
`
export const Cast = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 16px;
  height: auto;
  margin-top: 10px;
  padding: 14px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #dddddd;
    border-radius: 20px;
  }
`
