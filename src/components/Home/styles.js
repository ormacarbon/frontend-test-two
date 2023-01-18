import styled from "styled-components";

export const Item = styled.li`
  padding: 13px 58px 13px 24px;
  width: 100%;
  min-height: 50px;
  margin-top: 1rem;
  background: ${(props) => (props.checked ? "#da2535" : "#FFFFFF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
`;
