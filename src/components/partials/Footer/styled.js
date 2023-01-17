import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 8rem;
  background-color: ${(props) => props.theme.colors['gray-700']};
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};

  button {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors['gray-600']};
    color: ${(props) => props.theme.colors['gray-600']};
    padding: 0.8rem 1.6rem;

    margin-top: 2.8rem;

    transition: all ease 0.3s;

    &:hover {
      border-color: transparent;
      background-color: ${(props) => props.theme.colors['red-600']};
      color: ${(props) => props.theme.colors['gray-100']};
    }
  }
`;

export const FooterHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  a {
    svg {
      width: 2.8rem;
      height: auto;
    }
  }
`;

export const FooterList = styled.ul`
  display: grid;
  grid-template-areas: 'col-1 col-2 col-3 col-4';
  gap: 0.8rem;
  justify-content: space-between;

  margin-top: 1.6rem;

  @media (max-width: 890px) {
    grid-template-areas: 'col-1 col-2 col-3';
  }

  @media (max-width: 768px) {
    grid-template-areas: 'col-1 col-2';
  }

  @media (max-width: 560px) {
    grid-template-areas: 'col-1';
    justify-content: center;
  }

  li {
    color: ${(props) => props.theme.colors['gray-600']};
    font-size: 1.3rem;

    cursor: pointer;

    transition: all ease 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
