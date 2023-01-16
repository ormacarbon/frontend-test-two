import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--blue);
  color: var(--white);
  text-align: left;
  line-height: 1;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
  padding: 1rem 2rem;
  width: 14rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: ${(props) => props.theme.colors.shadow};
  transition: 0.2s;
  &:hover,
  &:active,
  &::selection {
    background-color: var(--blue-100);
    box-shadow: ${(props) => props.theme.colors.shadowHover};
  }
  & > svg {
    transition: 0.2s;
  }
  &.active svg {
    transform: rotate(180deg);
  }
`;

export const SectionList = styled.ul`
  position: absolute;
  top: 100%;
  height: 40vh;
  overflow-y: auto;
  width: 14rem;
  display: block;
  background-color: ${(props) => props.theme.colors.container};
  z-index: 1;
  box-shadow: ${(props) => props.theme.colors.shadow};
  border-radius: 0.5rem;
  opacity: 0;
  transform: translate3d(0, -10px, 0);
  animation: animeDown 0.2s forwards;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
  @keyframes animeDown {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  & > li {
    padding: 0.8rem;
    cursor: pointer;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.textPrimary};
  }
  & > li:hover,
  & > li:focus {
    background-color: var(--blue-100);
    color: var(--white);
  }
`;
