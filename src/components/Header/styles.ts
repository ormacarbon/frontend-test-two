import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.header};
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;

    ${media.lessThan('small')`
      padding: 0 1.5rem;
      height: 3.5rem;
    `}
  `}
`
export const TogglerButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background: none;

    svg {
      color: ${theme.white};
      width: 30px;
      height: 30px;
    }
  `}
`
