import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.header.border};
  border-radius: 10px;
  transition: all 0.3s ease;
`;

export const Content = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  position: relative;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    transition: all 0.3s ease;
    color: ${(p) => p.theme.colors.primary};
    font-size: 1.1rem;
  }

  div {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 10px;

    button {
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(p) => p.theme.colors.button.bg};
      transition: all 0.3s ease;

      svg {
        transition: all 0.3s ease;
        color: ${(p) => p.theme.colors.button.text};
      }

      :hover {
        background-color: ${(p) => p.theme.colors.red};
        svg {
          color: #fff;
        }
      }
    }

    a {
      display: flex;
      transition: all 0.3s ease;
      background-color: ${(p) => p.theme.colors.button.bg};
      padding: 0 10px;
      align-items: center;
      justify-content: center;
      height: 20px;
      border-radius: 10px;
      font-size: 0.8rem;
      color: ${(p) => p.theme.colors.button.text};
      font-weight: 600;

      span {
        display: grid;
        place-items: center;
        transform: scale(0);
        width: 12px;
        margin-left: -12px;

        svg {
          color: #fff;
        }
      }

      :hover {
        background-color: ${(p) => p.theme.colors.blue[200]};
        color: #fff;

        span {
          transform: scale(1);
          width: 12px;
          margin-left: 4px;
        }
      }
    }
  }
`;
