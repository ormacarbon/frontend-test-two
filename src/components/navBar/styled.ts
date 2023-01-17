import styled from 'styled-components';

type ContainerProps = {
  mobileMenuVisible: boolean
}

export const Container = styled.nav<ContainerProps>`
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;

  display: flex;
  justify-content: space-around;

  height: 2.5rem;
  background: ${({theme}) => theme.colors.pink[700]};

  p {
    width: 100%;
    line-height: 2.5rem;

    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition: 250ms all linear;
    padding: 0 .5rem;

    :hover {
      background: ${({theme}) => theme.colors.pink[300]};
    }
  }

  span {
    display: inline-block;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
    overflow-x: scroll;
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
    overflow-x: scroll;
    padding-left: 0rem;
  }

  @media (max-width: 540px) {
    height: 100vh;
    display: ${({mobileMenuVisible}) => mobileMenuVisible ? 'block' : 'none'};
    z-index: 2;
  }
`