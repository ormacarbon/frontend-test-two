import styled from "styled-components";
import React from "react";

const PaginationComponent = ({pages, currentPage, setCurrentPage}) => {
    return (
        <PaginationContainer>
          {Array.from(Array(pages), (item, index) => {
            return (
              <button
                key={index}
                value={index}
                onClick={(e) => setCurrentPage(Number(e.target.value))}
                style={index === currentPage ? { Color: 'blue'} : null}
              >
                {index + 1}
              </button>
            );
          })}
        </PaginationContainer>
    )
}

export default PaginationComponent;


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 6px;
  width: 11%;
  height: 100%;
  
  button {
    background: none;
    border: none;
    text-decoration: underline;
    font-size: 15px;
    font-weight: bold;
    color: ${(props) => props.theme.color};
    cursor: pointer;
    
    &:hover {
      color: #1258c2;
    }
  }  
`