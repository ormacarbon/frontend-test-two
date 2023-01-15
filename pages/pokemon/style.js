import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transition: 0.5s;
  }  
`;

export const Title = styled.h2`
    text-transform: capitalize;
    
`;