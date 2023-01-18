import React, { useEffect, useState } from "react";
import { DivTerms, DivTermsTitle, MainTerms } from "./Terms/style";

export default function Contact() {
  return (
    <>
      <MainPlans>
        <DivPlansTitle>
          <div className="title container">
            <p className="font-2-l-b color-5">choose a plan</p>
            <h1 className="font-1-xxl color-0">
              cheers<span className="color-p1">.</span>
            </h1>
          </div>
        </DivPlansTitle>

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
