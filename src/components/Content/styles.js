import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  height: calc(90vh - 1rem);
  margin: 0 auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgColor};
`;
