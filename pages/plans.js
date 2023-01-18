import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ButtonLink } from "../components/Button/style";
import { DivPlans, DivPlansTitle, MainPlans } from "./Plans/style";

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

        <DivPlans className="container">
          <div className="plans-item">
            <h3 className="font-1-xl color-6">SILVER</h3>
            <span className="font-1-xl color-0">
              $ 19 <span className="font-1-xs color-6">month</span>
            </span>
            <ul className="font-2-m color-0">
              <li>3% off in your bill</li>
              <li>1 extra beer on the house</li>
              <li>1 side for half the price</li>
              <li>free parking vallet</li>
            </ul>
            <ButtonLink>
              <Link className="button second" href="/">
                Take me there
              </Link>
            </ButtonLink>
          </div>

          <div className="plans-item">
            <h3 className="font-1-xl color-p1">GOLD</h3>
            <span className="font-1-xl color-0">
              $ 39 <span className="font-1-xs color-6">month</span>
            </span>
            <ul className="font-2-m color-0">
              <li>10% off in your bill</li>
              <li>3 extra beers on the house</li>
              <li>2 sides and 1 main dish for half the price</li>
              <li>free parking vallet for a week</li>
              <li>1+ hour for the Happy Hour</li>
              <li>2 tickets for city events</li>
            </ul>
            <ButtonLink>
              <Link className="button" href="/">
                Take me there
              </Link>
            </ButtonLink>
          </div>
        </DivPlans>
      </MainPlans>
    </>
  );
}
