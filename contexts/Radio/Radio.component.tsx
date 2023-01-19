import { PropsWithChildren, useEffect, useState } from 'react';
import RadioContext from './Radio.context';
import { AMOUNT_PER_PAGE } from './Radio.config';
import useRadio from '../../hooks/useRadio';

function RadioContextComponent(props: PropsWithChildren) {
  const [page, setPage] = useState<number>(1);
  const { loading, loadStations, stations } = useRadio();

  useEffect(() => {
    if(typeof window === 'undefined')
      return;

    return loadStations(page, AMOUNT_PER_PAGE);
  }, []);

  function onSetPage(ignored: any, page: number) {
    setPage(page);
    loadStations(page, AMOUNT_PER_PAGE);
  }

  return <RadioContext.Provider value={{
    page,
    amount: AMOUNT_PER_PAGE,
    setPage: onSetPage,
    stations,
    loading
  }}>
    { props.children }
  </RadioContext.Provider>;
}

export default RadioContextComponent;