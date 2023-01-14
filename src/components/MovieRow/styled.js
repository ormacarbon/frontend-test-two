import styled from 'styled-components';
import Link from 'next/link';

export const MovieRowTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 2.4rem;
  color: ${(props) =>
    props.darkMode ? props.theme.colors.white : props.theme.colors.black};

  margin-left: 3rem;
  transition: all ease 0.4s;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 0;
  }

  strong {
    background-color: ${(props) =>
      props.darkMode ? '' : props.theme.colors['gray-100']};
    border-radius: 4px;
    padding-inline: 0.2rem;
    z-index: 1;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors['blue-200']};
    margin-left: 0.8rem;

    transition: all ease 0.4s;

    background-color: ${(props) =>
      props.darkMode ? '' : props.theme.colors['red-600']};
    padding: 0.2rem 0.2rem 0.1rem 0.8rem;
    border-radius: 4px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
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
      margin-left: -10rem;
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  cursor: pointer;
  opacity: 0;

  transition: all ease 0.3s;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.9);
  }

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

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MovieRowPagination = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-right: 3.2rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-right: 1.6rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 1.4rem;
    width: 2.8rem;
    height: auto;

    padding: 0.5rem;
    margin-bottom: 0.4rem;

    background: ${(props) =>
      props.darkMode ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, 1)'};
    color: ${(props) => props.theme.colors['red-600']};

    border-radius: 4px;

    transition: all ease 0.3s;

    @media (max-width: 768px) {
      width: 2.4rem;
      padding: 0.2rem;
    }
  }

  button {
    padding: 0.5rem;
    border-radius: 4px;
    background: ${(props) =>
      props.darkMode ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, 1)'};

    transform: scale(0.9);
    transition: all ease 0.3s;
    margin-bottom: 0.4rem;

    @media (max-width: 768px) {
      padding: 0.2rem;
    }

    &:hover {
      transform: scale(1);
    }

    svg {
      width: 2.8rem;
      height: auto;
      color: ${(props) => props.theme.colors['red-600']};

      @media (max-width: 768px) {
        width: 2.4rem;
      }
    }
  }
`;
