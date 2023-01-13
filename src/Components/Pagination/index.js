import React from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft, } from "react-icons/hi";
import { Button, PaginationContainer } from "./styles";

export default function Pagination({
  handlePageChange,
  currentPage,
  totalPages,
}) {
  return (
    <PaginationContainer>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
      <HiArrowNarrowLeft />
        Previous 
      </Button>
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <HiArrowNarrowRight /> 
      </Button>
    </PaginationContainer>
  );
}
