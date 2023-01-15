import React from "react";
import Image from "next/image";
import coin from "../public/coin.png";
import styled from "styled-components";

const ExtDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: bold;

  }
`

const CoinImg = styled(Image)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative; 
`



const trending = ({ title }) => {


  return (
    <div>
      <div>
        <h5>All Coins</h5>
      </div>
      <ExtDiv>
        <div>
          <CoinImg src="" alt="/" />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </ExtDiv>
    </div>

  );
};

export default trending;
