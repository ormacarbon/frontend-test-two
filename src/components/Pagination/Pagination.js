import { CHILDREN_COUNT_DEFAULT } from "../../constants";
import { usePagination } from "../../shared/hooks";
import { Container } from "./Pagination.styles";
import { PaginationItem } from "./PaginationItem/PaginationItem";

const ThreeDotsComponent = () => <PaginationItem>...</PaginationItem>;

export function Pagination({ totalPages, currentPage, onChangePage }) {
  const { paginateItems } = usePagination({
    totalPages: totalPages || 0,
    currentPage: currentPage || 1,
  });

  const [prevPages, nextPages] = paginateItems();

  return (
    <Container>
      {(currentPage > CHILDREN_COUNT_DEFAULT || currentPage === 1) && (
        <>
          <PaginationItem
            isActive={currentPage === 1}
            onClick={() => onChangePage(1)}
          >
            1
          </PaginationItem>
          {currentPage > CHILDREN_COUNT_DEFAULT + 1 && <ThreeDotsComponent />}
        </>
      )}

      {prevPages.map((page) => (
        <PaginationItem
          key={page}
          isActive={currentPage === page}
          onClick={() => onChangePage(page)}
        >
          {page}
        </PaginationItem>
      ))}

      {nextPages.map((page) => (
        <PaginationItem key={page} onClick={() => onChangePage(page)}>
          {page}
        </PaginationItem>
      ))}

      {currentPage + CHILDREN_COUNT_DEFAULT < totalPages && (
        <>
          {currentPage < totalPages - CHILDREN_COUNT_DEFAULT && (
            <ThreeDotsComponent />
          )}

          <PaginationItem
            isActive={currentPage === totalPages}
            onClick={() => onChangePage(totalPages)}
          >
            {totalPages}
          </PaginationItem>
        </>
      )}
    </Container>
  );
}
