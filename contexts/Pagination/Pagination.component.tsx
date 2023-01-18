import { PropsWithChildren, useState } from 'react';
import PaginationContext from './Pagination.context';
import { AMOUNT_PER_PAGE } from './Pagination.config';

function PaginationContextComponent(props: PropsWithChildren) {
  const [page, setPage] = useState<number>(1);

  function onSetPage(ignored: any, page: number) {
    setPage(page);
  }

  return <PaginationContext.Provider value={{
    page,
    amount: AMOUNT_PER_PAGE,
    setPage: onSetPage
  }}>
    { props.children }
  </PaginationContext.Provider>;
}

export default PaginationContextComponent;