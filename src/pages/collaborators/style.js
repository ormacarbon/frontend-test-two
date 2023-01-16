import styled from "styled-components";

export const ContainerCollaborators = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 40px;
`;
export const Select = styled.select`
  height: 30px;
`;
export const ContainerSelects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  thead {
    th {
      width: 300px;
      height: 40px;
      text-align: center;
      border: 1px solid;
    }
  }
  td {
    width: 300px;
    height: 40px;
    text-align: center;
    border: 1px solid #aaa;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 130px;
    height: 50px;
    background-color: green;
    margin: 0 50px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }
`;
