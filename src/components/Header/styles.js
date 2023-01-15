import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  padding: 20px 50px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const ListNavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;

  li{
    a{
      padding: 10px 15px;
      border-radius: 10px;
      transition: 0.3s ease-in;
      color:${({ theme }) => theme.textColor};
      font-weight: bold;
      font-size: 18px;

      &:hover {
        background-color: ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.textColorHover};
      }
    }
  }
`;
