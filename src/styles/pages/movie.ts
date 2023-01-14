import styled from 'styled-components';


export const MovieConteiner = styled.div`
  width: 85%;
  min-height: 100vh;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  img{
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const MovieContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1rem;

h1{
  font-size: ${(props) => props.theme.fontSize['2xl']};
  color:  ${(props) => props.theme.colors.green500};
  font-weight: bold;
}

p{
  font-size: ${(props) => props.theme.fontSize.lg};
  color:  ${(props) => props.theme.colors.green500};
  font-weight: bold;
}

a{
  width: fit-content;
  padding: 1rem;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize.lg};
  background-color:  ${(props) => props.theme.colors.green500};
    color:  ${(props) => props.theme.colors.secondary100};
    border: 0;
    border-radius: 8px;
  font-weight: bold;
}
`

export const MovieBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  strong{
    font-size: ${(props) => props.theme.fontSize.md};
    color:  ${(props) => props.theme.colors.green500};
    font-weight: bold;
  }

  span{
    font-size: ${(props) => props.theme.fontSize.md};
    color:  ${(props) => props.theme.colors.secondary100};
    font-weight: bold;
  }
`