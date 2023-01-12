import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme[300]};
  display: flex;
  padding: 25px 15px;
  align-items: center;
  justify-content: space-between;
`;
