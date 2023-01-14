import styled, { withTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const ListComponentWrapper = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const ListComponentWrapperInner = withTheme(styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(255 255 255);
  border-radius: 0.375rem;
  width: 18rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.theme.title === "dark" &&
    `
    background-color: rgb(55 65 81);
    &:hover {
      background-color: rgb(75 85 99);
    }
  `}
`);

export const ListComponentWrapperInnerInner = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const ListComponentImage = styled(Image)`
  object-fit: contain;
  width: 40px;
  height: 40px;
`;

export const ListComponentName = withTheme(styled.p`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  text-transform: capitalize;
  color: black;

  ${(props) =>
    props.theme.title === "dark" &&
    `
    color: rgb(229 231 235);
  `}
`);
export const ListComponentXP = styled.p`
  font-weight: 700;
  margin-left: 0.25rem;
  text-decoration: none;
`;
