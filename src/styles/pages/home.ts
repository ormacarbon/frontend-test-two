import styled from 'styled-components';

export const HomeContainer = styled.main`
width: 85%;
margin: 3rem auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2.5rem;
margin-top: 250px;

h1 {
  color: ${(props) => props.theme.colors.green500};
  font-size: ${(props) => props.theme.fontSize['2xl']};
  text-align: center;
  font-weight: bold;
}
`
export const SkeletonContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.5rem;

@media (max-width: 992px){
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px){
  grid-template-columns: 1fr;
}
`
export const MoviesContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.5rem;

@media (max-width: 992px){
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px){
  grid-template-columns: 1fr;
}
`