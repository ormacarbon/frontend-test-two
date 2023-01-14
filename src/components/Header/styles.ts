import styled from 'styled-components';


export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.green300};
`

export const HeaderContent = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  
  a{
    text-decoration: none;
  }

  span{
    font-size: ${(props) => props.theme.fontSize.lg};
    color: ${(props) => props.theme.colors.primary100};
    font-family: Roboto;
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: 768px){
    flex-wrap: wrap;
    gap: 1rem;
  }
`