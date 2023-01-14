import React, { useEffect, useMemo, useState } from "react";
import CoinList from "../Components/Cryptocurrency";
import { Input } from "../Components/SearchComponent/styles";
import { useApi } from "../hooks/useApi";
import { InputBox } from "../styles/GlobalStyle";
import debounce from "lodash.debounce";
import LoaderComponent from "../Components/Loader";
import SEO from "../Components/SEO";
import Pagination from "../Components/Pagination";

export default function Home() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 15

  const url = `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  const { response,isLoading,refresh,error } = useApi(url);

  const handleSearch = debounce((e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }, 500);

  useEffect(() => {
    return () => handleSearch.cancel();
  }, []);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      refresh(url);
    }, 300000);
    return () => clearInterval(intervalId);
  }, [refresh]);

  const filteredCoins = useMemo(() =>response.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
  ),[response, search]);

  const totalPages = Math.ceil(filteredCoins.length / perPage);

  const handlePageChange = (page) => {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentPageCoins = filteredCoins.slice(startIndex, endIndex);

  return (
    <main>
      <SEO name='Crypto.me | Market Coins' desc='Code Challenge'/>
      <section id="coins">
        <InputBox>
          <Input
            placeholder="Search for Cryptocurrency"
            onChange={handleSearch}
          />
        </InputBox>
        <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
        {isLoading ? (
          <LoaderComponent/>
        ) : (
          currentPageCoins.map((coins) => (
            <CoinList
              key={coins.id}
              id={coins.id}
              image={coins.image}
              name={coins.name}
              marketCap={coins.market_cap}
              price24h={coins.price_change_percentage_24h}
              currentPrice={coins.current_price}
            />
          ))
        )}
        {error ? error : ''}
      </section>
    </main>
  );
}

