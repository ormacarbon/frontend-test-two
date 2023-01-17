import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Img1 from "../assets/claude-piche-EHbtjmz7hvw-unsplash.jpg";
import Img2 from "../assets/hans-isaacson-bNhut7wv6HE-unsplash.jpg";
import Img3 from "../assets/marco-montero-pisani-5qTxX7nicco-unsplash.jpg";
import Img4 from "../assets/josh-olalde-5PGp5nDOKxI-unsplash.jpg";
import Icon1 from "../assets/sports_bar_FILL1_wght400_GRAD0_opsz48 1.svg";
import Icon2 from "../assets/storefront_FILL0_wght400_GRAD0_opsz24 1.svg";
import { DivTerms, DivTermsTitle, MainTerms } from "./Terms/style";

export default function Contact() {
  return (
    <>
      <MainTerms>
        <DivTermsTitle>
          <div className="title container">
            <p className="font-2-l-b color-5">Use terms</p>
            <h1 className="font-1-xxl color-0">
              terms and conditions<span className="color-p1">.</span>
            </h1>
          </div>
        </DivTermsTitle>

        <DivTerms className="font-2-s color-10 container">
          <h2 className="font-1-l color-11">1. Brewery private informations</h2>
          <p>
            1.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            1.2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            1.3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className="font-1-l color-11">2. User Experience</h2>
          <p>
            2.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className="font-1-l color-11">3. Our Plans</h2>
          <p>
            3.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </DivTerms>
      </MainTerms>
    </>
  );
}
