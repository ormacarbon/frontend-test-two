import styled from "styled-components";

export const MovieList = styled.div`
display: flex;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
margin: 0 auto;
padding-inline: 2rem;

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