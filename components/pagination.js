import React from "react";
import styled from "styled-components";


const PaginationSty = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
  button {
    width: 40px;
    height: 40px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: #eee;
    border-color: #eee;
  }
  button.active {
    font-weight: 900;
    border-color: #101010;
    background: #ffe400;
    color: #101010;
  }
  @media (max-width: 768px) {
    
    margin-left: 114px;
  } ;
`

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationSty>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </PaginationSty>
  );
};

export default Pagination;
