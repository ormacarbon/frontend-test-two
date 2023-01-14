import React from "react";
import Image from "next/image";
import coin from "../public/coin.png";
import styled from "styled-components";



const trending = ({ title }) => {


  return (
    <div>
      <div>
        <h5>All Coins</h5>
      </div>
      <div>
        <div>
          <Image src={coin} alt="/" />
        </div>
        <div>
          <p>Etherium Two</p>
        </div>
      </div>
    </div>
    
  );
};

export default trending;
