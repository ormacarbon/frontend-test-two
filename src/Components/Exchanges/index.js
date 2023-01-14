import React from "react";
import Link from "next/link";
import {ExchangeItems} from './styles'
import Image from "next/image";

export default function ExchangesList({id,image,name,url,trustScore,trustRank}) {
  return (
   <Link href={`/exchangeDetail/${id}`}>
    <ExchangeItems>
        <Image src={image} alt={name} width={70} height={70}/>
        <h3>{name}</h3>
        <Link href={url}>Click here to be redirected <br/> to the exchange</Link>
        <p>Trust Score:<span className="score">{trustScore}</span></p>
        <p>Trust Score Rank: <span className="score">{trustRank}</span></p>
    </ExchangeItems>
   </Link>
  );
}
