import React, { useEffect, useState, useRef, useContext } from "react";
import {
  ArticlePlans,
  DivBreweryContent,
  DivBreweryTitle,
  DivPlans,
  DivPlansContent,
  MainBrewery,
} from "./Brewery/style";
import { Context } from "../utility/context";
import Image from "next/image";
import { ButtonLink } from "../components/Button/style";
import Link from "next/link";
import Img1 from "../assets/claude-piche-EHbtjmz7hvw-unsplash.jpg";
import Img2 from "../assets/thomas-thompson-BoVxWyS5KAE-unsplash.jpg";

export default function Contact() {
  const { context, setContext } = useContext(Context);
  console.log(context);
  return (
    <>
      <MainBrewery>
        <DivBreweryTitle>
          <div className="title container">
            <p className="font-2-xl color-5">{context.brewery_type}</p>
            <h1 className="font-1-xxl color-0">
              {context.name}
              <span className="color-p1">.</span>
            </h1>
          </div>
        </DivBreweryTitle>

        <DivBreweryContent className="container">
          <div className="container">
            <Image src={Img1} alt="Brewery" />
          </div>
          <div className="plans-item">
            <h3 className="font-1-xl color-6">{context.name}</h3>
            <ul className="font-2-m color-0">
              <li>{context.brewery_type}</li>
              <li>{context.street}</li>
              <li>{context.city}</li>
              <li>{context.state}</li>
            </ul>
            <ButtonLink>
              <Link className="button second" href="/">
                Take me there
              </Link>
            </ButtonLink>
          </div>
        </DivBreweryContent>
      </MainBrewery>

      <ArticlePlans>
        <h2 className="font-1-xxl container">
          check our plans<span className="color-p1">.</span>
        </h2>
        <DivPlans className="container">
          <div className="plans-image ">
            <Image src={Img2} alt="Brewery Plans" />
          </div>
          <div>
            <h2 className="font-1-xxl color-0">
              Sign up for one of our plans and get awesome
              <span className="color-p1"> features.</span>
            </h2>
            <p className="font-2-l color-5">
              Sign up for one of our plans and enjoy a variety of benefits.
            </p>
          </div>
          <ButtonLink>
            <Link className="button seta" href="/brewery">
              Learn More
            </Link>
          </ButtonLink>
        </DivPlans>
      </ArticlePlans>
    </>
  );
}
