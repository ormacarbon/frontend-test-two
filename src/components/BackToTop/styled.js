import styled from 'styled-components';

export const BackToTopContainer = styled.button`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;

  transform: scale(0.9);
  transition: all ease 0.3s;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors['red-600']};

  &:hover {
    transform: scale(1);
  }

  svg {
    width: 2.5rem;
    height: auto;

    color: ${(props) => props.theme.colors['gray-700']};
  }
`;
