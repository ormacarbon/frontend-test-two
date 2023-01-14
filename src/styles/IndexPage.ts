import styled, { withTheme } from "styled-components";
import Image from "next/image";

export const Container = withTheme(styled.div`
  background-color: ${(props) =>
    props.theme.title === "light" ? "rgb(229, 231, 235)" : "rgb(31 41 55)"};

  min-height: 100vh;
  margin-bottom: -1.5rem;
`);

export const SearchWrapper = styled.div`
  display: flex;
  padding-top: 0.75rem;
`;

export const SearchWrapperInner = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  gap: 0.25rem;
`;

export const SearchInput = withTheme(styled.input`
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.25rem;
  border-radius: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  border: none;

  &:focus {
    border-color: rgb(156 163 175);
  }

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(55 65 81);
    border-color: rgb(31 41 55);
     color: rgb(229 231 235);
    &:focus {
      border-color: rgb(31 41 55);
    }
  `}
`);

export const GridSwitchButton = withTheme(styled.button`
  background-color: rgb(156 163 175);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: rgb(255 255 255);
  font-weight: 600;
  border-radius: 0.5rem;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  border: none;

  &:hover {
    background-color: rgb(107 114 128);
  }

  &:active {
    background-color: rgb(75 85 99);
  }

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(75 85 99);
    &:hover {
      background-color: rgb(55 65 81);
    }
    &:active {
      background-color: rgb(55 65 81);
    }
  `}
`);

export const GridWrapper = styled.div`
  margin-top: 0.75rem;
`;

export const ListWrapper = styled.div`
  margin-top: 0.25rem;
`;

export const LoadingImage = styled(Image)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25vh;
  margin-bottom: 25vh;
`;

export const GridWrapperInner = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10vw;
  padding-right: 10vw;
  gap: 1.5rem;
  max-width: 1280px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  gap: 0.25rem;
`;

export const PaginationButton = withTheme(styled.button`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: rgb(255 255 255);
  font-weight: 600;
  border-radius: 0.5rem;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  border: none;
  background-color: rgb(156 163 175);

  &:hover {
    background-color: rgb(107 114 128);
  }

  &:active {
    background-color: rgb(75 85 99);
  }

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(75 85 99);
    &:hover {
       background-color: rgb(55 65 81);
    }
    &:active {
       background-color: rgb(55 65 81);
    }
  `}
`);

export const CurrentPagePaginationButton = withTheme(styled.button`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: rgb(255 255 255);
  font-weight: 600;
  border-radius: 0.5rem;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  border: none;
  background-color: rgb(107 114 128);

  &:hover {
    background-color: rgb(75 85 99);
  }

  &:active {
    background-color: rgb(55 65 81);
  }

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(55 65 81);
    &:hover {
       background-color: rgb(55 65 81);
    }
    &:active {
       background-color: rgb(55 65 81);
    }
  `}
`);
