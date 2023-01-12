import React, { useEffect, useMemo, useState } from "react";
import CoinList from "../Components/Cryptocurrency";
import { Input } from "../Components/SearchComponent/styles";
import { useApi } from "../hooks/useApi";
import { InputBox } from "./styles";
import debounce from "lodash.debounce";
import LoaderComponent from "../Components/Loader";
import Head from "next/head";
import SEO from "../Components/SEO";

export default function Home() {
  const [search, setSearch] = useState("");

  const { response, isLoading } = useApi(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const handleChange = debounce((e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }, 500);

  useEffect(() => {
    return () => handleChange.cancel();
  }, []);

  const filteredCoins = useMemo(() =>response.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
  ),[response, search]);

  return (
    <main>
      <SEO name='Crypto.me | Challenge' desc='Code Challenge'/>
      <InputBox>
        <Input
          placeholder="Search for Cryptocurrency"
          onChange={handleChange}
        />
      </InputBox>
      {isLoading ? (
        <LoaderComponent/>
      ) : (
        filteredCoins.map((coins) => (
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
    </main>
  );
}
