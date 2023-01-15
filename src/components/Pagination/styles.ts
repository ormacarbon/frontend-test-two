import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 19rem;
    height: 5rem;
    margin-top: 2rem;

    p {
      color: black;
    }

    ${media.lessThan('small')`
      width: 14rem;
    `}

    ${media.between('medium', 'large')`
      width: 14rem;
    `}
  `}
`
export const CurrentPageButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.main};
    border-radius: 3px;
    width: 38px;
    height: 38px;
    color: ${theme.white};
    border: none;
  `}
`

export const Button = styled.button`
  ${() => css`
    width: 38px;
    height: 38px;
    background: ${(props) => props.theme.header};
    color: ${(props) => props.theme['white']};
    border-radius: 3px;
    border: none;
  `}
`
