import React from "react";
import { CoinContainer } from "./styles";
import { NormalPriceFormat } from "../../util";
import Link from "next/link";

export const Coin = ({ coin }) => {
  return (
    <Link href={`/coinDetail/${coin.id}`}>
    <CoinContainer>
      <ul>
        <li>
          <img src={coin.image} alt={coin.name} />
        </li>
        <div className="box-coin">
          <li>{coin.name}</li>
          <span>({coin.symbol})</span>
        </div>
        <li>{NormalPriceFormat(coin.current_price)}</li>
        <li
          className={
            coin.price_change_percentage_24h < 0 ? "text-red" : "text-green"
          }
        >
          {coin.price_change_percentage_24h}
        </li>
        <div className="box-market">
          <span>Market Cap</span>
          <li>{NormalPriceFormat(coin.market_cap)}</li>
        </div>
      </ul>
    </CoinContainer>
    </Link>
  );
};
