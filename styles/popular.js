import styled from "styled-components";

export const MovieList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,170px);
margin: 0 auto;
justify-content: center;

`
export const ListButton = styled.button`
  background: #303840;
  color: #def;
  padding: 9px 15px;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
`