import styled from "styled-components";

export const FeedSection = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 500px) {
    margin-top: 2rem;
  }
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.container};
  box-shadow: ${(props) => props.theme.colors.shadowContainer};
  padding: 2rem;
  border-radius: 1rem;
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
  }
`;

export const Image = styled.img`
  border-radius: 1rem;
  object-fit: cover;
  max-width: 16rem;
  height: 13rem;
  @media screen and (max-width: 680px) {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 1.35rem;
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Paragraph = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textSecundary};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    font-size: 0.845rem;
    color: ${(props) => props.theme.colors.textSecundary};
  }
  @media screen and (max-width: 384px) {
    & > span {
      font-size: 0.745rem;
    }
  }
`;

export const Link = styled.a`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: bold;
  color: var(--blue);
  transition: 0.2s;
  &:hover {
    gap: 1rem;
  }
  @media screen and (max-width: 384px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;
