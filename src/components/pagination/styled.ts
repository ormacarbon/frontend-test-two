import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: max-content;
  margin: 0 auto;

  @media (max-width: 540px) {
    margin-top  : 1rem;
  }
`;

export const ToFistPage = styled.section`
  display: flex;
  gap: 0.5rem;
`;

export const Buttons = styled.section`
  display: flex;
  gap: 0.5rem;
`;
