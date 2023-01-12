import React from "react";
import Link from "next/link";
import {ExchangeItems} from './styles'

export default function ExchangesList({id,image,name,url,trustScore,trustRank}) {
  return (
   <Link href={`/exchangeDetail/${id}`}>
    <ExchangeItems>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <Link href={url}>Click here to be redirected <br/> to the exchange</Link>
        <p>Trust Score:<span className="score">{trustScore}</span></p>
        <p>Trust Score Rank: <span className="score">{trustRank}</span></p>
    </ExchangeItems>
   </Link>
  );
}
