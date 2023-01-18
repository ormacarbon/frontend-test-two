import { createContext } from 'react';
import { AMOUNT_PER_PAGE } from './Pagination.config';

export type PaginationContextType = {
  page: number,
  amount: number,
  setPage: (ignored: any, page: number) => void
}

const PaginationContext = createContext<PaginationContextType>({
  page: 1,
  amount: AMOUNT_PER_PAGE,
  setPage: () => null
});

export default PaginationContext;