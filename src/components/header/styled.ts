import styled from 'styled-components';

type ContainerProps = {
  isDarkTheme: boolean
}

export const Container = styled.header<ContainerProps>`
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;
  height: ${({theme}) => theme.spacings[4]};

  color: ${({ isDarkTheme, theme }) => isDarkTheme ? theme.colors.white[100] : theme.colors.gray[700]};
  background: ${({ isDarkTheme, theme }) => isDarkTheme ? '': theme.colors.gray[700]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 540px) {
    top: 0;
    padding: 0 1rem;
    border-bottom: 1px solid;
  }
`

export const Logo = styled.section<ContainerProps>`
  display: flex;
  align-items: center;

  width: max-content;
  height: 4rem;

  color: ${({ theme }) => theme.colors.white[100]};

  span {
    display: inline-block;
    font-weight: 600;
    size: 1.5rem;

    line-height: 4rem;
  }
`

export const MenuActions = styled.section<ContainerProps>`
  display: flex;
  gap: .5rem;
  color: ${({ theme }) => theme.colors.white[100]};

  svg {
    cursor: pointer;

    :last-child {
      display: none;

      @media (max-width: 540px) {
        display: block;
      }
    }
  }
`

export const FavoriteList = styled.section<ContainerProps>`
  display: flex;
  align-items: center;
  gap: .25rem;

  color: ${({ theme }) => theme.colors.white[100]};

  span {
    font-weight: 600;
  }

  @media (max-width: 540px) {
    margin-right: .5rem;
  }
`