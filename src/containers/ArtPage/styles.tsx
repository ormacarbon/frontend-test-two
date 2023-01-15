import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.background};
  margin-bottom: ${({theme}) => theme.spacings.xLarge};
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  gap: ${({theme}) => theme.spacings.large};

  @media (max-width: ${({theme}) => theme.content.size.medium}) {
    grid-template-columns: 1fr;
  }

  ul {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    margin-top: ${({theme}) => theme.spacings.medium};
    font-size: ${({theme}) => theme.font.sizes.small};

    &::after {
      content: '';
      display: block;
      width: 50%;
      height: 1px;
      background: ${({theme}) => theme.colors.secundary};
      margin-top: ${({theme}) => theme.spacings.small};

    }
  }

  li span {
    font-size: ${({theme}) => theme.font.sizes.large}
  }
`;
