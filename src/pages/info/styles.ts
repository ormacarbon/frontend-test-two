import styled from "styled-components";

export const MainInfo = styled.main`
  display: flex;
  gap: 2rem;
  width: 80%;
  padding: 2rem;
  height: 80vh;

  img {
    border-radius: 10px;

    @media (max-width: 720px) {
      max-width: 60%;
      height: auto;
      object-fit: contain;
    }
  }

  section {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    h1 {
      margin-bottom: 0.2rem;
    }

    span {
      color: ${(props) => props.theme.colors["gray-400"]};
      display: flex;
      align-items: center;
    }

    p {
      text-align: justify;
    }
  }
  @media (max-width: 820px) {
    border: 1px solid;
    width: 100%;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin-bottom: 0.2rem;
  }
`;
