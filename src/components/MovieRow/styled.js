import styled from 'styled-components';
import Link from 'next/link';

export const MovieRowTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 2.5rem;
  color: ${(props) =>
    props.darkMode ? props.theme.colors.white : props.theme.colors.black};

  margin-left: 3rem;
  transition: all ease 0.4s;

  &.changeOnDark {
    color: ${(props) => props.theme.colors.white};
  }

  span {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors['blue-200']};
    margin-left: 0.8rem;

    transition: all ease 0.4s;
  }

  svg {
    color: ${(props) => props.theme.colors['blue-200']};
    width: 1.6rem;

    transition: all ease 0.4s;
  }

  &:not(:hover) {
    svg {
      opacity: 0;
    }

    span {
      opacity: 0;
      margin-left: -1.6rem;
    }
  }
`;

export const MovieRowContainer = styled.section`
  position: relative;

  &:hover .movieRow--left,
  &:hover .movieRow--right {
    opacity: 1;
  }

  @media (max-width: 760px) {
    .movieRow--left,
    .movieRow--right {
      opacity: 1;
    }
  }
`;

export const MovieRowArrow = styled.div`
  position: absolute;
  width: 4rem;
  height: 22.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: pointer;
  opacity: 0;

  transition: all ease 0.3s;

  svg {
    width: 5rem;
    height: 5rem;
  }
`;

export const MovieRowArrowLeft = styled(MovieRowArrow)`
  left: 0;
`;

export const MovieRowArrowRight = styled(MovieRowArrow)`
  right: 0;
`;

export const MovieArrowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 3rem;
`;

export const MovieRowList = styled.div`
  transition: all ease 0.4s;

  > div {
    display: inline-block;
    width: 15rem;

    cursor: pointer;

    img {
      width: 100%;
      height: 22.5rem;

      transform: scale(0.9);
      transition: all ease 0.3s;

      &:hover {
        transform: scale(1);
      }
    }
  }
`;

export const MovieRowIten = styled(Link)`
  display: inline-block;
  width: 15rem;

  cursor: pointer;

  img {
    width: 100%;
    height: 22.5rem;

    transform: scale(0.9);
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1);
    }
  }
`;
