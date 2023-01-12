import styled from 'styled-components';

export const FeaturedMovieContainer = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${`https://image.tmdb.org/t/p/original`}${(props) =>
    props.backgroundImage});

  h2 {
    font-size: 6rem;
    font-weight: bold;
  }

  p.description {
    margin-top: 1.5rem;
    font-size: 2rem;
    color: #999999;
    max-width: 40vw;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 760px) {
    & {
      height: 90vh;

      h2 {
        font-size: 4rem;
      }

      p.description {
        font-size: 1.4rem;
        max-width: 100%;
        padding-right: 3rem;
      }
    }
  }
`;

export const FeaturedMovieVerticalEffect = styled.div`
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to top, #111111 10%, transparent 90%);
`;

export const FeaturedMovieHorizontalEffect = styled.div`
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to right, #111111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 0 15rem 3rem;
`;

export const FeaturedMovieInfo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.5rem;

  span {
    display: inline-block;
    margin-right: 1.5rem;

    &.points {
      color: ${(props) => props.theme.colors['green-500']};
    }
  }

  @media (max-width: 760px) {
    & {
      font-size: 1.6rem;
    }
  }
`;

export const FeaturedButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  a {
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    padding: 1.2rem 2.5rem;
    border-radius: 5px;

    transition: all ease 0.3s;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 760px) {
      font-size: 1.6rem;
    }
  }

  a.button--watch {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }

  a.button--my-list {
    background-color: ${(props) => props.theme.colors['gray-300']};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const FeaturedGenres = styled.div`
  margin-top: 1.5rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors['gray-500']};

  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;
