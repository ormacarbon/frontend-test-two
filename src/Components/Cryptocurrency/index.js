import React from "react";
import { CoinContainer, Container } from "./styles";
import { NormalPriceFormat } from "../../util/index";
import Link from "next/link";
import Image from "next/image";

export default function CoinList({
  id,
  image,
  name,
  price24h,
  marketCap,
  currentPrice,
}) {
  return (

    <Container>
      <CoinContainer>
      <Link href={`/coinDetail/${id}`}>
        <ul>
          <li>
            <Image src={image} alt={name} width={80} height={40}/>
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
        </Link>
      </CoinContainer>
    </Container>
  );
}
