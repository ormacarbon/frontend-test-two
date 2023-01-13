import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
