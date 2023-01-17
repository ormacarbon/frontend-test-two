import { useContext } from "react";
import Link from "next/link";

import { themeContext } from "../../context/themeContext";

import { PaginationComponent } from "./paginationStyle";

export function Pagination({ totalPages, page, pagination, maxPage }) {
  const [darkTheme] = useContext(themeContext);
  const maxPages = totalPages > maxPage ? maxPage : totalPages;

  return (
    <PaginationComponent dark={darkTheme}>
      {page == 1 ? null : (
        <Link href="#" onClick={() => pagination(1)}>
          1
        </Link>
      )}
      {page > 4 ? <span>...</span> : null}
      {page > 3 ? (
        <Link href="#" onClick={() => pagination(page - 2)}>
          {page - 2}
        </Link>
      ) : null}
      {page > 2 ? (
        <Link href="#" onClick={() => pagination(page - 1)}>
          {page - 1}
        </Link>
      ) : null}
      <Link href="#" className="active" onClick={() => pagination(page)}>
        {page}
      </Link>
      {page < maxPages && page <= maxPages - 2 ? (
        <Link href="#" onClick={() => pagination(page + 1)}>
          {page + 1}
        </Link>
      ) : null}
      {page < maxPages && page <= maxPages - 3 ? (
        <Link href="#" onClick={() => pagination(page + 2)}>
          {page + 2}
        </Link>
      ) : null}
      {maxPages - page > 3 ? <span>...</span> : null}
      {page == maxPages || maxPages == 0 || maxPages == null ? null : (
        <Link href="#" onClick={() => pagination(maxPages)}>
          {maxPages}
        </Link>
      )}
    </PaginationComponent>
  );
}
