import axios from 'axios'
import React, { useState } from 'react'
import CoinList from '../Components/MarketCoins'
import { Input } from '../Components/SearchComponent/styles'
import { useApi } from '../hooks/useApi'
import { InputBox } from './styles'

export default function Home() {
  const[search,setSearch] = useState('')

  const {response} = useApi('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const filteredCoins = response.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <InputBox>
        <Input placeholder='Search for Cryptocurrency' onChange={handleChange}/>
      </InputBox>
      {filteredCoins.map(coins=>(
        <CoinList
          key={coins.id}
          id={coins.id}
          image={coins.image}
          name={coins.name}
          marketCap={coins.market_cap}
          price24h={coins.price_change_percentage_24h}
          currentPrice={coins.current_price}
        />
      ))}
    </main>
  )
}
