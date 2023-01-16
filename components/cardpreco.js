import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Cryptocard from "./cryptocard";

const OrgPrice = styled.div`
  
  
`;

const OrgDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 50px;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`

const cardpreco = ({ coinsData }) => {
  return (
    <OrgPrice>
      {coinsData.map((coin, index) => (
        <OrgDiv>
          <Cryptocard
            key={index}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        </OrgDiv>
      ))}
    </OrgPrice>
  );
};

export default cardpreco;
