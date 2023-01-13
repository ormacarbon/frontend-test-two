import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  gap: 100px;

`;

export const ContainerLogoLeague = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  /* border: 1px solid ${({ theme }) => theme.primaryColor}; */
  position: relative;

  img {
    width: 350px;
  }

  h2 {
    max-width: 75%;
    margin-top: 15px;
  }
`;

export const ContainerSeasons = styled.div`
  text-align: center;
  /* border: 1px solid ${({ theme }) => theme.tertiaryColor}; */

  strong {
    font-size:24px;
  }

  ul {
    margin-top: 16px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 30px;

    li{
      background-color: ${({ theme }) => theme.backgroundHeader};
      font-size: 20px;
      border-radius: 4px;
      padding: 10px;
      font-weight: bold;
      display: flex;
      align-items: center;
      border: 1px solid;

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.primaryColor};
        transform: scale(1.1);
      }

      :active {
        transform: rotate(1deg);
      }
    }
}
`;
