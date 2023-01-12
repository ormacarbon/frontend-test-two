import React from "react";
import { CoinContainer, Container } from "./styles";
import { NormalPriceFormat } from "../../util/index";
import Link from "next/link";

export default function CoinList({
  id,
  image,
  name,
  price24h,
  marketCap,
  currentPrice,
}) {
  return (
    <Link href={`/coinDetail/${id}`}>
    <Container>
      <CoinContainer>
        <ul>
          <li>
            <img src={image} alt={name} />
          </li>
          <li>{name}</li>
          <li>{NormalPriceFormat(currentPrice)}</li>
          <li className={price24h < 0 ? "text-red" : "text-green"}>
            {price24h}
          </li>
          <div className="box-market">
            <span>Market Cap</span>
            <li>{NormalPriceFormat(marketCap)}</li>
          </div>
        </ul>
      </CoinContainer>
    </Container>
    </Link>
  );
}
