import styled from "styled-components";

export const HomeMovieListContainer = styled.div`
margin-top: 3rem;
@media (max-width: 768px) {
    margin-top: 5rem;
  }
`

export const HomeMovieListTitle = styled.div`
padding-inline: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const HomeMovieListDetail = styled(HomeMovieListTitle)`
  float: right;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  padding-left: unset;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const PageTitle = styled.div`
display: flex;
align-items: center;
flex-direction: column;
font-size: 1.5rem;
font-weight: 600;
line-height: 2rem;
margin-bottom: 1rem;
margin-inline: 2rem;
text-align: center;
`
