import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    ${media.lessThan('small')`
       width: 12rem;
       height: 22rem;
    `}

    img {
      border-radius: 8px;
    }
  `}
`
export const ImageContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
  `}
`
export const Name = styled.div`
  ${({ theme }) => css`
    font-weight: 700;
    padding: 10px;

    ${media.lessThan('small')`
      h2 {
        font-size: 1.2rem;
        color: ${theme.title}
      }
    `}
  `}
`
export const Character = styled.p`
  ${({ theme }) => css`
    color: ${theme.subtitle};
    font-weight: 400;
    font-size: 1.2rem;

    ${media.lessThan('small')`
         font-size: 0.9rem;
    `}
  `}
`
