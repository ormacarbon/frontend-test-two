import styled from 'styled-components';


export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.green500};
  gap: 1rem;

  img{
    width: 100%;
    height: fit-content;
    object-fit: cover;
    border-radius: 8px;
  }

  h1{
    color: ${(props) => props.theme.colors.primary100} !important;
    font-size: ${(props) => props.theme.fontSize['2xl']};
    padding: 2rem;
  }

  a{
    text-decoration: none;
    margin: 2rem;
    strong{
      background-color: ${(props) => props.theme.colors.primary100};
      color: ${(props) => props.theme.colors.green500};
      text-decoration: none;
      width: fit-content;
      padding: 1rem;
      text-align: center;
      font-size: 1.35rem;
      border-radius: 8px;
  }
  }
`

export const Liked = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  .star{
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg{
      color: #f7d354;
    }

    span{
      color: ${(props) => props.theme.colors.primary100};
      font-size: 1.35rem;
      font-weight: bold;
    }

    .like{
      color: red;
    }
  }
  button {
      width: fit-content;
      border: 0;
      background-color: transparent;
    }
`