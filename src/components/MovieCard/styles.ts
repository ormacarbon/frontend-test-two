import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 15.2rem;
    height: auto;

    img {
      border-radius: 4px;
    }

    ${media.lessThan('small')`
      width: 11.5rem;
    `}
  `}
`
export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;

    ${media.between('medium', 'large')`
      padding: 0;
      width: 70%;
  `}
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.title};
    font-weight: 700;

    ${media.lessThan('small')`
      font-size: 0.9rem;
    `}
  `}
`
export const Date = styled.p`
  ${({ theme }) => css`
    color: ${theme.subtitle};
    font-weight: 700;
    font-size: 1rem;
    margin-top: 5px;
  `}

  ${media.lessThan('small')`
      font-size: 0.8rem;
    `}
`
