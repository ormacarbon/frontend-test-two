import styled from "styled-components"

export const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.cardBgColor};
  width: 420px;
  height: 120px;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.colors.textCardItemColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.5s, scale 0.5s;

  &:hover {
    transform: scale(1.1);
    opacity: 1.1;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 450px) {
    flex-direction: column;
    gap: 2rem;
  }
  }
`;
export const CardName = styled.h3`
  font-size: 1rem;

`;
export const CardTitles = styled.strong`
  width: 160px;
  font-size: .875rem;
`;

export const CardBorn = styled.span`
  font-size: 0.75rem;
  padding: .5rem;

  @media (max-width: 450px) {
    display: none;
  }
`;
export const CardCulture = styled.span`
  font-size: 0.75rem;

  @media (max-width: 450px) {
    display: none;
  }
`;