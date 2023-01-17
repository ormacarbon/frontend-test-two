import styled from 'styled-components';

export const Container = styled.div`
  max-width: 200px;
  min-height: 280px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MovieInfo = styled.section`
  cursor: pointer;
  transition: 200ms all linear;

  img {
    max-width: 200px;
    scale: .95;
  }

  p {
    font-size: .9rem;
  }

  :hover {
    img {
      scale: 1;
    }
  }
`

export const TextSection = styled.section`  
  p:first-child {
    font-weight: 600;
  }

  p:last-child {
    color: ${({theme}) => theme.colors.gray[250]};
  }
`