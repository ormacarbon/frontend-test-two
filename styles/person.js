import styled from "styled-components";

export const PersonPageContainer = styled.div`
  display: flex;
  padding-inline: 2rem;

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
export const PersonProfile = styled.div`
  width: 100%;
  max-width: 220px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    max-width: unset;
  }
  `
export const PersonImage = styled.img`
  max-width: 220px;
  border-radius: 10px;
  @media (max-width: 780px) {
    max-width: unset;
  }
`
export const PersonDescription = styled.div`
  font-size: 0.75rem;
  line-height: 1.25;
  margin-block:  0.5rem 1rem;
`
export const Biography = styled.div`
    color: var(--font-color)
`
export const PersonMovies = styled.div`
  width: 100%;
  padding-inline: 2rem;
`
export const MovieSectionTitle = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--font-color);
  `
export const PersonTitle = styled.div`
  font-weight: 300;
  `

export const PersonName = styled.div`
  font-weight: 600;
  font-size: 1.5rem
`
export const ExpandButton = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`