import styled from 'styled-components';

export const TrendingSlugIdContainer = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center;
  height: 100vh;

  h2 {
    color: ${(props) => props.theme.colors['gray-400']};
    font-size: 1.4rem;
  }
`;

export const TrendingSlugIdEffectHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to right, #111111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 0 15rem 3rem;
`;

export const TrendingSlugIdEffectVertical = styled.div`
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to top, #111111 10%, transparent 90%);
`;

export const TrendingSlugIdTitle = styled.h1`
  margin-top: 3.2rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const TrendingSlugIdDuration = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  gap: 1.6rem;

  span {
    font-size: 1.6rem;
    font-weight: 600;

    padding: 0.2rem 0.4rem;
    border-radius: 4px;

    color: ${(props) => props.theme.colors['red-600']};
    background-color: ${(props) => props.theme.colors['gray-100']};
  }
`;

export const TrendingSlugIdSlogan = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.4rem;

  h3 {
    font-size: 1.4rem;
  }
`;

export const TrendingSlugIdGenres = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const AverageVotes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-top: 0.8rem;

  span {
    font-size: 1.4rem;
  }
`;

export const TrendingSlugIdVoteAverage = styled(AverageVotes)``;
export const TrendingSlugIdVotes = styled(AverageVotes)``;

export const TrendingSlugIdDescription = styled.h3`
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors['gray-100']};
  max-width: 70%;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* -webkit-line-clamp: 3; */
  -webkit-box-orient: vertical;
`;

export const TrendingSlugIdVoteProducer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-top: 3.2rem;

  h2 {
    white-space: nowrap;
  }

  > div {
    display: flex;
    gap: 0.8rem;

    flex-wrap: wrap;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props) => props.theme.colors['gray-100']};
      color: ${(props) => props.theme.colors.black};

      border-radius: 8px;
      padding: 0.4rem 0.6rem;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;

      background-color: ${(props) => props.theme.colors['gray-100']};

      border-radius: 8px;
      padding: 0.4rem 0.6rem;

      height: 4rem;
      gap: 0.8rem;

      img {
        max-width: 7rem !important;
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const TraillerLink = styled.a`
  display: inline-block;
  font-size: 1.6rem;;
  font-weight: bold;
  padding: 1.2rem 2.5rem;
  border-radius: 5px;

  transition: all ease 0.3s;

  &:hover {
    opacity: 0.7;
  }

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;
