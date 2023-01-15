import Link from 'next/link';
import styled from 'styled-components';

export const HeaderDiv = styled.div`
  height: 60px;
  background: ${({theme})=> theme.colors.main.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vmax;
  padding: 0 30px;
  color: '#ffffff';
`;

export const H1 = styled.h1`
  color: white;
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;    
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  transition: 0.2s;
  color: white;
  
  &:hover {
    font-weight: 1000;
  }
`;