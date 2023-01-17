import styled from "styled-components";

export const Container = styled.a`
  max-width: 100%;
  border: 1px solid ${(p) => p.theme.colors.header.border};
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;

  :hover {
    border-color: ${(p) => p.theme.colors.blue[200]};
    span {
      color: ${(p) => p.theme.colors.blue[200]};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    transition: all 0.3s ease;
    color: ${(p) => p.theme.colors.secundary};
    font-size: 1.1rem;
  }
`;
