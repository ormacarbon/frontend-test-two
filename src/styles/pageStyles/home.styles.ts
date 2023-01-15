import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`

export const CardContainer = styled.div`
  ${() => css`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    ${media.lessThan('small')`
      margin-top: 10px;
    `}
  `}
`

export const CardWrap = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 60%;
    height: 100%;
    gap: 7rem;
    margin: 10px;

    a {
      text-decoration: none;
    }

    ${media.lessThan('small')`
      gap: 1rem;
      width: 100%;
    `}

    ${media.between('medium', 'large')`
      gap: 1rem;
      width: 100%;
  `}
  `}
`
export const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`
