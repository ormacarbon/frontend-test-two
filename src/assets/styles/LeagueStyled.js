import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  gap: 100px;
  min-height: 70vh;
  margin-bottom: 48px;

  @media (max-width:1100px) {
    flex-direction: column;
  }

`;

export const ContainerLogoLeague = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  position: relative;

  img {
    width: 350px;
  }

  h2 {
    max-width: 75%;
    margin-top: 15px;
  }

  @media (min-width: 1400px) {
    img {
      width: 500px;
    }

    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 550px) {
    img {
      width: 300px;
    }
  }
`;

export const ContainerSeasons = styled.div`
  text-align: center;

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

  @media (min-width: 1400px) {
      strong {
        font-size: 32px;
      }

      ul {
        li {
          font-size: 26px;
        }
      }
  }

  @media (max-width: 525px) {
    ul {
      grid-template-columns: repeat(4, auto);

    }
  }

  @media (max-width: 450px) {
    ul {
      grid-template-columns: repeat(3, auto);

    }
  }
`;
