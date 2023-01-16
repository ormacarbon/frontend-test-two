import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    width: 100%;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  @media (max-width: 620px) {
    flex-direction: column;
  }

`

export const ButtonSearch = styled.button`
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.offColor};
  color: ${props => props.theme.colors.textCardItemColor};
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 620px) {
    padding: 0.75rem 1.25rem; 
  }

`

export const FilterInput = styled.input`
  padding: 0.75rem 1.25rem; 
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.offColor};
  color: ${props => props.theme.colors.textCardItemColor};
  

  &::placeholder {
    color: ${props => props.theme.colors.textCardItemColor}
  }

`

export const CardsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

`


export const ItemsAmount = styled.span`
  color: ${props => props.theme.colors.lightGray};
  margin-top: 0.5rem;
  font-size: 0.75rem;
`