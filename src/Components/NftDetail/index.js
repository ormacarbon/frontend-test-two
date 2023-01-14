import React from "react";
import { Header, Nft, NftInfo } from "./styles";
import BackBtn from "../BackBtn";
import Image from "next/image";

export default function NftDetails({
  name,
  contractAddress,
  image,
  description,
  floorPrice,
  marketCap,
  nativeCurrency,
}) {
  return (
    <Nft>
      <Header>
        <h2>{name}</h2>
        <BackBtn link={"/nfts"} />
      </Header>
      <p id="contract">{contractAddress}</p>
      <Image src={image} alt={name} width={200} height={200}/>
      <p id="description">{description}</p>
      <NftInfo>
        <div className="box">
          <h3>Floor Price</h3>
          <span>
            {floorPrice} {nativeCurrency}
          </span>
        </div>
        <div className="box">
          <h3>Market Cap</h3>
          <span>
            {marketCap} {nativeCurrency}
          </span>
        </div>
      </NftInfo>
    </Nft>
  );
}
