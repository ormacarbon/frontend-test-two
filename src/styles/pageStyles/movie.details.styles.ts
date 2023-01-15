import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 60rem;
    background: ${theme.main};
    justify-content: space-between;
    align-items: center;
    padding: 0 34rem;
    gap: 20px;

    ${media.lessThan('small')`
      flex-direction: column;
      margin: 0;
      justify-content: flex-start;
      padding: 0;
      gap: 0;
      height: auto;
    `}

    ${media.between('medium', 'large')`
      flex-direction: column;
      height: auto;
      padding: 0;
    `}
  `}
`

export const ImageContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13rem;

    img {
      border-radius: 8px;
      object-fit: cover;
    }

    ${media.lessThan('small')`
       margin-top: 3rem;

       img {
         width: 186px;
         height: 279px;
        }
    `}

    ${media.between('medium', 'large')`
        margin-top: 4rem;
    `}
  `}
`

export const MovieInfoContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 72%;
    height: 40rem;
    margin-top: 7.4rem;

    ${media.lessThan('small')`
       width: 100%;
       height: auto;
       margin: 2rem;
    `}

    ${media.between('medium', 'large')`
        width: 100%;
        margin: 1rem;
        padding: 3.2rem;
    `}
  `}
`

export const MovieInfo = styled.div`
  ${() => css`
    display: flex;
    height: auto;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 10px;
  `}

  h1 {
    font-size: 3rem;
  }

  ${media.lessThan('small')`
      padding: 20px;
      height: auto;

       h1 {
        font-size: 1.5rem;
       }
    `}
`

export const Details = styled.div`
  ${() => css`
    display: flex;
    height: 2rem;
    margin-top: 5px;
    gap: 8px;

    p {
      font-size: 1.5rem;
    }

    ${media.lessThan('small')`
       flex-direction: column;
       margin-top: 10px;
       justify-content: space-between;
       height: 4.5rem;

        p  {
         font-size: 1.2rem;
        }
    `}

    ${media.between('medium', 'large')`
        flex-direction: column;
    `}
  `}
`

export const Genres = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  `}
`

export const Sinopse = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: auto;
    margin-top: 1.5rem;

    h2 {
      font-size: 1.7rem;
    }

    ${media.lessThan('small')`
      margin-top: 1rem;
      width: 100%;
      padding: 20px;

      h2 {
      font-size: 1.3rem;
    }
    `}

    ${media.between('medium', 'large')`
       margin-top: 5.7rem;
       width: 100%;
    `}
  `}
`

export const TextContainer = styled.div`
  ${() => css`
    height: auto;
    margin-top: 10px;

    p {
      font-size: 1.5rem;
      line-height: 20px;
    }

    ${media.lessThan('small')`
        p  {
         font-size: 1.2rem;
         line-height: 24px;
       }
    `}

    ${media.between('medium', 'large')`
       display: flex;
       width: 100%;
       p {
        line-height: 27px;
       }
    `}
  `}
`

export const CreditsContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    width: 70%;
    gap: 10px;

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
    }

    ${media.lessThan('small')`
      width: 100%;
      column-gap: 50px;
      margin-top: 10px;
      padding: 20px;

      h3 {
      font-size: 1.2rem;
    }

      p   {
       font-size: 0.9rem;
      }
    `}

    ${media.between('medium', 'large')`
       width: 100%;
       column-gap: 80px;
       margin-top: 40px;
       
    `}
  `}
`
export const CastContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 4rem 5rem;

    h2 {
      color: ${theme.title};
    }

    ${media.lessThan('small')`
      width: 100%;
      height: 30rem;
      align-items: stretch;
      padding: 1.7rem 0.9rem;
      margin-top: 0;
    `}

    ${media.between('medium', 'large')`
       width: 100%;
       padding: 1.4rem;
       margin-top: 0;
    `}
  `}
`
export const CastTitle = styled.div`
  width: 74%;

  h2 {
    font-size: 2rem;
  }

  ${media.lessThan('small')`
     h2 {
       font-size: 1.5rem;
      }
  `}

  ${media.between('medium', 'large')`
       width: 94%;
      
    `}
`

export const Cast = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  height: auto;
  justify-content: center;
  padding: 14px;

  ${media.lessThan('small')`
    overflow-y: hidden;
    justify-content: flex-start;
    overflow-x: scroll;
 `}

  ${media.between('medium', 'large')`
    overflow-y: hidden;
    justify-content: flex-start;
    overflow-x: scroll;
  `}

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b8b8b8;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #dddddd;
    border-radius: 20px;
  }
`
