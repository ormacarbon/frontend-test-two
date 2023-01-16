import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 4.8rem;

  background-color: ${(props) =>
    props.darkMode ? props.theme.colors.black : props.theme.colors['gray-100']};

  transition: all ease 0.4s;
`;

export const HomeMovies = styled.div``;

export const HomeMoviesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: -16rem;
`;
