import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { NftItem, NftsContainer, Text } from "./styles";
import { SectionTitle } from "../../Components/SectionTitle/index";
import SEO from "../../Components/SEO";
import Pagination from "../../Components/Pagination";
import LoaderComponent from "../../Components/Loader";

export default function nfts() {
  const url = "nfts/list"
  const { response, isLoading, error,refresh } = useApi(url);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 15;

  const totalPages = Math.ceil(response.length / perPage);

  const handlePageChange = (page) => {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentPageNft = response.slice(startIndex, endIndex);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      refresh(url);
    }, 300000);
    return () => clearInterval(intervalId);
  }, [refresh]);

  return (
    <main>
      <SEO name="Crypto.me | NFT´S" desc="nft´s list" />
      <section id="nfts">
        <NftsContainer>
          <SectionTitle
            title="NFT´S"
            desc="The nft´s api according to coingecko is still in Beta version, which means it may have some bugs."
          />
          <Text>Click on any nft option to see the details and picture.</Text>
          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
          <NftItem>
            {isLoading ? (
              <LoaderComponent />
            ) : (
              currentPageNft.map((nft) => (
                <Link href={`/nftDetail/${nft.id}`}>
                  <ul key={nft.id}>
                    <li>Name: {nft.name}</li>
                    <li>Contract Address: {nft.contract_address}</li>
                  </ul>
                </Link>
              ))
            )}
          </NftItem>
          {error ? error : ""}
        </NftsContainer>
      </section>
    </main>
  );
}
