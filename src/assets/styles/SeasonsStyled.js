import styled from 'styled-components';

export const TableStyled = styled.table`
  border: 1px solid;

  .statistics {
    color: #ccc;
  }

  td {
    padding: 8px;
    border: 1px solid black;
  }

  .teams {
    &:nth-child(n+2):nth-child(-n+5){
      background-color: rgba(138, 193, 132, 0.2);
    }

    &:nth-child(n+6):nth-child(-n+7){
      background-color: rgba(46, 138, 226, 0.3);
    }

    &:last-child{
      background-color: rgba(400, 138, 226, 0.3);
    }
  }

`;
