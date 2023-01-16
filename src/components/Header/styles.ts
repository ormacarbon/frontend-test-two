import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;
`