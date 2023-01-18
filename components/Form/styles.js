import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.6rem 3rem;
`;

export const FormContainer = styled.div`
  width: 95%;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.11);
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 0.6rem;
  width: 100%;
  outline: none;

  &:focus,
  &:active {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.15);
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.caption_400};

  svg {
    margin-right: 0.5rem;
  }
`;

export const ContainerResults = styled.div`
  width: 100%;
  padding: 0.6rem;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Section = styled.section`
  display: grid;
  justify-content: center;

  gap: 0.6rem;

  @media (min-width: 1100px) {
    grid-template-columns: 23% 23% 23% 23%;
  }
`;
