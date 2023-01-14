import { useCallback } from "react";
import { CHILDREN_COUNT_DEFAULT } from "../../../constants";

const createRange = (start, end) =>
  [...new Array(end - start)]
    .map((_, index) => {
      return start + index + 1;
    })
    .filter((page) => {
      return page > 0;
    });

export function usePagination({
  totalPages = 10,
  childrenCount = CHILDREN_COUNT_DEFAULT,
  currentPage = 10,
}) {
  const paginateItems = useCallback(() => {
    const startIndex = currentPage - childrenCount;

    const prevPages =
      currentPage > 1 ? createRange(startIndex, currentPage) : [];
    const nextPages =
      currentPage < totalPages
        ? createRange(
            currentPage,
            Math.min(currentPage + childrenCount, totalPages)
          )
        : [];

    return [prevPages, nextPages];
  }, [childrenCount, currentPage, totalPages]);

  return { paginateItems };
}
