import { useMovies } from 'contexts/MoviesContext'

import * as S from './styles'

import { PaginationItem } from './PaginationItem'

const siblingsCount = 1
const itemsPerPage = 150

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export const Pagination = () => {
  const { page: currentPage, setPage, movies } = useMovies()

  const totalPages = movies?.total_pages
  const lastPage = Math.ceil(totalPages / itemsPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <S.Container>
      {currentPage > 1 + siblingsCount && <p>...</p>}

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return (
            <PaginationItem onPageChange={setPage} key={page} number={page} />
          )
        })}

      <PaginationItem onPageChange={setPage} number={currentPage} isCurrent />

      {nextPages.length > 0 &&
        nextPages.map((page) => {
          return (
            <PaginationItem onPageChange={setPage} key={page} number={page} />
          )
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <p>...</p>}
          <PaginationItem onPageChange={setPage} number={lastPage} />
        </>
      )}
    </S.Container>
  )
}
