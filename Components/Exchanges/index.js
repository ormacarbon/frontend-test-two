import React from "react";
import Link from "next/link";
import {ExchangeItems} from './styles'

export default function ExchangesList({image,name,url,trustScore,trustRank}) {
  return (
    <ExchangeItems>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <Link href={url}>Click here to be redirected <br/> to the exchange</Link>
            <p>Trust Score:{trustScore}</p>
            <p>Trust Score Rank: {trustRank}</p>
    </ExchangeItems>
  );
}
