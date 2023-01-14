import React from "react";
import { BsFacebook, BsFillHeartFill } from "react-icons/bs";
import {AiOutlineLink} from 'react-icons/ai'
import { MdLocationOn } from "react-icons/md";
import {ExchangeImage,Info,MainContainer,SocialMedia} from './styles'
import Link from "next/link";
import Image from "next/image";

export default function ExchangeDetail({image, name,country,trustScore,FaceUrl,MediumUrl,RedditUrl}) {
  return (
    <>
      <MainContainer>
        <ExchangeImage>
            <Image src={image} width={80} height={80} alt={name}/>
        </ExchangeImage>
            <h2>{name}</h2>
            <SocialMedia>
                <Link href={FaceUrl}><BsFacebook className="icon"/></Link>
                <Link href={MediumUrl}><AiOutlineLink className="icon"/></Link>
                <Link href={RedditUrl}><AiOutlineLink className="icon"/></Link>
            </SocialMedia>
            <Info>
            <div className="info-box">
                <MdLocationOn className="icon"/>
                <p>{country}</p>
            </div>
            <div className="info-box">
                <BsFillHeartFill className="icon" />
                <p>{trustScore}</p>
            </div>
            </Info>
      </MainContainer>
    </>
  );
}
