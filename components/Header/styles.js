import Link from 'next/link';
import styled from 'styled-components';

export const HeaderDiv = styled.div`
  height: 60px;
  background: ${(({ theme }) => theme.colors.background.darkbg)};
  color: ${(({ theme }) => theme.colors.background.beau_blue)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vmax;
  padding: 0 30px;
  font-family: 'pokemon-font';
  
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;    
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  transition: 0.2s;
  color: ${(({ theme }) => theme.colors.background.beau_blue)};


  &:hover {
    font-weight: 1000;
  }
`;