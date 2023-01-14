import styled, { withTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GridComponentWrapper = withTheme(styled(Link)`
  display: flex;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: rgb(255 255 255);
  border-radius: 0.75rem;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  justify-content: center;

  &:focus {
    border-color: rgb(156 163 175);
  }

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(55 65 81);
    &:hover {
      background-color: rgb(75 85 99);
    }
  `}
`);

export const GridComponentWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.375rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    width: 24rem;
  }
`;

export const GridComponentImage = styled(Image)`
  object-fit: contain;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
`;

export const GridComponentName = withTheme(styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: capitalize;
  text-decoration: none !important;
  color: black;

  &:visited {
    text-decoration: none !important;
  }

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `}
`);

export const GridComponentXP = styled.span`
  font-weight: 700;
  margin-left: 0.25rem;
`;
