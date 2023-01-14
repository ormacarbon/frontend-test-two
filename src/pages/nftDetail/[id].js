import React from "react";
import { NftDetailService } from "../../classes";
import NftDetails from "../../Components/NftDetail";
import SEO from "../../Components/SEO";
import { Nft, NftDetailContainer, NftInfo } from "./styles";

export async function getServerSideProps({ params }) {
  const nft = await NftDetailService.getNft(params.id);
  return {
    props: {
      nft,
    },
  };
}

export default function nftDetail({ nft }) {
  return (
    <main>
      <SEO name={"NFT | " + nft.name} desc={nft.name} />
      <section id="nft-detail">
        <NftDetailContainer>
            <NftDetails
            contractAddress={nft.contract_address}
            description={nft.description}
            floorPrice={nft.floor_price.native_currency}
            image={nft.image.small}
            marketCap={nft.market_cap.native_currency}
            nativeCurrency={nft.native_currency}
            name={nft.name}
            />
        </NftDetailContainer>
      </section>
    </main>
  );
}
