import styled from "styled-components";

export const Content = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    align-items: center;
    column-gap: ${({theme}) => theme.spacings.large};
    margin-bottom: ${({theme}) => theme.spacings.xLarge};
  }

  h2 {
    font-size: ${({theme}) => theme.font.sizes.xLarge};
    margin-bottom: ${({theme}) => theme.spacings.medium};
  }

  p {
    text-indent: 3rem;
    margin-bottom: ${({theme}) => theme.spacings.small};
  }

  @media (max-width: ${({theme}) => theme.content.size.medium}) {
    div {
      display: flex;
      flex-direction: column;
    }

    div img {
      order: 2;
      margin-top: ${({theme}) => theme.spacings.large};
    }
  }
`
