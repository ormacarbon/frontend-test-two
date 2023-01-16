import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  background: ${({ theme }) => theme.colors.white[100]};
  color: ${({ theme }) => theme.colors.gray[800]};

  padding-top: 1rem;
  
  img {
    max-width: 200px;
  }
`

export const MovieInfo = styled.section`

`