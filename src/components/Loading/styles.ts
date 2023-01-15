import styled from "styled-components";

export const Container = styled.div`
    .loading {
    height: 2px;
    background:  ${({theme}) => theme.colors.text};
    overflow: hidden;
    max-width: 25%;
    margin: 2rem auto;
  }

  .loading::after {
    content: '';
    display: block;
    width: 75%;
    height: 2px;
    background: ${({theme}) => theme.colors.background};
    animation: loading .5s linear forwards infinite;
  }

  @keyframes loading {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(125%);
    }
  }
`
