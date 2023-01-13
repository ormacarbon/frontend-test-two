import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background-color: ${(props) =>
    props.darkMode ? props.theme.colors.black : props.theme.colors.white};

  transition: all ease 0.4s;
`;

export const HomeMovies = styled.div``;

export const HomeMoviesList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -16rem;
`;
