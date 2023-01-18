import { createContext } from 'react';
import { AMOUNT_PER_PAGE } from './Radio.config';
import { Station } from 'radio-browser-api';

export type RadioContextType = {
  page: number,
  amount: number,
  setPage: (ignored: any, page: number) => void,
  stations: Station[],
  loading: boolean
}

const RadioContext = createContext<RadioContextType>({
  page: 1,
  amount: AMOUNT_PER_PAGE,
  setPage: () => null,
  stations: [],
  loading: true
});

export default RadioContext;