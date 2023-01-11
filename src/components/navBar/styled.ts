import styled from 'styled-components';

export const Container = styled.nav`
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
`