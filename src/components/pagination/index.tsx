import { PaginationButton } from '@components/paginationButton';
import * as Styled from './styled';

type PaginationProps = {
  pageActive: number;
  totalPage: number;
  setPage: (page: number) => void;
};

export function Pagination({
  pageActive,
  totalPage,
  setPage,
}: PaginationProps): JSX.Element {
  const createPages = (): number[] => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const totalPages = createPages();
  const firstPage = 1;
  const lastPage = totalPages.length;
  const init_slice = pageActive === 1 ? 0 : pageActive - 2;
  const end_slice = pageActive === 1 ? pageActive + 2 : pageActive + 1;
  const buttonsPageVisible = totalPages.slice(init_slice, end_slice);

  return (
    <Styled.Container>
      {firstPage + 2 < pageActive && (
        <Styled.ToFistPage>
          <PaginationButton number={1} onPageChange={() => setPage(1)} />
          <p>...</p>
        </Styled.ToFistPage>
      )}

      <Styled.Buttons>
        {buttonsPageVisible.map((page) => (
          <PaginationButton
            onPageChange={setPage}
            key={page}
            number={page}
            isCurrent={page === pageActive}
          />
        ))}
      </Styled.Buttons>

      {pageActive + 2 < lastPage && (
        <>
          <p>...</p>
          <PaginationButton
            number={Math.ceil(totalPage)}
            onPageChange={() => setPage(Math.ceil(totalPage))}
          />
        </>
      )}
    </Styled.Container>
  );
}
